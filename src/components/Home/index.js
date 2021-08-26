import React from 'react';
import Hero from './hero';
import For from './for';
import Create from './create-content';
import Start from './start';
import Technology from './technologies';
import Stats from './stats';

import './style.scss';

const Index = () => {
  return (
    <div className="home-page">
      <div className="bg-section">
        <Hero />
        <For />
        <Create />
      </div>
      <Stats />
      <Technology />
      <Start />
    </div>
  );
};

export default Index;
