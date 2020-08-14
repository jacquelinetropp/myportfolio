import React from "react";
import Project from "./project";

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

import services from "../../images/services.jpg";

import "./projects.styles.scss";
const Projects = () => (
  <div className="projects" id="projects">
    <h2>Projects</h2>
    <Project
      title="Backpacking Buddies"
      img={services}
      symbols={[react, materialui, firebase, node]}
      link={"https://google.com"}
    />
    <Project
      title="Personal Blog"
      img={services}
      symbols={[wordpress, sass, jquery]}
    />
    <Project
      title="React E-Commerce"
      img={services}
      symbols={[react, firebase]}
    />
    <Project
      title="Wordpress E-Commerce"
      img={services}
      symbols={[wordpress, jquery, sass]}
    />
  </div>
);

export default Projects;
