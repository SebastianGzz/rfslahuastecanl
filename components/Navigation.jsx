import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Navigation.module.scss";
import Logo from "./Logo";

import TicketIcon from "@/assets/icons/ticket.svg";

export default function Navigation() {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const handleMenu = () => {
    setVisibleMenu(!visibleMenu);
  };

  return (
    <nav className={styles.navigationBar}>
      <div className={styles.expansionLimit}>
        <Logo color="#041e49" />

        <div
          className={`${styles.navLinksContainer} ${
            visibleMenu && styles.navLinksContainerActive
          }`}
        >
          <div className={styles.navLinks}>
            <Link href="/pagos" className={styles.navLink}>
              Pagos
            </Link>
            <Link href="/preguntas-frecuentes" className={styles.navLink}>
              Pregutas Frecuentes
            </Link>
            <Link
              href="/boletos"
              className={`${styles.navLink} ${styles.btnBoletos}`}
            >
              <Image src={TicketIcon} width={20} alt="Ticket Icon" />
              Comprar Boletos
            </Link>
          </div>
        </div>

        <button onClick={handleMenu} className={styles.btnMenu}>
          <div
            className={`${styles.line1} ${visibleMenu && styles.activeLine1}`}
          />
          <div
            className={`${styles.line2} ${visibleMenu && styles.activeLine2}`}
          />
        </button>
      </div>
    </nav>
  );
}
