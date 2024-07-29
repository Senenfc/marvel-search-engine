"use client";

import { useEffect, useState } from "react";
import { HeroesGrid } from "../heroesGrid";
import styles from "./SearchEngine.module.css";

export const SearchEngine = ({ heroes }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHeroes, setFilteredHeroes] = useState(heroes);

  useEffect(() => {
    const filtered = heroes.filter((hero: any) =>
      hero.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredHeroes(filtered);
  }, [searchTerm, heroes]);

  return (
    <>
      <input
        className={styles.search}
        type="text"
        placeholder="🔍 SEARCH A HERO..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p className={styles.results}>{filteredHeroes.length} RESULTS</p>
      <HeroesGrid heroes={filteredHeroes} />
    </>
  );
};
