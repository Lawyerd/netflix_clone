import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>“Well begun is half done”</span>
      <span>− aristotle, philosopher</span>
    </div>
  );
}

export default About;
