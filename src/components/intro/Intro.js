import React from "react";

import "./intro.styles.scss";

const Intro = () => (
  <div className="greeting">
    <h1 className="greeting__title">Hello, I'm Jacqueline Tropp</h1>
    <div className="intro">
      <div className="intro__title">
        <p>Front-End Developer</p>
      </div>
      <div className="intro__info">
        <h6>A title that explains the types of websites I build</h6>
        <p>A paragraph that goes into what I do and why I do it</p>
      </div>
    </div>
  </div>
);

export default Intro;
