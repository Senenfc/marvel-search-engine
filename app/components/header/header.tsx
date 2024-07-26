import Image from "next/image";
import styles from "./header.module.css";
import Logo from "@/public/logo.svg";
import HeartIconFilled from "@/public/heart-icon-filled.svg"

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <section>
          <div className={styles.container}>
            <div>
              <Image
                priority
                alt="Marvel logo"
                src={Logo}
                width={130}
                height={52}
              />
            </div>
            <div>
            <Image
                priority
                alt="Heart icon"
                src={HeartIconFilled}
                width={24}
                height={21}
              />
            </div>
          </div>
        </section>
      </nav>
    </header>
  );
};
