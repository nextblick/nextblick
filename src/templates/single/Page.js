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
      excerpt
      content
      featuredImage {
        node {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 90, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
      acfDefaultPageFields {
        subtitle
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
                  fluid(
                    maxHeight: 600
                    quality: 90
                    srcSetBreakpoints: [480, 768, 1280]
                  ) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          ... on WpPage_Acfdefaultpagefields_Layouts_Text {
            fieldGroupName
            bgColor
            text
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
