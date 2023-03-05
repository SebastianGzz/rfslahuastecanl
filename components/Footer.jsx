import Image from "next/image";
import Logo from "./Logo";
import styles from "@/styles/Footer.module.scss";

import FacebookIcon from "@/assets/icons/facebook.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import WhatsAppIcon from "@/assets/icons/whatsapp.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.expansionLimit}>
        <Logo color="#f6f8fc" />

        <section className={styles.socialNetworks}>
          <a href="#" className={styles.socialNetworksLink}>
            <Image src={FacebookIcon} alt="Facebook Icon" />
            <span className={styles.socialNetworksName}>Facebook</span>
          </a>
          <a href="#" className={styles.socialNetworksLink}>
            <Image src={InstagramIcon} alt="Instagram Icon" />
            <span className={styles.socialNetworksName}>Instagram</span>
          </a>
          <a href="#" className={styles.socialNetworksLink}>
            <Image src={WhatsAppIcon} alt="WhatsApp Icon" />
            <span className={styles.socialNetworksName}>WhatsApp</span>
          </a>
        </section>
      </div>
    </footer>
  );
}
