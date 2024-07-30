import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import ComicList, { sortComicsByDate } from "./ComicList";
import { Comics } from "@/app/interfaces";

const mockComics: Comics[] = [
  {
    id: 1,
    title: "Comic A",
    image: "/comicA.jpg",
    dates: [{ type: "onsaleDate", date: "2023-01-01" }],
  },
  {
    id: 2,
    title: "Comic B",
    image: "/comicB.jpg",
    dates: [{ type: "onsaleDate", date: "2022-01-01" }],
  },
  {
    id: 3,
    title: "Comic C",
    image: "/comicC.jpg",
    dates: [{ type: "onsaleDate", date: "2021-01-01" }],
  },
];

describe("ComicList", () => {
  test("sorts comics by onsale date", () => {
    const sortedComics = sortComicsByDate([...mockComics]);
    expect(sortedComics[0].title).toBe("Comic C");
    expect(sortedComics[1].title).toBe("Comic B");
    expect(sortedComics[2].title).toBe("Comic A");
  });

  test("renders the comic list correctly", () => {
    render(<ComicList comics={mockComics} />);

    const comicTitles = screen.getAllByRole("heading", { level: 3 });
    expect(comicTitles.length).toBe(3);
    expect(comicTitles[0].textContent).toBe("Comic C");
    expect(comicTitles[1].textContent).toBe("Comic B");
    expect(comicTitles[2].textContent).toBe("Comic A");

    const comicYears = screen.getAllByText(/\d{4}/);
    expect(comicYears.length).toBe(3);
    expect(comicYears[0].textContent).toBe("2021");
    expect(comicYears[1].textContent).toBe("2022");
    expect(comicYears[2].textContent).toBe("2023");
  });
});
