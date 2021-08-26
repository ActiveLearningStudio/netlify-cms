import React from 'react';
import img1 from '../../assets/images/BringyourideasSVG.svg';
import img2 from '../../assets/images/contentAnywhereSVG.svg';
import img3 from '../../assets/images/weAreFreeSVG.svg';
import logo from '../../assets/images/studio_new_logo_small.png';
const Create = () => {
  return (
    <div className="create-content">
      <div className="heading">
        <img src={logo} alt="" />
        <p className="open-para-25 open-gray open-rubik open-thin">
          Free learning content authoring solution with one-click publishing to
          share content to any platform.
        </p>
      </div>

      <div className="all-blocks">
        <div className="block">
          <img src={img1} alt="" />
          <p className="open-para-18 open-gray open-rubik ">
            You bring the ideas.
            <br />
            <span>We’ll bring the tools.</span>
          </p>
        </div>

        <div className="block">
          <img src={img2} alt="" />
          <p>
            Content authoring solutions with interactive lessons for any
            learner,
            <span>anywhere.</span>
          </p>
        </div>

        <div className="block">
          <img src={img3} alt="" />
          <p>
            <br />
            <span>And we are free!</span>
          </p>
        </div>
      </div>
      <div className="lear-more">
        <p className="open-para-25 open-gray open-rubik open-thin ">
          Create & publish your content. Right here
        </p>
        {/* <button className="open-button">LEARN MORE</button> */}
      </div>
    </div>
  );
};

export default Create;
