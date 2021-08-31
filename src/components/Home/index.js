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
  const ForData = result?.allMarkdownRemark?.nodes.filter(
    (node) => node.frontmatter.templateKey === 'for-cardsection'
  )?.[0];
  // console.log(ForData)
  const FreeLearnData = result?.allMarkdownRemark?.nodes.filter(
    (node) => node.frontmatter.templateKey === 'free-learning'
  )?.[0];
  
  const StatsData = result?.allMarkdownRemark?.nodes.filter(
    (node) => node.frontmatter.templateKey === 'curriki-stats'
  )?.[0];
  
  const techData = result?.allMarkdownRemark?.nodes.filter(
    (node) => node.frontmatter.templateKey === 'learning-technology'
  )?.[0];

  const customerData = result?.allMarkdownRemark?.nodes.filter(
    (node) => node.frontmatter.templateKey === 'customers-say'
  )?.[0];

  const startData = result?.allMarkdownRemark?.nodes.filter(
    (node) => node.frontmatter.templateKey === 'start-curriki'
  )?.[0];
 
  return (
    <div className="home-page">
      <div className="bg-section">
        <Hero data={HeroData} />
        <For data={ForData} />
        <Create data={FreeLearnData} />
      </div>
      <Stats  data={StatsData}/>
      <Technology data={techData}/>
      <Customers data={customerData}/>
      <Start  data={startData}/>
    </div>
  );
};

export default Index;
