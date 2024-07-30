import ComicList from "@/app/components/comicList/ComicList";
import { getComicsByHero, getHeroById, getHeroes } from "@/app/services";
import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";
import { Heroes } from "@/app/interfaces";

export async function generateMetadata({
  params,
}: {
  params: { id: number };
}): Promise<Metadata> {
  try {
    const hero = await getHeroById(params.id);

    return {
      title: hero?.name,
      description: `${hero?.name} hero's page`,
    };
  } catch (error) {
    return {
      title: "Hero's page",
      description: "Hero's page info",
    };
  }
}

export async function generateStaticParams() {
  const heroes = await getHeroes();

  return heroes.map((hero: Heroes) => ({ id: hero.id.toString() }));
}

export default async function HeroPage({ params }: { params: { id: number } }) {
  const hero = await getHeroById(params.id);
  const comics = await getComicsByHero(params.id);

  return (
    <main>
      <section className={styles.sectionOne}>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image
              src={hero?.image ?? ""}
              alt={hero?.name ?? ""}
              width={300}
              height={300}
            />
          </div>
          <div className={styles.info}>
            <h1 className={styles.name}>{hero?.name}</h1>
            <p>{hero?.description}</p>
          </div>
        </div>
      </section>
      <section className={styles.sectionTwo}>
        <div className={styles.containerComics}>
          <h2 className={styles.comics}>COMICS</h2>
          <ComicList comics={comics} />
        </div>
      </section>
    </main>
  );
}
