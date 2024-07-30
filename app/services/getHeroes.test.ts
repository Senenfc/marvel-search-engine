import { describe, test, expect, vi } from "vitest";
import { getHeroes } from "./getHeroes";
import { apiServiceGet } from "./base";

vi.mock("./base", () => ({
  apiServiceGet: vi.fn(),
}));

describe("getHeroes", () => {
  test("fetches and processes heroes data correctly", async () => {
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
          },
          {
            id: 2,
            name: "Hero Two",
            thumbnail: {
              path: "http://example.com/image2",
              extension: "jpg",
            },
          },
        ],
      },
    };

    (apiServiceGet as any).mockResolvedValue(mockApiResponse);

    const heroes = await getHeroes();

    expect(apiServiceGet).toHaveBeenCalledWith("/characters", { limit: 50 });
    expect(heroes).toEqual([
      {
        id: 1,
        name: "Hero One",
        image: "http://example.com/image1.jpg",
      },
      {
        id: 2,
        name: "Hero Two",
        image: "http://example.com/image2.jpg",
      },
    ]);
  });

  test("handles errors gracefully", async () => {
    const mockError = new Error("Network error");
    (apiServiceGet as any).mockRejectedValue(mockError);

    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const heroes = await getHeroes();

    expect(apiServiceGet).toHaveBeenCalledWith("/characters", { limit: 50 });
    expect(heroes).toBeUndefined();
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      `Error fetching heroes: ${mockError}`
    );

    consoleErrorSpy.mockRestore();
  });
});
