import { apiServiceGet } from "./base";

export const getComicsByHero = async (heroId: number) => {
  const data = await apiServiceGet(`/characters/${heroId}/comics`);
  const comicsInfo = data.data.results.map((comic: any) => ({
    id: comic.id,
    title: comic.title,
    image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
    dates: comic.dates,
  }));
  return comicsInfo;
};
