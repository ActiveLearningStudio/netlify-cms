import React from "react";
import For1 from "../../assets/images/for_1.svg";
import For2 from "../../assets/images/for_2.svg";
const For = ({data}) => {
   console.log(data);
  
  return (
    <div className="for-edu">
       {data.frontmatter.cards.card.map((card) => {
              return (
                <div
        style={{
          backgroundImage: `url(${card.card_logo})`,
          backgroundPosition: "45px center",
          backgroundSize: "175px",
          backgroundRepeat: "no-repeat",
        }}
        className="block"
      >
        <div className="content">
          <h4 className="open-para-25 open-yellow">{card.card_heading_one}</h4>

          <p className="open-para-18 open-white for-para">
          {card.card_heading_two}
          </p>

          <a
            className="open-para-18 open-white open-rubik open-semi"
            href={card.link_url}
          >
           {card.link_name} &gt;
          </a>
        </div>
      </div>

              );
            })}
            
    </div>
  );
};

export default For;
