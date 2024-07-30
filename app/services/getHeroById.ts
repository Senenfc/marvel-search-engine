import { apiServiceGet } from "./base";

export const getHeroById = async (id: number) => {
  const data = await apiServiceGet(`/characters/${id}`);

  const hero = data.data.results[0];
  const heroResult = {
    name: hero.name,
    image: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
    description: hero.description,
  };
  
  return heroResult;
};
