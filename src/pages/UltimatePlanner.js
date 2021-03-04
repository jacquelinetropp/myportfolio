import React, { useEffect } from "react";

import PortfolioProject from "../components/portfoliopage/portfolioPage";

import headerImg from "../images/1200planner.png";
import firebase from "../images/firebase.png";
import node from "../images/node.png";
import react from "../images/react.png";
import materialui from "../images/materialui.png";

import express from "../images/express.svg";

const UltimatePlanner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <PortfolioProject
      headerImg={headerImg}
      title="Ultimate Planner"
      description="A project managing task app to keep projects organized"
      techs={[react, firebase]}
      github="https://github.com/jacquelinetropp/ultimateplanner2"
      demo="https://ultimateplanner.herokuapp.com/"
      highlight1_title="About This App"
      highlight1_text="This galaxy-themed project task manager was designed for organizing projects. Create a project, then create tasks for each project. Once a project is completed, you can delete the whole project which deletes all the tasks related to that program!"
      highlight2_title="React Redux Firebase "
      highlight2_text="This app utilizes the React Redux Firebase library to assist with redux. This provides with a unique approach to accessing firebase with APIs from this library. This benefits users by allowing users to stay logged in longer than traditional firebase authentication which improves the user's experience with the idea being the app would be open all day in the background to add and remove tasks."
    />
  );
};

export default UltimatePlanner;
