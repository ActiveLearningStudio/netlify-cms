import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { useStaticQuery, graphql} from 'gatsby';
import HomeData from '../Home/graphql';
import '../../assets/css/index.scss';

const Index = ({children}) => {
  const result = HomeData();
   
   const navigation = result?.allMarkdownRemark?.nodes.filter(
    (node) => node.frontmatter.templateKey === 'top-navbar'
  )?.[0];

  const footerdata = result?.allMarkdownRemark?.nodes.filter(
    (node) => node.frontmatter.templateKey === 'footer-area'
  )?.[0];
   
    
    return (
        <>
        <Navbar data={navigation} />
            <main>
                <div>{children}</div>
            </main>
        <Footer data={footerdata}  />
        </>
    )
}
export default Index