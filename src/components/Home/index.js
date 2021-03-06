import React, { useEffect } from "react";
import Hero from "./hero";
import For from "./for";
import Create from "./create-content";
import Start from "./start";
import Technology from "./technologies";
import Stats from "./stats";
import Customers from "./customers";
import HomeData from "./graphql";

import "./style.scss";

const Index = () => {
  const result = HomeData();

  const HeroData = result?.allMarkdownRemark?.nodes.filter(
    (node) => node.frontmatter.templateKey === "hero-section"
  )?.[0];
  const ForData = result?.allMarkdownRemark?.nodes.filter(
    (node) => node.frontmatter.templateKey === "for-cardsection"
  )?.[0];
  // console.log(ForData)
  const FreeLearnData = result?.allMarkdownRemark?.nodes.filter(
    (node) => node.frontmatter.templateKey === "free-learning"
  )?.[0];

  const StatsData = result?.allMarkdownRemark?.nodes.filter(
    (node) => node.frontmatter.templateKey === "curriki-stats"
  )?.[0];

  const techData = result?.allMarkdownRemark?.nodes.filter(
    (node) => node.frontmatter.templateKey === "learning-technology"
  )?.[0];

  const customerData = result?.allMarkdownRemark?.nodes.filter(
    (node) => node.frontmatter.templateKey === "customers-say"
  )?.[0];

  const startData = result?.allMarkdownRemark?.nodes.filter(
    (node) => node.frontmatter.templateKey === "start-curriki"
  )?.[0];

  const settingData = result?.allMarkdownRemark?.nodes.filter(
    (node) => node.frontmatter.templateKey === "setting"
  )?.[0];
  console.log(settingData)
  return (
    <div className="home-page">
      <div className="bg-section">
        {settingData.frontmatter.heroSection && <Hero data={HeroData} />}
        {settingData.frontmatter.forCard && <For data={ForData} />}
        {settingData.frontmatter.freeLearning && <Create data={FreeLearnData} />}
      </div>
      {settingData.frontmatter.currikiStats && <Stats data={StatsData} />}
      {settingData.frontmatter.learningTechnology && <Technology data={techData} />}
      {settingData.frontmatter.customersSay && <Customers data={customerData} />}
      {settingData.frontmatter.startCurriki && <Start data={startData} />}
    </div>
  );
};

export default Index;
