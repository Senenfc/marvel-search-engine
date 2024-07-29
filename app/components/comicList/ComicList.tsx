import React from "react";
import Image from "next/image";
import styles from "./ComicList.module.css";

export const sortComicsByDate = (comics: any) => {
  return comics.sort((a: any, b: any) => {
    const dateA = new Date(
      a.dates.find((date: any) => date.type === "onsaleDate").date
    ).getTime();
    const dateB = new Date(
      b.dates.find((date: any) => date.type === "onsaleDate").date
    ).getTime();
    return dateA - dateB;
  });
};

const ComicList = ({ comics }: any) => {
  const sortedComics = sortComicsByDate(comics);

  return (
    <div className={styles.list}>
      {sortedComics.map((comic: any) => {
        const onsaleDate = comic.dates.find(
          (date: any) => date.type === "onsaleDate"
        ).date;
        const year = new Date(onsaleDate).getFullYear();

        return (
          <div key={comic.id} className={styles.item}>
            <Image
              src={comic.image}
              alt={comic.title}
              width={200}
              height={290}
            />
            <h3 className={styles.title}>{comic.title}</h3>
            <p className={styles.year}>{year}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ComicList;
