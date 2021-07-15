import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./projects.styles.scss";

const Project = ({ img, title, symbols, description, github, demo }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className="projectslink">
      <div className="project">
        <img src={img} alt="Project screenshot" />

        <h4>{title}</h4>
        <div className="description">{description}</div>

        <div className="symbols">
          {symbols.map((symbol) => (
            <img src={symbol} alt="Symbol" key={Math.random()} />
          ))}
        </div>
        {isShown && (
          <div className="project__links">
          <a href={github} className="project__links__link">
            Github
          </a>
          <a href={demo} className="project__links__link">
            Demo
          </a>
        </div>
        )}
        
      </div>
    </div>
  );
};

export default Project;
