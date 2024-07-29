"use client";

import { AppContext } from "@/app/context";
import { useContext } from "react";
import styles from "./FavoritesCounter.module.css";

export const FavoritesCounter = () => {
  const { favoriteHeroes } = useContext<any>(AppContext);

  return <span className={styles.counter}>{favoriteHeroes.length}</span>;
};
