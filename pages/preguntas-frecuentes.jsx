import QuestionAndAnsware from "@/components/QuestionAndAnsware";
import DefaulLayout from "@/components/layouts/DefaulLayout";
import styles from "@/styles/PreguntasFrecuentes.module.scss";

export default function PreguntasFrecuentes() {
  return (
    <DefaulLayout>
      <div className={styles.expansionLimit}>
        <QuestionAndAnsware
          question="¿Como se eligen a los ganadores?"
          answare="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet."
        />
        <QuestionAndAnsware
          question="¿Qué sucede cuando el numero ganador no fue vendido?"
          answare="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet."
        />
        <QuestionAndAnsware
          question="¿Dónde se publica a los ganadores?"
          answare="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet."
        />
        <QuestionAndAnsware
          question="¿Como se eligen a los ganadores?"
          answare="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet."
        />
        <QuestionAndAnsware
          question="¿Qué sucede cuando el numero ganador no fue vendido?"
          answare="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet."
        />
        <QuestionAndAnsware
          question="¿Dónde se publica a los ganadores?"
          answare="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet."
        />
      </div>
    </DefaulLayout>
  );
}
