"use client";

import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

export const Providers = ({ children }: any) => {
  const [favoriteHeroes, setFavoriteHeroes] = useState<any>([]);

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
