import React from "react";
import Card from "./card/Card";
export default function About() {
  return (
    <div className="about-container">
      <div className="left-heading">
        <h1>What are you having for Lunch?</h1>
      </div>
      <div className="right-description" id="idx">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
          tempor incididunt cgf ut labore et dolore aliqua. Ut enim
        </p>
      </div>
      <div className="card-container" id="idx2">
        <Card />
      </div>
    </div>
  );
}
