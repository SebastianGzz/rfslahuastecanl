import styles from "@/styles/QuestionAndAnsware.module.scss";

export default function QuestionAndAnsware({ question, answare }) {
  return (
    <div className={styles.block}>
      <h3 className={styles.blockQuestion}>{question}</h3>
      <p className={styles.blockAnsware}>{answare}</p>
    </div>
  );
}
