import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Premium from "./components/Premium";
import Cancel from "./components/Cancel";

function App() {
  return (
    <div className="App">
      <Hero />
      <Premium />
      <Cancel />
    </div>
  );
}

export default App;
