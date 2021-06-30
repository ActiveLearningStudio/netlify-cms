import React from "react"
import { graphql } from "gatsby"
import { fill } from "lodash"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
console.log(data);
  const {allMarkdownRemark:{nodes} } = data // data.markdownRemark holds your post data
    
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
export const pageQuery = graphql`
query MyQuery {
  allMarkdownRemark {
    nodes {
      html
      frontmatter {
        birthdate
        color
        country
        description
        featuredpost
        member
        title
        your_age
        tags
        location
        featuredimage
        favouriteProjects
        contact
        hero
        testonomial
      }
    }
  }
}
`