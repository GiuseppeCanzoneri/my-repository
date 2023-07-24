import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiGit, DiJava } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa"; // Aggiunte icone HTML, CSS e Bootstrap

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 /> {/* Icona di HTML */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt /> {/* Icona di CSS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap /> {/* Icona di Bootstrap */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
