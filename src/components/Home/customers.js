import React from 'react'
import Slider from "react-slick";
import { PersonCircle} from 'react-bootstrap-icons';
import commas from '../../../src/img/“.svg';
const Customers = () => {
    
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        };
    return (
        <div className="customer-section">
            <div className="customer-content">
                <h2>
                What our customers say
                </h2>
                <div className="customer-slider">
                <img  className="qoute1" src={commas}></img>
                <Slider {...settings}>
                 <div className="slider-content">
                     
                    <p>
                    CurrikiStudio cuts the cost of development by 50% 
                    <br></br>while accelerating time to market.  
                    </p>
                    <div className="author">
                        <span><PersonCircle color="#FFFFFF" size="27px"/></span>
                        <span>
                        Preeti Shrikhande<br></br>
                       CEO of Vivensity
                        </span>
                    </div>
                   
                 </div>
                 <div className="slider-content">
                     
                    <p>
                    CurrikiStudio cuts the cost of development by 50% 
                    <br></br>while accelerating time to market.  
                    </p>
                    <div className="author">
                        <span><PersonCircle color="#FFFFFF" size="27px"/></span>
                        <span>
                        Preeti Shrikhande<br></br>
                       CEO of Vivensity
                        </span>
                    </div>
                   
                 </div>
  
      
                  </Slider>
                  <img className="qoute2" src={commas}></img>
                </div>
            </div>

            
        </div>
    );
    
}

export default Customers
