import React, { useEffect } from "react";

import PortfolioProject from "../components/portfoliopage/portfolioPage";

import headerImg from "../images/1200training.png";
import firebase from "../images/firebase.png";

import react from "../images/react.png";
import reactbootstrap from '../images/bootstrapreact.svg';


const OnlineTraining = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <PortfolioProject
      headerImg={headerImg}
      title="FuncMove"
      description="An e-commerce site built for buying personal training session packs"
      techs={[react, firebase, reactbootstrap]}
      github="https://github.com/jacquelinetropp/online-training"
      demo="https://funcmove.herokuapp.com/"
      highlight1_title="About This App"
      highlight1_text="This react e-commerce site is built with using firebase for the backend and stripe as the payment method. Users can pick from different packages and toggle through adding or removing cart items on the checkout page."
      highlight2_title="React Redux Firebase "
      highlight2_text="This app utilizes the React Redux Firebase library to assist with redux. This provides with a unique approach to accessing firebase with APIs from this library. This benefits users by allowing users to stay logged in longer than traditional firebase authentication which improves the user's experience with the idea being the app would be open all day in the background to add and remove tasks."
    />
  );
};

export default OnlineTraining;
