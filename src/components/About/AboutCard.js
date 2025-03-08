import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anmol Purohit</span>
            &nbsp;from <span className="purple"> Jamnagar, India.</span>
            <br />
            Pursuing B.Tech in IT at Dharmsinh Desai University, with a specialization in Full Stack Development.
            <br />
            Proficient in DSA with a strong problem-solving mindset.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sketching & Doodling ✏️
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music & Podcasts 🎧
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A blank canvas or an empty code editor—both hold endless possibilities."{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
