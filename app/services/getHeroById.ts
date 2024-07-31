import { apiServiceGet } from "./base";

export const getHeroById = async (id: number) => {
  const data = await apiServiceGet(`/characters/${id}`);

  if (!data?.data?.results || data?.data?.results.length === 0) {
    return undefined;
  }

  const hero = data.data.results[0];
  const heroResult = {
    id: hero.id,
    name: hero.name,
    image: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
    description: hero.description,
  };

  return heroResult;
};
