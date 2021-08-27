import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
export default function Moneytrasferdata() {
  const HomeData = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          nodes {
            frontmatter {
              add_links {
                links {
                  link_name
                  url
                }
              }
              birthdate
              cards {
                card {
                  card_heading_one
                  card_heading_two
                  card_logo
                  link_name
                  link_url
                }
              }
              color
              coming_image
              communitys {
                community {
                  community_logo
                  community_names
                  community_navbars
                  learningTechnology_logos
                }
              }
              country
              currikiStats_btn {
                crruikiBtn_text
                crruikiBtn_url
              }
              currikiStats_descrip
              currikiStats_heading
              description
              favouriteProjects
              featuredpost
              footer_logo
              featuredimage
              freeLearning_btn {
                btn_text
                btn_url
              }
              freeLearning_heading_one
              freeLearning_heading_two
              heading_Three
              freeLearning_image
              heading_bottom
              heading_one
              heading_top
              heading_two
              learningTechnology_heading
              hero_image
              location
              member
              pages {
                page {
                  pagename
                  pageurl
                }
              }
              platfroms {
                platfrom {
                  platfrom_heading
                  platfrom_logo
                }
              }
              powered_by
              tags
              templateKey
              title
              top_logo
              your_age
            }
          }
        }
      }
    `
  );

  return HomeData;
}
