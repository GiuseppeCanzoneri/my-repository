import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import travelPlanner from "../../Assets/Projects/planner.png";
import skyCast from "../..//Assets/Projects/skycast.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelPlanner}
              isBlog={false}
              title="Travel Planner 🛩️"
              description="Travel Planner è un'applicazione completa per la pianificazione e la gestione dei viaggi. Sfrutta le potenzialità di React per il frontend, Spring Boot per il backend e Redux per la gestione dello stato. Con Travel Planner, gli utenti possono facilmente organizzare i loro viaggi, ottenere itinerari personalizzati e gestire le proprie informazioni utente, il tutto in un'unica piattaforma intuitiva. 🗺️📅"
              ghLink="https://github.com/GiuseppeCanzoneri/CAPSTONE-FRONTEND-Travel-Planner/tree/master"
            />
            <ProjectCard
              imgPath={skyCast}
              isBlog={false}
              title="Sky Cast Live 🌤️"
              description=" Scoprite il potere di conoscere in anticipo le condizioni meteorologiche con Sky Cast Live! ☔ Grazie all'utilizzo di React e Redux, ho dato vita a un'app intuitiva e coinvolgente per tenervi informati su sole, pioggia o neve. Prendete il controllo della vostra giornata con previsioni in tempo reale e avvisi personalizzati. Non lasciate che il tempo vi sorprenda, lasciate che Sky Cast Live vi dia una mano! 🌦️📊"
              ghLink="https://github.com/GiuseppeCanzoneri/meteo-react"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
