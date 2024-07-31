import { describe, test, expect, vi } from "vitest";
import { getHeroById } from "./getHeroById";
import { apiServiceGet } from "./base";

vi.mock("./base", () => ({
  apiServiceGet: vi.fn(),
}));

describe("getHeroById", () => {
  test("fetches and processes hero data correctly", async () => {
    const mockApiResponse = {
      data: {
        results: [
          {
            id: 1,
            name: "Hero One",
            thumbnail: {
              path: "http://example.com/image1",
              extension: "jpg",
            },
            description: "A hero description",
          },
        ],
      },
    };

    (apiServiceGet as any).mockResolvedValue(mockApiResponse);

    const heroId = 1;
    const hero = await getHeroById(heroId);

    expect(apiServiceGet).toHaveBeenCalledWith(`/characters/${heroId}`);
    expect(hero).toEqual({
      id: 1,
      name: "Hero One",
      image: "http://example.com/image1.jpg",
      description: "A hero description",
    });
  });

  test("handles missing hero data gracefully", async () => {
    const mockApiResponse = {
      data: {
        results: [],
      },
    };

    (apiServiceGet as any).mockResolvedValue(mockApiResponse);

    const heroId = 1;
    const hero = await getHeroById(heroId);

    expect(apiServiceGet).toHaveBeenCalledWith(`/characters/${heroId}`);
    expect(hero).toBeUndefined();
  });
});
