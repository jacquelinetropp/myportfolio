import React, { Fragment } from "react";
import Intro from "../components/intro/Intro";
import Skills from "../components/skills/skills";
import Education from "../components/education/education";
import Services from "../components/services/services";
import Projects from "../components/projects/projects";
import About from '../components/about/About';

const Home = () => (
  <Fragment>
    <Intro />
    <About />
    <Projects />

  </Fragment>
);

export default Home;
