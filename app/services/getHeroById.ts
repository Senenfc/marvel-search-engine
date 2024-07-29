import { apiServiceGet } from "./base";

export const getHeroById = async (id: number) => {
  const data = await apiServiceGet(`/characters/${id}`);

  return data.data.results[0] ?? {};
};
