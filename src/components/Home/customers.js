import React from "react";
import Slider from "react-slick";
import commas from "../../../src/assets/images/“.svg";
import user from "../../../src/assets/images/User.svg";
const Customers = ({data}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  // console.log(data);
  return (
    <div className="customer-section">
      <div className="customer-content">
        <h2 className="customer-title">{data.frontmatter.customersSay_heading}</h2>
        <div className="customer-slider">
          <img className="qoute1" src={commas}></img>
          <Slider {...settings}>
            {
              data.frontmatter.customersSay_slider.slider.map((customer)=>{
                return(
                  <div className="slider-content">
                  <p className="slider-text">
                    {
                      customer.slider_descrip
                    }
                  </p>
                  <div className="author">
                    <img className="author-img" src={customer.user_image} alt="hh" />
                    <p className="author-name">
                      {customer.user_name}
                    </p>
                  </div>
                </div>
                )
              })
            }
           
           
          </Slider>
          <img className="qoute2" src={commas}></img>
        </div>
      </div>
    </div>
  );
};

export default Customers;
