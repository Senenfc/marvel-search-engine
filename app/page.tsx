import { SearchEngine } from "./components";
import styles from "./page.module.css";
import { getHeroes } from "./services";

export default async function MarvelSearchPage({
  searchParams,
}: {
  searchParams: {
    search?: string;
  };
}) {
  const { search } = searchParams;
  const heroes = await getHeroes(search);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <SearchEngine heroes={heroes} />
      </div>
    </main>
  );
}
