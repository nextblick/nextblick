import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import SEO from "../seo"
import Hero from "../hero"
import Layout from "../../components/layout"
import Layouts from "../../layouts"
import ProjectCarousel from "../projectCarousel"
import Section from "../section"
import { Grid } from "@chakra-ui/core"

var decodeHTML = function (html) {
  var txt = document.createElement("textarea")
  txt.innerHTML = html
  return txt.value
}

function PostsPage({ data }) {
  const { page } = data
  const { acfDefaultPageFields, excerpt, featuredImage, title, seo } = page

  const { allWpPost } = useStaticQuery(graphql`
    {
      allWpPost(sort: { fields: [date] }) {
        nodes {
          id
          title
          excerpt
          uri
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400, quality: 90, cropFocus: CENTER) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title={decodeHTML(seo.title)} description={seo.metaDesc} />
      <Hero
        title={title}
        subtitle={acfDefaultPageFields.subtitle}
        excerpt={excerpt}
        image={
          featuredImage && featuredImage.node.localFile.childImageSharp.fluid
        }
      />
      <Section bg="primary">
        <Grid templateColumns="repeat(4, 1fr)" gap={10}>
          {allWpPost.nodes.map((post) => (
            <div>
              {post.featuredImage && (
                <Image
                  fluid={
                    post.featuredImage.node.localFile.childImageSharp.fluid
                  }
                />
              )}
              <Link to={post.uri}>
                <h3>{post.title}</h3>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            </div>
          ))}
        </Grid>
      </Section>
    </Layout>
  )
}

export default PostsPage

const Image = styled(Img)`
  margin-bottom: 1rem;
`
