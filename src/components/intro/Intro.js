import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./intro.styles.scss";

const Intro = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="greeting">
      <div className="greeting__img">
        <div className="greeting__txt">
          <h1 className="greeting__title">Hello, I'm Jacqueline Tropp</h1>
          <div className="intro">
            <div className="intro__title">
              <h6>Front-End Developer</h6>
            </div>
            <div className="intro__info">
              <h6>
                Using innovation and the latest technology to build creative
                modern websites
              </h6>
              <p>
                Utilizing the latest trends and technologies, I craft customized
                websites for companies and individuals. I am currently seeking a
                front-end team to be a part of.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
