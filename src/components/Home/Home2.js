import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              What started as a simple <span className="purple"><b>" Hello World "</b></span> turned into a journey of learning, fixing endless bugs, and hunting missing semicolons.
              <br />
              <br />I have hands-on experience with &nbsp;
              <i>
                <b className="purple">Java, JavaScript, and C++.</b>
              </i>
              <br />
              <br />
              Strong in &nbsp; 
              <i>
                <b className="purple">Data Structures & Algorithms, </b> 
              </i>
              with a problem-solving approach to writing efficient code.
              <br />
              <br />
              My expertise lies in    
              with <b className="purple">Full Stack Development,</b> specializing in
              <i>
                <b className="purple">
                  {" "}
                  SpringBoot and React.js
                </b>
              </i>
              &nbsp;for scalable applications.
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
                  href="https://github.com/anmolpurohit777"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anmol-purohit-66a92b252/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_a.purohit_"
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


// My expertise lies in Full Stack Development, specializing in SpringBoot and MERN Stack for scalable applications.
// I also explore Blockchain and other emerging technologies to expand my knowledge.