import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import "./services.styles.scss";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2500, once: true });
  }, []);
  return (
    <div className="services" id="services">
      <div className="background">
        <h2>Services</h2>

        <div className="design">
          <div className="item" data-aos="fade-left">
            <div className="icon">
              <div className="circle">
                <ion-icon name="briefcase-outline"></ion-icon>
              </div>
            </div>
            <h4>Strategic Design</h4>
            <p>
              Websites are customized to display each client's brand which helps
              drive in new customers and maintain old ones.
            </p>
          </div>
          <div className="item" data-aos="fade-left" data-aos-delay="500">
            <div className="icon">
              <div className="circle">
                <ion-icon name="desktop-outline"></ion-icon>
              </div>
            </div>
            <h4>Interactive Experiences</h4>
            <p>
              Clients will get to interact with the website to create a
              memorable experience and bring that back again and again.
            </p>
          </div>
          <div className="item" data-aos="fade-left" data-aos-delay="1000">
            <div className="icon">
              <div className="circle">
                <ion-icon name="ribbon-outline"></ion-icon>
              </div>
            </div>
            <h4>Top Technology</h4>
            <p>
              Current best practice standards will be used to create responsive
              web designs that make it easy to build on your website as your
              business grows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
