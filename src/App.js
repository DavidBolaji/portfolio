import React from "react";
import Hero from "./components/hero/Hero";
import Project from "./components/projects/Project";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Services />

      <Project />
    </>
  );
};

export default App;
