"use client";

import { HeroesGrid } from "../heroesGrid";
import styles from "./SearchEngine.module.css";
import { Heroes } from "@/app/interfaces";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const SearchEngine = ({ heroes }: { heroes: Heroes[] }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (text: string) => {
    const params = new URLSearchParams(searchParams);
    if (text) {
      params.set("search", text);
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <input
        className={styles.search}
        type="text"
        placeholder="🔍 SEARCH A HERO..."
        defaultValue={searchParams.get("search")?.toString()}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <p className={styles.results}>{heroes.length} RESULTS</p>
      <HeroesGrid heroes={heroes} />
    </>
  );
};
