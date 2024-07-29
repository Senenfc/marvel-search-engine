import React from "react";
import Image from "next/image";

export const sortComicsByDate = (comics: any) => {
  return comics.sort(
    (a: any, b: any) => {
      const dateA = new Date(a.dates.find((date: any) => date.type === "onsaleDate").date).getTime();
      const dateB = new Date(b.dates.find((date: any) => date.type === "onsaleDate").date).getTime();
      return dateA - dateB;
    }
  );
};


const ComicList = ({ comics }: any) => {
  const sortedComics = sortComicsByDate(comics);

  return (
    <div className="comic-list">
      {sortedComics.map((comic: any) => {
        const onsaleDate = comic.dates.find(
          (date: any) => date.type === "onsaleDate"
        ).date;
        const year = new Date(onsaleDate).getFullYear();

        return (
          <div key={comic.id} className="comic-item">
            <Image
              src={comic.image}
              alt={comic.title}
              width={200}
              height={300}
            />
            <h3>{comic.title}</h3>
            <p>{year}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ComicList;
