import React from "react";
import Buttons from "./Buttons";
import Header from "./Header";

function Hero() {
  return (
    <div>
      <Header />
      <div className="title">
        <h1>Get 3 months of Premium for $9.99</h1>
      </div>

      <div>
        <h2>Enjoy endless ad-free music - even offline.</h2>
      </div>

      <Buttons />

      <div>
        <small>
          *Monthly subscription fee aplies after. Offer ends Jul 30, 2020.
        </small>
      </div>
    </div>
  );
}

export default Hero;
