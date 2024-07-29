import { FavoritesGrid } from "../components";
import styles from "./page.module.css";

export default function FavoritesPage() {
  return (
    <main className={styles.main}>
      <FavoritesGrid />
    </main>
  );
}
