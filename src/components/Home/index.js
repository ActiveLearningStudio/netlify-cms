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
    <>
      <Hero />
      <For />
      <Create />
      <Stats />
      <Technology />
      <Start />
    </>
  );
};

export default Index;
