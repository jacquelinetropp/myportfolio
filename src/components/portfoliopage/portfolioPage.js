import React from "react";

import "./portfolioPage.styles.scss";

const PortfolioPage = ({
  headerImg,
  title,
  description,
  github,
  demo,
  highlight1_title,
  highlight1_text,
  highlight2_title,
  highlight2_text,
  techs,
}) => {
  return (
    <div className="portfolioPage">
      <div className="portfolioPage__intro">
        <h1 className="portfolioPage__title">{title}</h1>
        <div className="portfolioPage__intro__title">
          <p>{description}</p>
          <a href={github} className="a__button">
            GitHub
          </a>
          <a href={demo} className="a__button">
            Demo
          </a>
          <div className="techs">
            {techs.map((tech) => (
              <img src={tech} alt="Symbol" key={Math.random()} />
            ))}
          </div>
        </div>
      </div>
      
      <div className="portfolioPage__info">
        <div className="highlight">
          <div className="highlight__text">
            <h2>{highlight1_title}</h2>
            <p>{highlight1_text}</p>
          </div>
          <div className="highlight__text">
            <h2>{highlight2_title}</h2>
            <p>{highlight2_text}</p>
          </div>
        </div>
      </div>
      <div className="portfolioPage__overview">
        <div className="portfolioPage__mainImg">
          <img
            src={headerImg}
            alt="Project overview shots"
            className="mainImg"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
