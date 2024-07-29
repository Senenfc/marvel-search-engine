"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "@/app/context";
import { HeartIconFilled } from "@/app/assets/HeartIconFilled";
import { HeartIcon } from "@/app/assets/HeartIcon";
import styles from "./HeroCard.module.css";
import { Heroes, IAppContext } from "@/app/interfaces";

export const HeroCard = ({ hero }: { hero: Heroes }) => {
  const { id, name, image } = hero;

  const { favoriteHeroes, setFavoriteHeroes } =
    useContext<IAppContext>(AppContext);

  const isFavorite = favoriteHeroes.some(
    (fav: Heroes) => fav.id === hero.id
  );

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
    <div className={styles.card}>
      <Link href={`/hero/${id}`}>
        <div className={styles.container}>
          <Image
            key={id}
            src={image}
            width={200}
            height={200}
            alt={name}
            priority={false}
          />
        </div>
        <div className={styles.info}>
          <p className={styles.name}>{name}</p>
          <div
            className={styles.favorite}
            onClick={(e) => {
              e.preventDefault();
              toggleFavorite(hero);
            }}
          >
            {isFavorite ? <HeartIconFilled /> : <HeartIcon />}
          </div>
        </div>
      </Link>
    </div>
  );
};
