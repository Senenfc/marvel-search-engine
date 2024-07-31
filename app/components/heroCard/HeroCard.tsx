"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "@/app/context";
import { HeartIconFilled } from "@/app/assets/HeartIconFilled";
import { HeartIcon } from "@/app/assets/HeartIcon";
import styles from "./HeroCard.module.css";
import { Heroes, IAppContext } from "@/app/interfaces";
import { FavoritesButton } from "../favoritesButton";

export const HeroCard = ({ hero }: { hero: Heroes }) => {
  const { id, name, image } = hero;

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
          <FavoritesButton hero={hero} className={styles.favorite} />
        </div>
      </Link>
    </div>
  );
};
