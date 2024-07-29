"use client";

import { createContext, useEffect, useState } from "react";
import { Heroes, IAppContext } from "../interfaces";

export const AppContext = createContext<IAppContext>({
  favoriteHeroes: [],
  setFavoriteHeroes: () => null,
});

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [favoriteHeroes, setFavoriteHeroes] = useState<Heroes[]>([]);

  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorite-heroes") ?? "[]"
    );
    setFavoriteHeroes(favorites);
  }, []);

  return (
    <AppContext.Provider value={{ favoriteHeroes, setFavoriteHeroes }}>
      {children}
    </AppContext.Provider>
  );
};
