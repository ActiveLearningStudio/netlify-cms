import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { useStaticQuery, graphql} from 'gatsby';

const Index = ({children}) => {
    const data = useStaticQuery(graphql`
        query layoutQuery {
            allMarkdownRemark {
            nodes {
                frontmatter {
                top_logo
                add_links {
                    links {
                    link_name
                    url
                    }
                }
                pages {
                    page {
                    pagename
                    url
                    }
                }
                footer_logo
                powered_by
                templateKey
                }
            }
            }
        }
   `);

   const {
    allMarkdownRemark: { nodes }
   } = data;

   const navigation = nodes.filter(data => data.frontmatter.templateKey === 'top-navbar')?.[0]
   const footerdata = nodes.filter(data => data.frontmatter.templateKey === 'footer-area')?.[0]

    
    return (
        <>
        <Navbar data={navigation} />
            <main>
                <div>{children}</div>
            </main>
        <Footer data={footerdata} />
        </>
    )
}
export default Index