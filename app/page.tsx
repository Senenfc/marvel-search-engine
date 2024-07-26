import styles from "./page.module.css";
import { getHeroes } from "./services";


export default async function MarvelSearchPage() {
  const heroes = await getHeroes();

  return (
    <main className={styles.main}>
      <h1>hello</h1>
      <div>
        {JSON.stringify(heroes)}
      </div>
    </main>
  );
}
