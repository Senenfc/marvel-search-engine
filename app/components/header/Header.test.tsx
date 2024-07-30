import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

test("Header", () => {
  render(<Header />);
  expect(screen.getByAltText("Marvel logo")).toBeDefined();
  expect(screen.getByAltText("Heart icon")).toBeDefined();
});
