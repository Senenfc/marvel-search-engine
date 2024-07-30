import { describe, test, expect, vi } from "vitest";
import { getComicsByHero } from "./getComicsByHero";
import { apiServiceGet } from "./base";

vi.mock("./base", () => ({
  apiServiceGet: vi.fn(),
}));

describe("getComicsByHero", () => {
  test("fetches and processes comics correctly", async () => {
    const mockApiResponse = {
      data: {
        results: [
          {
            id: 1,
            title: "Comic One",
            thumbnail: {
              path: "http://example.com/image1",
              extension: "jpg",
            },
            dates: [{ type: "onsaleDate", date: "2022-01-01" }],
          },
          {
            id: 2,
            title: "Comic Two",
            thumbnail: {
              path: "http://example.com/image2",
              extension: "jpg",
            },
            dates: [{ type: "onsaleDate", date: "2023-01-01" }],
          },
        ],
      },
    };

    (apiServiceGet as any).mockResolvedValue(mockApiResponse);

    const heroId = 123;
    const comics = await getComicsByHero(heroId);

    expect(apiServiceGet).toHaveBeenCalledWith(`/characters/${heroId}/comics`);
    expect(comics).toEqual([
      {
        id: 1,
        title: "Comic One",
        image: "http://example.com/image1.jpg",
        dates: [{ type: "onsaleDate", date: "2022-01-01" }],
      },
      {
        id: 2,
        title: "Comic Two",
        image: "http://example.com/image2.jpg",
        dates: [{ type: "onsaleDate", date: "2023-01-01" }],
      },
    ]);
  });

  test("handles empty results", async () => {
    const mockApiResponse = {
      data: {
        results: [],
      },
    };

    (apiServiceGet as any).mockResolvedValue(mockApiResponse);

    const heroId = 123;
    const comics = await getComicsByHero(heroId);

    expect(apiServiceGet).toHaveBeenCalledWith(`/characters/${heroId}/comics`);
    expect(comics).toEqual([]);
  });
});
