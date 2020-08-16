import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import "./services.styles.scss";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
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
            <h4>My Mission</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              iaculis ligula sed vulputate lacinia. Ut turpis enim, porttitor at
              enim eu, efficitur imperdiet magna. Vestibulum magna est,
              efficitur eu massa.
            </p>
          </div>
          <div className="item" data-aos="fade-left" data-aos-delay="500">
            <div className="icon">
              <div className="circle">
                <ion-icon name="desktop-outline"></ion-icon>
              </div>
            </div>
            <h4>What I Do</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              iaculis ligula sed vulputate lacinia. Ut turpis enim, porttitor at
              enim eu, efficitur imperdiet magna. Vestibulum magna est,
              efficitur eu massa.
            </p>
          </div>
          <div className="item" data-aos="fade-left" data-aos-delay="1000">
            <div className="icon">
              <div className="circle">
                <ion-icon name="ribbon-outline"></ion-icon>
              </div>
            </div>
            <h4>What You Get</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              iaculis ligula sed vulputate lacinia. Ut turpis enim, porttitor at
              enim eu, efficitur imperdiet magna. Vestibulum magna est,
              efficitur eu massa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
