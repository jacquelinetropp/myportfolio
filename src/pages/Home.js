import React, { Fragment } from "react";
import Intro from "../components/intro/Intro";
import Skills from "../components/skills/skills";
import Education from "../components/education/education";
import Services from "../components/services/services";
import Projects from "../components/projects/projects";

const Home = () => (
  <Fragment>
    <Intro />
    <Projects />
    <Services />
    <Education />
    <Skills id="skills" />
  

  </Fragment>
);

export default Home;
