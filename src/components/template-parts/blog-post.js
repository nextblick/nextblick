import React from "react"

import { Link } from "gatsby"
import { Box, Heading } from "@chakra-ui/core"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import { normalizePath } from "../../utils/get-url-path"
import SEO from "../seo"
import Hero from "../hero"
import Section from "../section"

function BlogPost({ data }) {
  const { nextPage, previousPage, page } = data
  const { title, content, excerpt, featuredImage, seo } = page

  console.log(data)

  return (
    <Layout>
      <SEO
        title={seo.title}
        description={seo.metaDesc}
        metaRobotsNoindex={seo.metaRobotsNoindex}
        metaRobotsNofollow={seo.metaRobotsNofollow}
      />
      <Hero
        title={title}
        excerpt={excerpt}
        image={
          featuredImage && featuredImage.node.localFile.childImageSharp.fluid
        }
      />
      <Section>
        <Box
          maxWidth="960px"
          margin="0 auto"
          dangerouslySetInnerHTML={{ __html: content }}
          data-sal="slide-up"
          data-sal-duration="1200"
        />
      </Section>
    </Layout>
  )
}

export default BlogPost
