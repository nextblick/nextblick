import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"

import SEO from "../seo"
import Hero from "../hero"
import Layout from "../../components/layout"
import Layouts from "../../layouts"
import ProjectCarousel from "../projectCarousel"
import Section from "../section"

function FrontPage({ data }) {
  const { page } = data
  const { acfDefaultPageFields, excerpt, featuredImage, title, seo } = page

  const layouts = acfDefaultPageFields.layouts || []

  const { allWpProject } = useStaticQuery(graphql`
    {
      allWpProject(sort: { fields: [date] }) {
        nodes {
          id
          title
          excerpt
          slug
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  fluid(maxWidth: 800, quality: 90, cropFocus: CENTER) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
          acfProjectFields {
            title
          }
        }
      }
    }
  `)

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
        subtitle={acfDefaultPageFields.subtitle}
        excerpt={excerpt}
        image={
          featuredImage && featuredImage.node.localFile.childImageSharp.fluid
        }
      />
      <Section bg="primary" align="right" small="full">
        <div
          css={css`
            position: relative;
            transform: translateY(-6rem);
            margin-bottom: -6rem;
            z-index: 1;
            @media screen and (min-width: 768px) {
              transform: translateY(-12rem);
              margin-bottom: -12rem;
            }
          `}
        >
          <ProjectCarousel items={allWpProject.nodes} />
        </div>
      </Section>
      {layouts.map((layout, index) => (
        <Layouts key={index} layoutData={layout} />
      ))}
    </Layout>
  )
}

export default FrontPage
