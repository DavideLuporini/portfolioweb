import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Davide Luporini </span>
            from <span className="purple"> Pistoia ,Italia.</span>
            <br />I'm a junior web developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Whatching Sports (expecially soccer)
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Choose a job you love and you'll never work for a day in your life"{" "}
          </p>
          <footer className="blockquote-footer">Confucius</footer>
        </blockquote>
        <br />
        <p style={{textAlign:"left"}}>IS a pretty common quote ,I know, but i leave my old carrer as a Economy student to becoume a developer , what i loved to do and i really identify with that!</p>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;
