"use client";

import { useContext } from "react";
import { AppContext } from "@/app/context";
import { SearchEngine } from "../searchEngine";
import { IAppContext } from "@/app/interfaces";

export const FavoritesGrid = () => {
  const { favoriteHeroes } = useContext<IAppContext>(AppContext);

  return <SearchEngine heroes={favoriteHeroes} />;
};
