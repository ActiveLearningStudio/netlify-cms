import React from "react";
import For1 from "../../assets/images/for_1.svg";
import For2 from "../../assets/images/for_2.svg";
const For = ({data}) => {
  // console.log(data);
  
  return (
    <div className="for-edu">
       {data.frontmatter.cards.card.map((key) => {
              return (
                <div
        style={{
          backgroundImage: `url(${For2})`,
          backgroundPosition: "left",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        className="block"
      >
        <div className="content">
          <h4 className="open-para-25 open-yellow">{key.card_heading_one}</h4>

          <p className="open-para-18 open-white for-para">
          {key.card_heading_two}
          </p>

          <a
            className="open-para-18 open-white open-rubik open-semi"
            href={key.link_url}
          >
           {key.link_name} &gt;
          </a>
        </div>
      </div>

              );
            })}
            
    </div>
  );
};

export default For;
