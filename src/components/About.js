import React from "react";
import {image} from "../data/data";

function About() {
  return <div id="about"><h2>About Me</h2>
  <p>A refugee from Aleppo who always looks forward to keep his eyes on his destination.
  </p>
  <img src={image} alt="I made this" />
  
  </div>;
}

export default About;
