"use client";

import { AppContext } from "@/app/context";
import { useContext } from "react";
import styles from "./FavoritesCounter.module.css";
import { IAppContext } from "@/app/interfaces";

export const FavoritesCounter = () => {
  const { favoriteHeroes } = useContext<IAppContext>(AppContext);

  return <span className={styles.counter}>{favoriteHeroes.length}</span>;
};
