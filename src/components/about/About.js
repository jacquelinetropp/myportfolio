import React from "react";
import Picture from "../../images/professional.jpg";

import "./about.styles.scss";

const About = () => {
  return (
    <section className="about">
      <div className="about__text">
        <h2>I am a Frontend Developer</h2>
        <p>
          Hello! I'm Jacqueline, a frontend developer with a passion for
          creating clean, visually appealing, and functional web applications. I
          enjoy bringing people's visions to life through javascript and the
          MERN (MongoDB, Express, React, and Node) stack.
        </p>
        <p>
          Prior to my career change, I obtained a Bachelor's of Science in
          Exercise Science with honors. I worked as a personal trainer and group
          trainer for four years. My goal has always been to provide high
          quality customer service and customize my product to customer's needs.
        </p>
        <p>
          In search of a better future, I discovered coding. While working full
          time, I built a treasure chest of resources to create projects. Being
          self-taught has lead to excellent problem solving skills.
        </p>
      </div>
      <div className="about__second">
        <div className="about__imgbox">
          <img
            className="about__image"
            src={Picture}
            alt="Professional photo of Jacqueline"
          />
        </div>
        <div className="about__socials"></div>
      </div>
    </section>
  );
};

export default About;
