import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              INTRODUZIONE <span className="purple"> PROFILO </span> PERSONALE
            </h1>
            <p className="home-about-body">
              Ciao a tutti! Sono un appassionato di programmazione e mi considero un Junior Developer in costante
              crescita 🚀.
              <br />
              <br />
              Ho sviluppato competenze nei linguaggi classici come{" "}
              <i>
                <b className="purple">Java, Javascript .</b>
              </i>
              <br />
              <br />
              Il mio campo di interesse riguarda lo sviluppo di{" "}
              <i>
                <b className="purple">nuove tecnologie web e prodotti</b>
              </i>
              , oltre a esplorare le potenzialità della{" "}
              <i>
                <b className="purple">Blockchain.</b>
              </i>
              <br />
              <br />
              Quando possibile, applico la mia passione nello sviluppo di prodotti con <b className="purple">
                Node.js
              </b>{" "}
              e le moderne librerie e framework di Javascript, come{" "}
              <i>
                <b className="purple">React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/GiuseppeCanzoneri"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/giuseppe-canzoneri-94828b270/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/giuseppe_canzoneri/?hl=it"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
