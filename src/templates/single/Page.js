import React from "react"
import { graphql } from "gatsby"

import DefaultPage from "../../components/template-parts/default-page"

export default ({ data }) => {
  return <DefaultPage data={data} />
}

export const query = graphql`
  query page($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPage(id: { eq: $id }) {
      title
      content
      featuredImage {
        node {
          remoteFile {
            ...HeroImage
          }
        }
      }
      acfDefaultPageFields {
        layouts {
          ... on WpPage_Acfdefaultpagefields_Layouts_Grid {
            fieldGroupName
            bgColor
            headline
            columns
            items {
              content
            }
          }
          ... on WpPage_Acfdefaultpagefields_Layouts_ImageCarousel {
            fieldGroupName
            bgColor
            headline
            images {
              localFile {
                childImageSharp {
                  fluid(maxHeight: 800, quality: 90, cropFocus: CENTER) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
          ... on WpPage_Acfdefaultpagefields_Layouts_Team {
            fieldGroupName
            bgColor
            headline
            items {
              description
              image {
                localFile {
                  childImageSharp {
                    fluid(maxHeight: 800, quality: 90, cropFocus: CENTER) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
            }
          }
          ... on WpPage_Acfdefaultpagefields_Layouts_TextImage {
            fieldGroupName
            bgColor
            text
            imagePosition
            image {
              localFile {
                childImageSharp {
                  fixed(height: 600, quality: 90, cropFocus: CENTER) {
                    ...GatsbyImageSharpFixed_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }

    nextPage: wpPage(id: { eq: $nextPage }) {
      title
      uri
    }

    previousPage: wpPage(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`
