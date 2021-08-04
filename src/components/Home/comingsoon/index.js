import React from 'react'
import { useStaticQuery, graphql} from 'gatsby';

const Index = () => {
  const ComingData = useStaticQuery(graphql`
    query ComingQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            templateKey
            coming_image
            description
          }
        }
      }
    }
  `);

  const {
    allMarkdownRemark: { nodes }
  } = ComingData;

  const detall = nodes.filter(data => data.frontmatter.templateKey === 'coming-soon')?.[0]

    return (
        <> 
          <div>
            <img style={{maxWidth: '100%'}} src={detall.frontmatter.coming_image} alt="cs" />
            <p>{detall.frontmatter.description}</p>
          </div>
          
        </>
    )
}

export default Index
