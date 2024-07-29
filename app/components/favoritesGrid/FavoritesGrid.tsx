"use client";

import { useContext } from "react";
import { HeroesGrid } from "../heroesGrid";
import { AppContext } from "@/app/context";
import { SearchEngine } from "../searchEngine";

export const FavoritesGrid = () => {
  const { favoriteHeroes } = useContext<any>(AppContext);

  return <SearchEngine heroes={favoriteHeroes} />;
};
