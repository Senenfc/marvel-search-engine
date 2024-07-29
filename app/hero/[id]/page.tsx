import ComicList from "@/app/components/comicList/ComicList";
import { getComicsByHero, getHeroById } from "@/app/services";
import Image from "next/image";

export default async function HeroPage({ params }: any) {
  const hero = await getHeroById(params.id);
  const comics = await getComicsByHero(params.id);

  return (
    <main>
      <section
        style={{
          display: "flex",
          background: "#000000",
          color: "#ffffff",
          justifyContent: "center",
          borderTop: "2px solid #222",
        }}
      >
        <div
          style={{
            display: "flex",
            maxWidth: "1000px",
            alignItems: "center",
          }}
        >
          <div style={{ marginRight: "20px" }}>
            <Image
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              alt={hero.name}
              width={300}
              height={300}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <h1
              style={{
                fontSize: "40px",
                textTransform: "uppercase",
              }}
            >
              {hero.name}
            </h1>
            <p>{hero.description}</p>
          </div>
        </div>
      </section>
      <section
        style={{
          padding: "80px 0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
          }}
        >
          <h2 style={{ fontWeight: "700", fontSize: "32px" }}>COMICS</h2>
          <ComicList comics={comics} />
        </div>
      </section>
    </main>
  );
}
