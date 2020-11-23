import React from "react"
import { graphql } from "gatsby"

import DefaultPage from "../../components/template-parts/default-page"
import FrontPage from "../../components/template-parts/front-page"
import PostsPage from "../../components/template-parts/posts-page"

export default ({ data }) => {
  if (data.page.isFrontPage) return <FrontPage data={data} />
  if (data.page.isPostsPage) return <PostsPage data={data} />
  return <DefaultPage data={data} />
}

export const query = graphql`
  query page($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPage(id: { eq: $id }) {
      title
      excerpt
      content
      isFrontPage
      isPostsPage
      seo {
        title
        metaDesc
        metaRobotsNofollow
        metaRobotsNoindex
      }
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 50, cropFocus: CENTER) {
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
            separator
            items {
              content
            }
          }
          ... on WpPage_Acfdefaultpagefields_Layouts_ImageCarousel {
            fieldGroupName
            bgColor
            headline
            images {
              altText
              localFile {
                childImageSharp {
                  fluid(maxHeight: 800, quality: 50, cropFocus: CENTER) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
          ... on WpPage_Acfdefaultpagefields_Layouts_PostCarousel {
            fieldGroupName
            bgColor
            headline
            category {
              id
              posts {
                nodes {
                  id
                  title
                  excerpt
                  uri
                  tags {
                    nodes {
                      id
                      name
                    }
                  }
                  featuredImage {
                    node {
                      altText
                      localFile {
                        childImageSharp {
                          fluid(maxWidth: 400, quality: 50, cropFocus: CENTER) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                          }
                        }
                      }
                    }
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
                altText
                localFile {
                  childImageSharp {
                    fluid(maxHeight: 800, quality: 50, cropFocus: CENTER) {
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
              altText
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1280, quality: 60) {
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
          ... on WpPage_Acfdefaultpagefields_Layouts_LogoGallery {
            fieldGroupName
            bgColor
            headline
            images {
              altText
              localFile {
                publicURL
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
