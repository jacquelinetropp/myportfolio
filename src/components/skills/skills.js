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
import materialui from "../../images/materialui.png";
import photoshop from "../../images/photoshop.png";
import lightroom from "../../images/lightroom.png";
import premiere from "../../images/premiere.png";

import "./skills.styles.scss";

const Skills = () => (
  <div className="skills">
    <h4>Technical Skills</h4>

    <SkillsCard image={js} text="Javascript" />
    <SkillsCard image={css} text="CSS3" />
    <SkillsCard image={html} text="HTML5" />
    <SkillsCard image={jquery} text="JQuery" />
    <SkillsCard image={react} text="React" />
    <SkillsCard image={wordpress} text="Wordpress" />
    <SkillsCard image={sass} text="Sass" />
    <SkillsCard image={materialui} text="Material UI" />

    <SkillsCard image={firebase} text="Firebase" />
    <SkillsCard image={node} text="NodeJS" />
    <SkillsCard image={mongodb} text="MongoDB" />
    <SkillsCard image={graphql} text="GraphQL" />

    <SkillsCard image={heroku} text="Heroku" />
    <SkillsCard image={git} text="Git" />

    <SkillsCard image={photoshop} text="Photoshop" />
    <SkillsCard image={lightroom} text="Lightroom" />
    <SkillsCard image={premiere} text="Premiere" />
  </div>
);

export default Skills;
