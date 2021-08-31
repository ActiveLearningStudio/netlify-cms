import React from "react";
import img1 from "../../assets/images/BringyourideasSVG.svg";
import img2 from "../../assets/images/contentAnywhereSVG.svg";
import img3 from "../../assets/images/weAreFreeSVG.svg";
import logo from "../../assets/images/studio_new_logo_small.png";
import ReactMarkdown from 'react-markdown';
const Create = ({data}) => {
  
  // console.log(data);
  return (
    <div className="create-content">
      <div className="heading">
        <img src={data.frontmatter.freeLearning_image} alt="" />
        <p className="open-para-25 open-gray open-rubik open-thin">
        {data.frontmatter.freeLearning_heading_one}
        </p>
      </div>
      
                <div className="all-blocks">
                {data.frontmatter.platfroms.platfrom.map((platform) => {
              return (
                <div className="block">
                  <img className="block-img" src={platform.platfrom_logo} alt="" />
                  <div className="block-text">
                    <p className="open-para-18 open-gray open-rubik ">
                       <ReactMarkdown  children={platform.platfrom_heading}/>,
                    </p>
                  </div>
                </div>
              );
            })}
              </div>
              

            
      <div className="lear-more">
        <p className="open-para-25 open-gray open-rubik open-thin learn-text">
        {data.frontmatter.freeLearning_heading_two}
        </p>
        <a href={data.frontmatter.freeLearning_btn.btn_url}  className="open-button">
        {data.frontmatter.freeLearning_btn.btn_text}
        </a>
      </div>
    </div>
  );
};

export default Create;
