import { SearchEngine } from "./components";
import styles from "./page.module.css";
import { getHeroes } from "./services";

export default async function MarvelSearchPage() {
  const heroes = await getHeroes();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <SearchEngine heroes={heroes} />
      </div>
    </main>
  );
}
