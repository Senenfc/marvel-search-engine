import { Metadata } from "next";
import { FavoritesGrid } from "../components";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Favorite heroes",
  description: "Show here your favorite heroes list.",
};

export default function FavoritesPage() {
  return (
    <main className={styles.main}>
      <FavoritesGrid />
    </main>
  );
}
