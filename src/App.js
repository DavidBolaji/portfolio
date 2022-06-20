import React, { useEffect } from "react";
import Hero from "./components/hero/Hero";
import Project from "./components/projects/Project";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
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
