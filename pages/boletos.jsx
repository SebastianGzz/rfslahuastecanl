import { useState } from "react";
import DefaulLayout from "@/components/layouts/DefaulLayout";
import styles from "@/styles/Boletos.module.scss";

export default function Boletos() {
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [ticketsSold, setTicketsSold] = useState([
    {
      id: 1,
      ticket: 1,
      tel: "8129705354",
      name: "Luis Sebastian",
      surname: "Gonzalez Cordero",
      state: "pending",
      date: new Date().toUTCString(),
    },
    {
      id: 2,
      ticket: 10,
      tel: "8115334049",
      name: "Claudia Alejandra",
      surname: "Cordero Martinez",
      state: "active",
      date: new Date().toUTCString(),
    },
    {
      id: 3,
      ticket: 7,
      tel: "8129099232",
      name: "Rafael Alejandro",
      surname: "Gonzalez Cordero",
      state: "pending",
      date: new Date().toUTCString(),
    },
  ]);

  const tickets = Array.from({ length: 1000 }, (_, i) => i + 1);

  const handleSelectTicket = (ticket) => {
    if (selectedTickets.includes(ticket)) {
      setSelectedTickets(selectedTickets.filter((t) => t !== ticket));
    } else {
      setSelectedTickets([...selectedTickets, ticket]);
    }
  };

  console.log(ticketsSold);

  return (
    <DefaulLayout>
      <div className={styles.expansionLimit}>
        <div className={styles.rfaBanner}>
          <h1 className={styles.rfaTitle}>Mercedes Benz</h1>
          <p className={styles.rfaDescription}>
            Mercedes AMG Clase G 5.5l G 63 Amg Biturbo At
          </p>
        </div>

        {selectedTickets.length > 0 && (
          <div className={styles.selectedTickets}>
            <h2 className={styles.selectedTicketsTitle}>
              Boletos seleccionados
            </h2>
            <p className={styles.selectedTicketsDescription}>
              {selectedTickets.join(", ")}
            </p>
          </div>
        )}

        <div className={styles.ticketsContainer}>
          {tickets.map((ticket) => (
            <button
              key={ticket}
              className={`${styles.ticket} ${
                selectedTickets.includes(ticket) && styles.selectedTicket
              }`}
              onClick={() => handleSelectTicket(ticket)}
            >
              {ticket}
            </button>
          ))}
        </div>
      </div>
    </DefaulLayout>
  );
}
