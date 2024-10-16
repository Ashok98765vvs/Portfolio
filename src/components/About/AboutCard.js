import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashok Shankrappa </span>
            from <span className="purple"> Karnataka, India.</span>
            <br />
            I am currently pursing My Master's At Auburn Univesrsity at Montogomery  USA .
            <br />
            I have completed Bachelor's in Computer Science Engineeeing at K S School of Enginnering And Management.
           
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Analysis of Algorithms & Trading in  Stock Market
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs & Posting of my daily Trades in X
            </li>
            <li className="about-activity">
              <ImPointRight /> I love Travelling 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do something today your future will thankyou  yourself !"{" "}
          </p>
          <footer className="blockquote-footer">Ashok</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
