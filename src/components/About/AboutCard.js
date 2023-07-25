import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Ciao a tutti, sono <span className="purple">Giuseppe Canzoneri</span> da{" "}
            <span className="purple">Prizzi, Palermo</span>.
            <br /> Sono stato studente del corso di programmazione Frontend e Backend con Epicode.
            <br />
            Attualmente, sto dedicando il mio tempo allo sviluppo personale e alla ricerca di nuove opportunità per
            crescere come sviluppatore.
            <br />
            <br />
            Oltre al coding, ci sono altre attività che amo fare!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Giocare ai videogiochi
            </li>
            <li className="about-activity">
              <ImPointRight /> Viaggiare
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
