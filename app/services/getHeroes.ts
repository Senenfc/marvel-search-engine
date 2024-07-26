import { apiServiceGet } from "./base";

export const getHeroes = async () => {
  try {
    const data = await apiServiceGet("/characters", { limit: 50 });
    return data.data.results;
  } catch (error) {
    console.error(`Error fetching heroes: ${error}`);
  }
};
