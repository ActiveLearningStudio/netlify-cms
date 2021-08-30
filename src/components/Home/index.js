import React, { useEffect } from 'react';
import Hero from './hero';
import For from './for';
import Create from './create-content';
import Start from './start';
import Technology from './technologies';
import Stats from './stats';
import Customers from './customers';
import HomeData from './graphql';

import './style.scss';

const Index = () => {
  const result = HomeData();

  const HeroData = result?.allMarkdownRemark?.nodes.filter(
    (node) => node.frontmatter.templateKey === 'hero-section'
  )?.[0];

  return (
    <div className="home-page">
      <div className="bg-section">
        <Hero data={HeroData} />
        <For />
        <Create />
      </div>
      <Stats />
      <Technology />
      <Customers/>
      <Start />
    </div>
  );
};

export default Index;
