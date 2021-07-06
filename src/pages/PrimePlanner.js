import React, { useEffect } from "react";

import PortfolioProject from "../components/portfoliopage/portfolioPage";

import firebase from "../images/firebase.png";
import react from "../images/react.png";
import image from '../images/1200backpacking.png';
import prime from '../images/1200prime.png'


const PrimePlanner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <PortfolioProject
      headerImg={prime}
      title="Prime Planner"
      description="The ultimate project planning app along with a weather, chore, budget, and workout tracker"
      techs={[react, firebase, ]}
      github="https://github.com/jacquelinetropp/primeplanner"
      demo="https://primeplanner.herokuapp.com/"
      highlight1_title="About The App"
      highlight1_text="This app was built to be the one and only planner someone will ever need. The app features a project and workout planner, along with a chore and budget tracking feature to allow users to put all their information in one place."
      highlight2_title="An Evolving App"
      highlight2_text="This app was built with the future in mind. This is an evolving project to include things in the future like syncing with Google Calendar, adding analytics to things like the chores, workout, and budget pages, and much more to allow clients to customize their own planners. This app also will be built into a mobile app."
    />
  );
};

export default PrimePlanner;
