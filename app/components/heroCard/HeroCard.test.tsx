import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { HeroCard } from "./HeroCard";
import { AppContext } from "@/app/context";
import { Heroes } from "@/app/interfaces";

const hero: Heroes = {
  id: 1,
  name: "Spider-Man",
  image: "/spiderman.jpg",
};

const favoriteHeroes: Heroes[] = [hero];
const setFavoriteHeroes = vi.fn();

const mockContext = {
  favoriteHeroes,
  setFavoriteHeroes,
};

describe("HeroCard", () => {
  test("renders hero name and image", () => {
    render(
      <AppContext.Provider value={mockContext}>
        <HeroCard hero={hero} />
      </AppContext.Provider>
    );

    const nameElement = screen.getByText(/Spider-Man/i);
    const imageElement = screen.getByRole("img", { name: /Spider-Man/i });

    expect(nameElement).toBeDefined();
    expect(imageElement).toBeDefined();
  });

  test("toggles favorite status on click", () => {
    render(
      <AppContext.Provider value={mockContext}>
        <HeroCard hero={hero} />
      </AppContext.Provider>
    );

    const favoriteButton = screen.getAllByTestId("favoriteButton");
    expect(favoriteButton).toBeDefined();

    fireEvent.click(favoriteButton[0]);

    expect(setFavoriteHeroes).toHaveBeenCalled();

    fireEvent.click(favoriteButton[0]);

    expect(setFavoriteHeroes).toHaveBeenCalledTimes(2);
  });
});
