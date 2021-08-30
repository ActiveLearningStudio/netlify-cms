import React from "react";
import For1 from "../../assets/images/for_1.svg";
import For2 from "../../assets/images/for_2.svg";
const For = () => {
  return (
    <div className="for-edu">
      <div
        style={{
          backgroundImage: `url(${For1})`,
          backgroundPosition: "left",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        className="block"
      >
        <div className="content">
          <h4 className="open-para-25 open-yellow">For educators</h4>

          <p className="open-para-18 open-white for-para">
            Interactive Learning Technology for K-12 and Higher Education.
          </p>

          <a
            className="open-para-18 open-white open-rubik open-semi"
            href="/educators/"
          >
            Learn More &gt;
          </a>
        </div>
      </div>
      <div
        className="block"
        style={{
          backgroundImage: `url(${For2})`,
          backgroundPosition: "left",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="content">
          <h4 className="open-para-25 open-yellow">For businesses</h4>

          <p className="open-para-18 open-white for-para">
            Interactive Learning Technology to engage employees and customers
          </p>

          <a
            className="open-para-18 open-white open-rubik open-semi"
            href="/educators/"
          >
            Learn More &gt;
          </a>
        </div>
      </div>
    </div>
  );
};

export default For;
