import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { SearchEngine } from "./SearchEngine";
import { Heroes } from "@/app/interfaces";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
  usePathname: vi.fn(),
  useSearchParams: vi.fn(),
}));

vi.mock("../heroesGrid", () => ({
  HeroesGrid: ({ heroes }: any) => (
    <div data-testid="heroes-grid">
      {heroes.map((hero: any) => (
        <div key={hero.id} data-testid="hero">
          {hero.name}
        </div>
      ))}
    </div>
  ),
}));

describe("SearchEngine", () => {
  const mockHeroes: Heroes[] = [
    { id: 1, name: "Iron Man", image: "ironman.jpg" },
    { id: 2, name: "Spider-Man", image: "spiderman.jpg" },
    { id: 3, name: "Hulk", image: "hulk.jpg" },
  ];

  const mockReplace = vi.fn();
  const mockUseRouter = useRouter;
  const mockUsePathname = usePathname;
  const mockUseSearchParams = useSearchParams;

  beforeEach(() => {
    (mockUseRouter as any).mockReturnValue({ replace: mockReplace });
    (mockUsePathname as any).mockReturnValue("/path");
    (mockUseSearchParams as any).mockReturnValue(new URLSearchParams(""));
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test("renders the search input and initial results", () => {
    render(<SearchEngine heroes={mockHeroes} />);

    const searchInput = screen.getByPlaceholderText(/search a hero/i);
    expect(searchInput).toBeDefined();

    const resultsText = screen.getByText(/3 results/i);
    expect(resultsText).toBeDefined();

    const heroesGrid = screen.getByTestId("heroes-grid");
    expect(heroesGrid.children.length).toBe(3);
  });

  test("filters heroes based on the search term", () => {
    render(<SearchEngine heroes={mockHeroes} />);

    const searchInput = screen.getAllByPlaceholderText(/search a hero/i);
    fireEvent.change(searchInput[0], { target: { value: "man" } });

    expect(mockReplace).toHaveBeenCalledWith("/path?search=man");

    (mockUseSearchParams as any).mockReturnValue(
      new URLSearchParams("search=man")
    );

    render(
      <SearchEngine
        heroes={mockHeroes.filter((hero) => hero.name.includes("man"))}
      />
    );

    const heroesGrid = screen.getAllByTestId("heroes-grid");
    expect(heroesGrid[0].children.length).toBe(3);

    expect(screen.getAllByText(/iron man/i)).toBeDefined();
    expect(screen.getAllByText(/spider-man/i)).toBeDefined();
  });

  test("shows no results when no hero matches the search term", () => {
    render(<SearchEngine heroes={mockHeroes} />);

    const searchInput = screen.getAllByPlaceholderText(/search a hero/i);
    fireEvent.change(searchInput[0], { target: { value: "thor" } });

    expect(mockReplace).toHaveBeenCalledWith("/path?search=thor");

    (mockUseSearchParams as any).mockReturnValue(
      new URLSearchParams("search=thor")
    );

    render(
      <SearchEngine
        heroes={mockHeroes.filter((hero) => hero.name.includes("thor"))}
      />
    );

    const resultsText = screen.getAllByText(/0 results/i);
    expect(resultsText).toBeDefined();

    const heroesGrid = screen.getAllByTestId("heroes-grid");
    expect(heroesGrid[0].children.length).toBe(3);
  });
});
