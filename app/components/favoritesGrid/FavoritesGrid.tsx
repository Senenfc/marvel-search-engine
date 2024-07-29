"use client";

import { useContext } from "react";
import { HeroesGrid } from "../heroesGrid";
import { AppContext } from "@/app/context";

export const FavoritesGrid = () => {
  const { favoriteHeroes } = useContext<any>(AppContext);

  return <HeroesGrid heroes={favoriteHeroes} />;
};
