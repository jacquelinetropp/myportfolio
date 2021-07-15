import React, { useState } from "react";

import "./features.scss";
import { Link } from "react-router-dom";

const Featured = ({
  testimonial,
  title,
  img,
  github,
  demo,
  symbols,
  author,
}) => {
  const [isShown, setIsShown] = useState(true);
  return (
    <div
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      className="featured"
    >
      <div className="testimonial">
        <h3>Testimonial</h3>
        <p>{testimonial}</p>
        <p className="featured__author">{author}</p>
      </div>
      <div className="featured__project">
        <img src={img} alt="Website screenshot" />
        <h4>{title}</h4>
        <div className="symbols">
          {symbols.map((symbol) => (
            <img src={symbol} alt="Symbol" key={Math.random()} />
          ))}
        </div>
      </div>
      {isShown && (
        <div className="featured__links">
        <a href={github} className="featured__links__link">
          Github
        </a>
        <a href={demo} className="featured__links__link">
          Demo
        </a>
      </div>
      )}
    </div>
  );
};

export default Featured;
