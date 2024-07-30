import { apiServiceGet } from "./base";

type Params = {
  limit: number;
  nameStartsWith?: string;
};

export const getHeroes = async (nameStartsWith = "") => {
  try {
    const params: Params = { limit: 50 };
    if (nameStartsWith) {
      params.nameStartsWith = nameStartsWith;
    }

    const data = await apiServiceGet("/characters", params);

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
