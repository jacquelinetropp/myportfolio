import React, { useEffect } from "react";
import Project from "./project";

import firebase from "../../images/firebase.png";
import node from "../../images/node.png";
import jquery from "../../images/jquery.png";
import react from "../../images/react.png";
import wordpress from "../../images/wordpress.png";
import sass from "../../images/sass.png";
import materialui from "../../images/materialui.png";
import express from "../../images/express.svg";
import reactboot from "../../images/bootstrapreact.svg";

import dfa from "../../images/1200dfa.png";
import blog from "../../images/1200blog.png";
import planner from "../../images/1200planner.png";
import backpacking from "../../images/1200backpacking.png";
import training from "../../images/1200training.png";
import weather from "../../images/1200weather.png";
import primeplanner from '../../images/1200prime.png';

import Aos from "aos";
import "aos/dist/aos.css";

import "./projects.styles.scss";
import Featured from "../featured/featured";
const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div data-aos="fade" className="projects__featured">
        <Featured
          testimonial='"Jacqueline was instrumental in getting the Doctors for America Covid Vaccine FAQ Toolkit built and published. She was very easy to work with and worked hard to understand our needs in this project thoroughly. Her implementation of WordPress and use of various necessary plug-ins to help the site come to fruition, was done professionally and in a timely manner. We are absolutely looking forward to working with Jacqueline on future projects."'
          author="- Candy Tai, Doctors For America"
          title="DFA Vaccine Toolkit"
          img={dfa}
          symbols={[wordpress, sass, jquery]}
          github="https://github.com/jacquelinetropp/vaccinetoolkit"
          demo="https://www.drsforamerica.org/covid-vaccine-toolkit/"
        />
      </div>
      <div data-aos="fade">
      <Project
        title="Prime Planner"
        img={primeplanner}
        symbols={[react, firebase]}
        description="An all inclusive project planner with a budget, workout, and chore tracker"
        github={"https://github.com/jacquelinetropp/primeplanner"}
        demo={"https://primeplanner.herokuapp.com/"}
      />
    </div>
      <div data-aos="fade">
        <Project
          title="Backpacking Buddies"
          img={backpacking}
          symbols={[react, materialui, firebase, node, express]}
          description="A social media built with the traveler in mind"
          github="https://github.com/jacquelinetropp/backpackingbuddies-client"
          demo="https://backpacking-buddies.herokuapp.com/"
        />
      </div>

      <div data-aos="fade">
        <Project
          title="Ultimate Planner"
          img={planner}
          symbols={[react, firebase]}
          description="A project managing app to keep projects organized"
          demo="https://ultimateplanner.herokuapp.com/"
          github="https://github.com/jacquelinetropp/ultimateplanner2"
        />
      </div>
      <div data-aos="fade">
        <Project
          title="FuncMove"
          img={training}
          symbols={[react, firebase, reactboot]}
          description="An e-commerce app built for personal training"
          github="https://github.com/jacquelinetropp/online-training"
          demo="https://funcmove.herokuapp.com/"
        />
      </div>
      <div data-aos="fade">
      <Project
        title="Weather Dashboard"
        img={weather}
        symbols={[react]}
        description="An app built to see the current weather, 7 day, and 48hr forecase"
        github="https://github.com/jacquelinetropp/weathertracker"
        demo="https://weather-tracking-tropp.herokuapp.com/"
      />
    </div>
     
    </div>
  );
};

export default Projects;
