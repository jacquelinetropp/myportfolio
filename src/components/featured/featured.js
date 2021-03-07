import React from "react";
import Project from "../projects/project";

import "./features.scss";

import dfa from "../../images/1200dfa.png";
import wordpress from "../../images/wordpress.png";
import sass from "../../images/sass.png";
import jquery from "../../images/jquery.png";
import { Link } from "react-router-dom";

const Featured = ({ testimonial, title, img, link, symbols, author }) => {
  return (
    <div className="featured">
      <div className="testimonial">
        <h3>Testimonial</h3>
        <p>
          {testimonial}
        </p><p className="featured__author">
          {author}
        </p>
      </div>
      <Link to={link} className="featured__project">
        <img src={img} alt="Website screenshot" />
        <h4>{title}</h4>
        <div className="symbols">
          {symbols.map((symbol) => (
            <img src={symbol} alt="Symbol" key={Math.random()} />
          ))}
        </div>
      </Link>
    </div>
  );
};

export default Featured;
