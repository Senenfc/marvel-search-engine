import { Dispatch, SetStateAction } from "react";
import { Heroes } from "./heroes";

export interface IAppContext {
  favoriteHeroes: Heroes[];
  setFavoriteHeroes: Dispatch<SetStateAction<Heroes[]>>
}
