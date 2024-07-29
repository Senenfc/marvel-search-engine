import { Heroes } from "@/app/interfaces";
import { HeroCard } from "../heroCard/HeroCard";
import styles from "./HeroesGrid.module.css";

export const HeroesGrid = ({ heroes }: { heroes: Heroes[] }) => {
  return (
    <div className={styles.grid}>
      {heroes.map((hero: Heroes) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
};
