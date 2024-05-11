import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        What is a good description of pizza?
Pizza | Description, Ingredients, & Types | Britannica
pizza, dish of Italian origin consisting of a flattened 
disk of bread dough topped with some combination of olive oil,
 oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, 
 baked quickly—usually, in a commercial setting, using a wood-fired oven heated
  to a very high temperature—and served hot ...
        </p>
      </div>
    </div>
  );
}

export default About;