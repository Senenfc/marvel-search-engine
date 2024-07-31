"use client";

import { HeartIcon } from "@/app/assets/HeartIcon";
import { HeartIconFilled } from "@/app/assets/HeartIconFilled";
import { AppContext } from "@/app/context";
import { Heroes, IAppContext } from "@/app/interfaces";
import { useContext } from "react";

export const FavoritesButton = ({
  hero,
  className,
}: {
  hero?: Heroes;
  className: string;
}) => {
  const { favoriteHeroes, setFavoriteHeroes } =
    useContext<IAppContext>(AppContext);

  const isFavorite = favoriteHeroes.some((fav: Heroes) => fav.id === hero?.id);

  const toggleFavorite = (hero: Heroes) => {
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = favoriteHeroes.filter(
        (fav: Heroes) => fav.id !== hero.id
      );
    } else {
      updatedFavorites = [...favoriteHeroes, hero];
    }

    setFavoriteHeroes(updatedFavorites);
    localStorage.setItem("favorite-heroes", JSON.stringify(updatedFavorites));
  };

  return (
    <div
      className={className}
      data-testid="favoriteButton"
      onClick={(e) => {
        e.preventDefault();
        hero && toggleFavorite(hero);
      }}
    >
      {isFavorite ? <HeartIconFilled /> : <HeartIcon />}
    </div>
  );
};
