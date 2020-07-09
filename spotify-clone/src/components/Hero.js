import React from "react";
import Buttons from "./Buttons";
import Header from "./Header";

function Hero() {
  return (
    <div className="hero">
      <Header />
      <div className="container home-hero">
        <div className="title">
          <h1>Music for everyone.</h1>
        </div>

        <div>
          <h3>Millions of songs. No credit card needed.</h3>
        </div>

        <Buttons />
      </div>
    </div>
  );
}

export default Hero;
