import Image from "next/image";
import styles from "./Header.module.css";
import Logo from "@/public/logo.svg";
import HeartIconFilled from "@/public/heart-icon-filled.svg";
import Link from "next/link";
import { FavoritesCounter } from "../favoritesCounter";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <section>
          <div className={styles.container}>
            <Link href={"/"}>
              <Image
                priority
                alt="Marvel logo"
                src={Logo}
                width={130}
                height={52}
              />
            </Link>
            <Link href={"/favorites"}>
              <Image
                priority
                alt="Heart icon"
                src={HeartIconFilled}
                width={24}
                height={21}
              />
              <FavoritesCounter />
            </Link>
          </div>
        </section>
      </nav>
    </header>
  );
};
