import React from "react";

import SkillsCard from "./skillsCard";
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

import "./skills.styles.scss";

const Skills = () => (
  <div className="skills">
    <h2>Technical Skills</h2>
    <SkillsCard image={js} text="Javascript" />
    <SkillsCard image={css} text="CSS3" />
    <SkillsCard image={html} text="HTML5" />
    <SkillsCard image={firebase} text="Firebase" />
    <SkillsCard image={heroku} text="Heroku" />
    <SkillsCard image={git} text="Git" />
    <SkillsCard image={node} text="NodeJS" />
    <SkillsCard image={jquery} text="JQuery" />
    <SkillsCard image={react} text="React" />
    <SkillsCard image={mongodb} text="MongoDB" />
    <SkillsCard image={wordpress} text="Wordpress" />
    <SkillsCard image={graphql} text="GraphQL" />
    <SkillsCard image={sass} text="Sass" />
  </div>
);

export default Skills;
