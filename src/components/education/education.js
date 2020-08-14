import React, { Fragment } from "react";

import img from "../../images/student.png";

import "./education.styles.scss";

const Education = () => (
  <div className="education" id="education">
    <h2>Education</h2>
    <img src={img} alt="Graduate" className="img" />
    <div className="section">
      <p className="title">Graduated: </p>
      <div className="flex">
        <p>2017 Bachelors Degree in Exercise Science w Honors</p>
      </div>
      <p className="title">Experience:</p>
      <ul>
        <li>2 years Javascript</li>
        <li>2 years Wordpress</li>
        <li>1 year ReactJs</li>
      </ul>
    </div>
  </div>
);

export default Education;
