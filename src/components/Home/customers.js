import React from "react";
import Slider from "react-slick";
import commas from "../../../src/assets/images/“.svg";
import user from "../../../src/assets/images/User.svg";
const Customers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="customer-section">
      <div className="customer-content">
        <h2 className="customer-title">What our customers say</h2>
        <div className="customer-slider">
          <img className="qoute1" src={commas}></img>
          <Slider {...settings}>
            <div className="slider-content">
              <p className="slider-text">
                CurrikiStudio cuts the cost of development by 50%
                <br></br>while accelerating time to market.
              </p>
              <div className="author">
                <img className="author-img" src={user} alt="hh" />
                <p className="author-name">
                  Preeti Shrikhande<br></br>
                  CEO of Vivensity
                </p>
              </div>
            </div>
            <div className="slider-content">
              <p className="slider-text">
                CurrikiStudio has given LA Opera an opportunity to translate not
                only our educational materials into an interactive language, but
                its user-friendly platform has also inspired the organization to
                think creatively about how we design other virtual programs.
                Never before has LA Opera had interactive lessons available,
                online or on its website.
              </p>
              <div className="author">
                <img className="author-img" src={user} alt="hh" />
                <p className="author-name">
                  Stacy Brightman VP of LA Opera Connects
                </p>
              </div>
            </div>
          </Slider>
          <img className="qoute2" src={commas}></img>
        </div>
      </div>
    </div>
  );
};

export default Customers;
