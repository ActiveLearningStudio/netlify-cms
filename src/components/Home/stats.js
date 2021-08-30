import React from "react";
import img1 from "../../assets/images/projects-home.svg";
import img2 from "../../assets/images/users-home.svg";
import img3 from "../../assets/images/projects-home.svg";

const Stats = ({data}) => {
// console.log(data);
  return (
    <div className="stats">
      <div className="content">
        <div className="heading">
          <h2 className="headng-one open-semi open-yellow">{data.frontmatter.currikiStats_heading}</h2>

          <p className="open-para-25 rubik open-white">
            {
              data.frontmatter.currikiStats_descrip
            }
          </p>
        </div>

        <div className="all-blocks">
          
          {data.frontmatter.communitys.community.map((comunity)=>{
            return (
              <div className="block">
              <img className="stats-img2" src={comunity.community_logo} alt="" />
              <h4 className="et_pb_module_header">{comunity.community_navbars}</h4>
  
              <p className="open-para-25 rubik open-white open-thin">{comunity.community_names}</p>
            </div>
            )
          }
          )}
         

          
        </div>
        <a className="stat-btn" href={data.frontmatter.currikiStats_btn.crruikiBtn_url}>
         {data.frontmatter.currikiStats_btn.crruikiBtn_text}
        </a>
      </div>
    </div>
  );
};

export default Stats;
