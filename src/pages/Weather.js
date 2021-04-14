import React, { useEffect } from "react";

import PortfolioProject from "../components/portfoliopage/portfolioPage";

import headerImg from "../images/1200weather.png";
import firebase from "../images/firebase.png";
import node from "../images/node.png";
import react from "../images/react.png";
import materialui from "../images/materialui.png";

import express from "../images/express.svg";

const WeatherTracker = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <PortfolioProject
      headerImg={headerImg}
      title="Weather Dashboard"
      description="See the current weather, 7 day, and 48hr forecast for your area"
      techs={[react]}
      github="https://github.com/jacquelinetropp/weathertracker"
      demo="https://weather-tracking-tropp.herokuapp.com/"
      highlight1_title="About This App"
      highlight1_text="This app was designed to be a weather dashboard to easily see the weather at the current moment, the next 7 days, and for the next 48 hours. Two APIs are used to create this App. The weather API only allows latitude and longitude coordinates to be given. Therefore the user enters an address to one API which converts it to latitude and longitude for the weather API to use."
      
    />
  );
};

export default WeatherTracker;
