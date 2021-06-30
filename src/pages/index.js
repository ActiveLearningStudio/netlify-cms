import React from "react"
import { graphql } from "gatsby"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
 
  const { allMarkdownRemark:{nodes} } = data // data.markdownRemark holds your post data
  const home = nodes.filter(slug=>slug.frontmatter.templateKey==='testnomial')[0]
  const hero = nodes.filter(slug=>slug.frontmatter.templateKey==='hero')[0]
  const contact = nodes.filter(slug=>slug.frontmatter.templateKey==='contact')[0]
  console.log(hero);

  return (
    
    <div className="blog-post-container">
      <h1>this is the home page</h1>
      <div className="blog-post">
        <h2>{home.frontmatter.title}</h2>
        <h2>{home.frontmatter.birthdate}</h2>
        <h2>{home.frontmatter.favouriteProjects}</h2>
        <img src={home.frontmatter.tags}></img>
        <h2>{home.frontmatter.color}</h2>
        
      </div>
      <h1>this is the hero page</h1>
      <div className="blog-post">
        <h2>{hero.frontmatter.title}</h2>
        <h2>{hero.frontmatter.description}</h2>
        <h2>{hero.frontmatter.featuredpost}</h2>
        <img src={hero.frontmatter.featuredimage} alt='your image'></img>
        
      </div>

      <h1>this is the contact us page</h1>
      <div className="blog-post">
        <h2>{contact.frontmatter.title}</h2>
        <h2>{contact.frontmatter.member}</h2>
        <h2>{contact.frontmatter.country}</h2>
        <h2>{contact.frontmatter.description}</h2>
        
      </div>

    </div>
    
    
  )
}

export const pageQuery = graphql`
query MyQuery {
  allMarkdownRemark {
    nodes {
      frontmatter {
        birthdate
        color
        country
        description
        favouriteProjects
        featuredimage
        featuredpost
        location
        member
        tags
        templateKey
        title
        your_age
      }
      html
    }
  }
}

`