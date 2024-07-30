"use client";

import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/app/context";
import { Heroes, IAppContext } from "@/app/interfaces";
import { HeroesGrid } from "../heroesGrid";
import styles from "../searchEngine/SearchEngine.module.css";

export const FavoritesGrid = () => {
  const { favoriteHeroes } = useContext<IAppContext>(AppContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHeroes, setFilteredHeroes] = useState(favoriteHeroes);

  useEffect(() => {
    const filtered = favoriteHeroes.filter((hero: Heroes) =>
      hero.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredHeroes(filtered);
  }, [searchTerm, favoriteHeroes]);

  return (
    <>
      <input
        className={styles.search}
        type="text"
        placeholder="🔍 SEARCH A HERO..."
        defaultValue={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p className={styles.results}>{filteredHeroes.length} RESULTS</p>
      <HeroesGrid heroes={filteredHeroes} />
    </>
  );
};
