import DebitCard from "@/components/DebitCard";
import DefaulLayout from "@/components/layouts/DefaulLayout";
import styles from "@/styles/Pagos.module.scss";

export default function Pagos() {
  return (
    <DefaulLayout>
      <div className={styles.expansionLimit}>
        <h1>Formas de pago</h1>
        <p>
          Solo se aceptan Depósito o Transferencia, importante no olvidar poner
          en “Concepto de pago” su nombre completo esto con el fin de validar su
          Depósito o Transferencia. El nombre que ingresaste al apartar tus
          boleto(s) tiene que ser el mismo que el ingresado en el Concepto de
          pago.
        </p>

        <ol>
          <li>Separa tu boletos</li>
          <li>Realizar Deposito/Transferencia</li>
          <li>Compartir Deposito/Transferencia por WhatsApp</li>
        </ol>

        <p>
          Una ves validado su pago se le enviara su boleto digital a su
          WhatsApp.
        </p>

        <section className={styles.cardsContainer}>
          <DebitCard
            bank="BBVA"
            number="0000 1554 6541 2543"
            holder="Cameron Williamson"
            hex1="#05CDDA"
            hex2="#17B7C1"
          />
          <DebitCard
            bank="Banregio"
            number="0000 1554 6541 2543"
            holder="Cameron Williamson"
            hex1="#FF6B00"
            hex2="#EA6200"
          />
          <DebitCard
            bank="Santander"
            number="0000 1554 6541 2543"
            holder="Cameron Williamson"
            hex1="#E50000"
            hex2="#CD0000"
          />
        </section>
      </div>
    </DefaulLayout>
  );
}
