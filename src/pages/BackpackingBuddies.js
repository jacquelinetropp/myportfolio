import React, { useEffect } from "react";

import PortfolioProject from "../components/portfoliopage/portfolioPage";

import headerImg from "../images/heart.png";
import firebase from "../images/firebase.png";
import node from "../images/node.png";
import react from "../images/react.png";
import materialui from "../images/materialui.png";

import express from "../images/express.svg";

const BackpackingBuddies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <PortfolioProject
      headerImg={headerImg}
      title="Backpacking Buddies"
      description="A social media app with the idea of connecting travalers"
      techs={[react, materialui, firebase, node, express]}
      github="/"
      demo="/"
      highlight1_title="Styling and Redux"
      highlight1_text="The styling of the website is designed to have a boho minimalistic style to match the target audience. Yellow and cream colors were used to evoke happiness and remind people of nature. Blue was used for evoke calmness. Social media can cause stress so the blue is to help alleviate that. Redux and Thunk were used to create a "
      highlight2_title="Firebase Functions"
      highlight2_text="The back-end of this application was used building firebase functions. The firebase functions allowed me to have more control over the functionality and is formatted so more functions can be added with ease. I was able to use the express library to build on my skillset with more programs besides MongoDb. "
    />
  );
};

export default BackpackingBuddies;
