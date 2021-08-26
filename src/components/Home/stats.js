import React from 'react';
import img1 from '../../assets/images/projects-home.svg';
import img2 from '../../assets/images/users-home.svg';
import img3 from '../../assets/images/projects-home.svg';

const Stats = () => {
  return (
    <div className="stats">
      <div className="content">
        <div className="heading">
          <h2 className="headng-one open-semi open-yellow">Curriki stats</h2>

          <p className="open-para-25 rubik open-white">
            Curriki brings together a diverse and international community of
            creators to build interactive content that drives real learning
            engagement. Since launch in July 2020, growing and connecting orgs
            dedicated to transforming learning.
          </p>
        </div>

        <div className="all-blocks">
          <div className="block">
            <img src={img1} alt="" />
            <h4 className="et_pb_module_header">4,123</h4>

            <p className="open-para-25 rubik open-white open-thin">PROJECTS</p>
          </div>

          <div className="block">
            <img src={img2} alt="" />
            <h4 className="et_pb_module_header">6123</h4>

            <p className="open-para-25 rubik open-white open-thin">USERS</p>
          </div>

          <div className="block">
            <img src={img3} alt="" />
            <h4 className="et_pb_module_header">10123</h4>

            <p className="open-para-25 rubik open-white open-thin">
              ACTIVITIES
            </p>
          </div>
        </div>
        <button>ARTNERS CREATING WITH CURRIKI</button>
      </div>
    </div>
  );
};

export default Stats;
