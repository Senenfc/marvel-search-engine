"use client";

import { useEffect, useState } from "react";
import { HeroesGrid } from "../heroesGrid";

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
        type="text"
        placeholder="SEARCH A HERO..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <HeroesGrid heroes={filteredHeroes} />
    </>
  );
};
