import React, { useEffect } from "react";

import PortfolioProject from "../components/portfoliopage/portfolioPage";

import headerImg from "../images/heart.png";
import jquery from '../images/jquery.png';
import wordpress from '../images/wordpress.png';
import sass from '../images/sass.png';

const PersonalBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <PortfolioProject
    headerImg={headerImg}
    title="Personal Blog"
    description="A blog site dedicated to travel, fitness, and lifestyle for when it is safe to travel"
    techs={[jquery, wordpress, sass]}
    github="https://github.com/jacquelinetropp/dreamtheme3"
    demo="https://www.jacquelinetropp.com"
    highlight1_title="About The Website"
    highlight1_text="When it is safe to travel, this blog will be utilized to build a brand around a healthy lifestyle during travels. The
    design of the website was to have a boho type feel. The focus on this project was design elements and making space for future content. As 
    content is added to the site, it is in a layout that allows the user to easy expand and add more layouts."
    
  />
  );
};

export default PersonalBlog;
