import React from "react";
import currikiimg from "../../assets/images/studio_new_logo_small.png";
import Vivenesity from "../../../src/img/Vivensity.svg";
import "./style.scss";
const Technology = ({data}) => {
  // console.log(data);
  return (
    <>
      <div className="tech-section">
        <h2 className="tech-heading">
          {data.frontmatter.learningTechnology_heading}
          {/* <span style={{ color: "#f8af2c" }}>learning technology.</span> */}
        </h2>
        
        <div className="tech-content">
          {data.frontmatter.communitys.community.map((comunity)=>{
            return (
              <span>
              <img src={comunity.learningTechnology_logos}></img>
            </span>
            ) 
          })}
         
         
        </div>
      </div>
    </>
  );
};

export default Technology;
