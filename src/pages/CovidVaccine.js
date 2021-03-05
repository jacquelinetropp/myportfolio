import React, { useEffect, Fragment } from "react";

import PortfolioProject from "../components/portfoliopage/portfolioPage";

import headerImg from "../images/1200dfa.png";
import jquery from '../images/jquery.png';
import wordpress from '../images/wordpress.png';
import sass from '../images/sass.png';

const CovidVaccine = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Fragment>
    <PortfolioProject
      headerImg={headerImg}
      title="DFA Covid Vaccine Toolkit"
      description="A toolkit for the latest Covid-19 vaccine information built for Doctors For America"
      techs={[jquery, wordpress, sass]}
      github="https://github.com/jacquelinetropp/vaccinetoolkit"
      demo="https://www.drsforamerica.org/covid-vaccine-toolkit/"
      highlight1_title="About The Website"
      highlight1_text="This website was Doctors For America, a non-profit organization. The organization was in the middle of a rebrand and updating
      their main website. They needed a website built as soon as possible to display the covid vaccine information. I built the website originally 
      as a standalone website until they could add it to their main site."
      highlight2_title="Creating Client-Friendly Website Management"
      highlight2_text="The nature of the information on the website is quickly changing and expanding as we understand covid vaccines more. With this in
      mind, I used client-friendly pluggins to allow the client to quickly go in and edit information on the website without the help of a web developer.
      I sent step-by-step tutorials to ensure the client had everything they needed to easily manage the site on their own."
    />
    <p className="ogdesign">To see the original design, click <a href="https://jacquelinetropp.github.io/dfahtml/">Here</a></p>
    </Fragment>
  );
};

export default CovidVaccine;
