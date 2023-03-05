import Link from "next/link";
import Image from "next/image";
import DefaulLayout from "@/components/layouts/DefaulLayout";
import styles from "@/styles/Home.module.scss";

import TicketDarkIcon from "@/assets/icons/ticket-dark.svg";

export default function Home() {
  return (
    <DefaulLayout>
      <div className={styles.rfaBanner}>
        <div className={styles.expansionLimit}>
          <div>
            <h1 className={styles.rfaBannerTitle}>Mercedes Benz</h1>
            <h2 className={styles.rfaBannerDescription}>
              Mercedes AMG Clase G 5.5l G 63 Amg Biturbo At
            </h2>
          </div>

          <div className={styles.rfaBannerActionButton}>
            <Link href="/boletos" className={styles.actionButton}>
              <Image src={TicketDarkIcon} alt="Ticket Icon" />
              Comprar Boletos
            </Link>
          </div>
        </div>
      </div>
    </DefaulLayout>
  );
}
