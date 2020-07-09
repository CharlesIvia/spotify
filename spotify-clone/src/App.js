import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Premium from "./components/Premium";
import Cancel from "./components/Cancel";
import Plans from "./components/Plans";

function App() {
  return (
    <div className="App">
      <Hero />
      <Premium />
      <Cancel />
      <Plans />
    </div>
  );
}

export default App;
