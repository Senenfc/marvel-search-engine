import ComicList from "@/app/components/comicList/ComicList";
import { getComicsByHero, getHeroById } from "@/app/services";
import Image from "next/image";

export default async function HeroPage({ params }: any) {
  const hero = await getHeroById(params.id);
  const comics = await getComicsByHero(params.id);

  return (
    <main>
      <section style={{ display: "flex", padding: "20px" }}>
        <div style={{ marginRight: "20px" }}>
          <Image
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            alt={hero.name}
            width={200}
            height={200}
          />
        </div>
        <div>
          <h1>{hero.name}</h1>
          <p>{hero.description}</p>
        </div>
      </section>
      <section>
        <ComicList comics={comics} />
      </section>
    </main>
  );
}
