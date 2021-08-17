import React from "react"
import { graphql } from "gatsby"

import BlogPost from "../../components/template-parts/blog-post"

export default ({ data }) => <BlogPost data={data} />

export const query = graphql`
  query post($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPost(id: { eq: $id }) {
      title
      content
      excerpt
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
              fluid(maxWidth: 1920, quality: 90, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
            publicURL
          }
        }
      }
    }

    nextPage: wpPost(id: { eq: $nextPage }) {
      title
      uri
    }

    previousPage: wpPost(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`
