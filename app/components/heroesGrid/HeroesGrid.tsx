import { HeroCard } from "../heroCard/HeroCard";
import styles from "./HeroesGrid.module.css";

export const HeroesGrid = ({ heroes }: any) => {
  return (
    <div className={styles.grid}>
      {heroes.map((hero: any) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
};
