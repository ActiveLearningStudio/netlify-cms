import React from "react";
import bg from "../../assets/images/HomePageSVG.svg";
const Hero = ({ data }) => {
  // console.log(data);
  return (
    <div className="hero">
      <div className="content">
        <h1 className="headng-one open-blue">
          {data.frontmatter.heading_one}
          {/* <br /> <span className="open-yellow-1">future</span> of learning */}
        </h1>
        <h4 className="open-para-25 open-blue open-thin">
          {data.frontmatter.heading_two}{" "}
        </h4>
        <p className="open-para-18 open-gray">
          {data.frontmatter.heading_Three}
        </p>
      </div>
      <img
        className="hero-bg-img"
        src={data.frontmatter.hero_image}
        alt="img"
      />
    </div>
  );
};
export default Hero;
