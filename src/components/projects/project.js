import React from "react";
import { Link } from "react-router-dom";

import "./projects.styles.scss";

const Project = ({ img, title, symbols, link }) => (
  <Link to={link} className="projectslink">
    <div className="project">
      <img src={img} alt="Project screenshot" />

      <h4>{title}</h4>

      <div className="symbols">
        {symbols.map((symbol) => (
          <img src={symbol} alt="Symbol" key={Math.random()} />
        ))}
      </div>
    </div>
  </Link>
);

export default Project;
