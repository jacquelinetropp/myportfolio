import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import img from "../../images/student.png";

import "./education.styles.scss";

const Education = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className="education" id="education">
      <h2>Education</h2>
      <img data-aos="fade-right" src={img} alt="Graduate" className="img" />
      <div className="section" data-aos="fade-left">
        <p className="title">Graduated: </p>
        <div className="flex">
          <p>2017 Bachelors Degree in Exercise Science w Honors</p>
        </div>
        <p className="title">Experience:</p>
        <ul>
          <li>3 years Javascript</li>
          <li>3 years Wordpress</li>
          <li>2 year ReactJs</li>
        </ul>
        <p className="title">Background:</p>
        <p>I have spent the last 3 years teaching myself how to code which includes networking and creating my own projects as a way to jumpstart my career</p>
      </div>
    </div>
  );
};

export default Education;
