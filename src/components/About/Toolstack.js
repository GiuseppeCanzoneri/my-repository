import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman } from "react-icons/si";
import { DiEclipse, DiIntellij, DiGithubBadge } from "react-icons/di"; // Aggiunti le icone di Eclipse, IntelliJ e GitHub Desktop

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiEclipse /> {/* Icona di Eclipse */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIntellij /> {/* Icona di IntelliJ */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge /> {/* Icona di GitHub Desktop */}
      </Col>
    </Row>
  );
}

export default Toolstack;
