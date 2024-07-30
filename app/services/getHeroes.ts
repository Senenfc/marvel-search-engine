import { apiServiceGet } from "./base";

export const getHeroes = async () => {
  try {
    const data = await apiServiceGet("/characters", { limit: 50 });

    const heroes = data.data.results.map((hero: any) => ({
      id: hero.id,
      name: hero.name,
      image: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
    }));
    
    return heroes;
  } catch (error) {
    console.error(`Error fetching heroes: ${error}`);
  }
};
