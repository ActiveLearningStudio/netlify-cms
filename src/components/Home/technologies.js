import React from 'react';
import currikiimg from '../../assets/images/studio_new_logo_small.png'
import Vivenesity from '../../../src/img/Vivensity.svg';
import './style.scss';
const Technology = () => {
  return (
    <>
     <div className="tech-section">
     <div className="tech-heading">
     <h2>CurrikiStudio powers the world’s most<br></br> innovative{' '}
     <span style={{ color: '#f8af2c' }}>learning technology.</span>
     </h2>
     </div>
     <div className="tech-content">
       <span>
         <img src={currikiimg}></img>
       </span>
       <span>
         <img src={Vivenesity}></img>
       </span>
       <span>
         <img src={currikiimg}></img>
       </span>
       <span>
         <img src={Vivenesity}></img>
       </span>
       <span>
         <img src={currikiimg}></img>
       </span>
       <span>
         <img src={Vivenesity}></img>
       </span>
       <span>
         <img src={currikiimg}></img>
       </span>
     </div>
     </div>
    </>
  );
};

export default Technology;
