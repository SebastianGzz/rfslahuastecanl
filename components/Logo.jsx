import Link from "next/link";
import styles from "@/styles/Logo.module.scss";

export default function Logo({ color }) {
  return (
    <Link href="/" className={styles.LogoLink}>
      <section
        style={{ backgroundColor: color }}
        className={styles.logoContainer}
      >
        {/* <img src="/images/logo.png" alt="Logo" /> */}
      </section>

      <section className={styles.nameContainer}>
        <span style={{ color: color }} className={styles.logoFirstLine}>
          RFS La Huasteca
        </span>
        <span style={{ color: color }} className={styles.logoSecondLine}>
          Nuevo Leon
        </span>
      </section>
    </Link>
  );
}
