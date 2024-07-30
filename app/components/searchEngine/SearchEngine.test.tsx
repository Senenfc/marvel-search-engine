import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { SearchEngine } from "./SearchEngine";
import { Heroes } from "@/app/interfaces";

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

  test("renders the search input and initial results", () => {
    render(<SearchEngine heroes={mockHeroes} />);

    const searchInput = screen.getAllByPlaceholderText(/search a hero/i);
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

    const resultsText = screen.getByText(/2 results/i);
    expect(resultsText).toBeDefined();

    const heroesGrid = screen.getAllByTestId("heroes-grid");
    expect(heroesGrid[0].children.length).toBe(2);

    expect(screen.getAllByText(/iron man/i)).toBeDefined();
    expect(screen.getAllByText(/spider-man/i)).toBeDefined();
  });

  test("shows no results when no hero matches the search term", () => {
    render(<SearchEngine heroes={mockHeroes} />);

    const searchInput = screen.getAllByPlaceholderText(/search a hero/i);
    fireEvent.change(searchInput[0], { target: { value: "thor" } });

    const resultsText = screen.getByText(/0 results/i);
    expect(resultsText).toBeDefined();

    const heroesGrid = screen.getAllByTestId("heroes-grid");
    expect(heroesGrid[0].children.length).toBe(0);
  });
});
