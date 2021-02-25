import React, { useEffect } from "react";
import Project from "./project";

import js from "../../images/icons8-javascript.svg";
import css from "../../images/css.png";
import html from "../../images/html.png";
import firebase from "../../images/firebase.png";
import heroku from "../../images/heroku.png";
import git from "../../images/git.png";
import node from "../../images/node.png";
import jquery from "../../images/jquery.png";
import react from "../../images/react.png";
import mongodb from "../../images/mongodb.png";
import wordpress from "../../images/wordpress.png";
import graphql from "../../images/graphql.png";
import sass from "../../images/sass.png";
import materialui from "../../images/materialui.png";
import photoshop from "../../images/photoshop.png";
import lightroom from "../../images/lightroom.png";
import premiere from "../../images/premiere.png";
import express from "../../images/express.svg";
import reactboot from '../../images/bootstrapreact.svg';
import bootstrap from '../../images/bootstrap.png';

import services from "../../images/services.jpg";
import dfa from "../../images/1200dfa.png";
import blog from "../../images/1200blog.png";
import planner from '../../images/1200planner.png';
import backpacking from '../../images/1200backpacking.png';

import Aos from "aos";
import "aos/dist/aos.css";

import "./projects.styles.scss";
const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <div data-aos="fade">
        <Project
          title="Backpacking Buddies"
          img={backpacking}
          symbols={[react, materialui, firebase, node, express]}
          link={"/backpacking-buddies"}
        />
      </div>
      <div data-aos="fade">
        <Project
          title="DFA Vaccine Toolkit"
          img={dfa}
          symbols={[wordpress, sass, jquery]}
          link={"/backpacking-buddies"}
        />
      </div>
      <div data-aos="fade">
        <Project
          title="Planner App"
          img={planner}
          symbols={[react, firebase]}
          link={"/backpacking-buddies"}
        />
      </div>
      <div data-aos="fade">
      <Project
        title="Online Training"
        img={planner}
        symbols={[react, firebase, reactboot]}
        link={"/backpacking-buddies"}
      />
    </div>
      <div data-aos="fade">
        <Project
          title="Personal Blog"
          img={blog}
          symbols={[wordpress, jquery, sass]}
          link={"/backpacking-buddies"}
        />
      </div>
    </div>
  );
};

export default Projects;
