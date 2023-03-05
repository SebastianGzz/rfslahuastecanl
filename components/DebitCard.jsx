import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/DebitCard.module.scss";

import BankIcon from "@/assets/icons/bank.svg";
import CopyIcon from "@/assets/icons/copy.svg";
import CheckIcon from "@/assets/icons/check.svg";

export default function DebitCard({ bank, number, holder, hex1, hex2 }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={styles.debitCard}
      style={{
        background: `linear-gradient(105.61deg, ${hex1} 0%, ${hex2} 100%)`,
      }}
    >
      <header className={styles.debitCardHeader}>
        <div className={styles.debitCardBank}>
          <Image src={BankIcon} alt="Bank Icon" />
          <h3 className={styles.debitCardBankName}>{bank}</h3>
        </div>

        <div>
          <button onClick={copyToClipboard} className={styles.debitCardBtnCopy}>
            <Image src={copied ? CheckIcon : CopyIcon} alt="" />
          </button>
        </div>
      </header>

      <div className={styles.debitCardInfo}>
        <span className={styles.debitCardNumber}>{number}</span>
        <span className={styles.debitCardHolder}>{holder}</span>
      </div>
    </div>
  );
}
