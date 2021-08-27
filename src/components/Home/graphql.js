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
                  links {
                    link_name
                    url
                  }
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
              contactUs_image
              contactUs_btn
              contactheading_one
              contactheading_two
              country
              currikiStats_btn {
                crruikiBtn_text
                crruikiBtn_url
              }
              currikiStats_descrip
              currikiStats_heading
              customersSay_heading
              customersSay_slider {
                slider {
                  slider_descrip
                  user_image
                  user_name
                }
              }
              description
              favouriteProjects
              featuredimage
              featuredpost
              footer_logo
              freeLearning_btn {
                btn_url
                btn_text
              }
              freeLearning_heading_one
              freeLearning_heading_two
              freeLearning_image
              heading_Three
              heading_bottom
              heading_one
              heading_top
              heading_two
              hero_image
              learningTechnology_heading
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
              social_media_Icon {
                icons {
                  SMIcon
                  icon_url
                }
              }
              startCurriki_heading
              startDemos {
                demo {
                  demo_title
                  demos_btn {
                    demoBtn_text
                    demoBtn_url
                  }
                }
              }
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
