import React, { Fragment } from "react";
import Intro from "../components/intro/Intro";
import Skills from "../components/skills/skills";
import Education from "../components/education/education";
import Services from "../components/services/services";

const Home = () => (
  <Fragment>
    <Intro />
    <Education />
    <Skills id="skills" />
    <Services />
  </Fragment>
);

export default Home;
