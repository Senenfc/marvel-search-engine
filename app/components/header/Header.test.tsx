import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

vi.mock("../favoritesCounter", () => ({
  FavoritesCounter: () => <div data-testid="counter">0</div>,
}));

describe("Header Component", () => {
  test("render header images", () => {
    render(<Header />);
    expect(screen.getByAltText("Marvel logo")).toBeDefined();
    expect(screen.getByAltText("Marvel logo")).toBeDefined();
  });

  test("renders the FavoritesCounter component", () => {
    render(<Header />);
    const favoritesCounter = screen.getAllByTestId("counter");
    expect(favoritesCounter).toBeDefined();
  });
});
