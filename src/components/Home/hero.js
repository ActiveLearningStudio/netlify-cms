import React from 'react';
import bg from '../../assets/images/HomePageSVG.svg';
const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1 className="headng-one open-blue">
          Shaping the
          <br /> <span className="open-yellow">future</span> of learning
        </h1>
        <h4 className="open-para-25 open-blue open-thin">
          Free and open technology to create interactive learning experiences
        </h4>
        <p className="open-para-18 open-gray">
          Curriki is dedicated to making interactive learning experiences
          accessible for everyone, by providing free and open tools to design,
          customize and publish content.
        </p>
      </div>
      <img src={bg} alt="img" />
    </div>
  );
};

export default Hero;
