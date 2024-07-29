"use client";

import { useEffect, useState } from "react";
import { HeroesGrid } from "../heroesGrid";
import styles from "./SearchEngine.module.css";
import { Heroes } from "@/app/interfaces";

export const SearchEngine = ({ heroes }: { heroes: Heroes[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHeroes, setFilteredHeroes] = useState(heroes);

  useEffect(() => {
    const filtered = heroes.filter((hero: Heroes) =>
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
