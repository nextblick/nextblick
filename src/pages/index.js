import React from "react"
import { graphql } from "gatsby"
import { Grid } from "@chakra-ui/core"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Section from "../components/section"
import Hero from "../components/hero"
import LogoGallery from "../components/logoGallery"
import ProjectCarousel from "../components/projectCarousel"
import PostCarousel from "../components/postCarousel"

export default function Home({ data }) {
  const { wpPage: page } = data
  const { title, excerpt, featuredImage, acfFrontPageFields: fields } = page

  return (
    <Layout>
      <SEO title={title} />
      <Hero
        title={title}
        excerpt={excerpt}
        image={featuredImage.node.remoteFile.childImageSharp.fluid}
      />
      <Section bg="primary" align="right" small="full">
        <ProjectCarousel
          items={data.allWpProject.nodes}
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
        />
      </Section>
      <Section bg="primary">
        <div
          className="intro"
          dangerouslySetInnerHTML={{ __html: fields.clientsHeadline }}
        />
        <LogoGallery items={fields.clients} />
      </Section>
      <Section bg="primary">
        <div dangerouslySetInnerHTML={{ __html: fields.servicesHeadline }} />
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap="4rem"
        >
          {fields.services.map((service, index) => (
            <ServiceItem
              key={index}
              dangerouslySetInnerHTML={{ __html: service.content }}
            />
          ))}
        </Grid>
      </Section>
      <Section>
        <div
          className="intro"
          dangerouslySetInnerHTML={{ __html: fields.stackHeadline }}
        />
        <LogoGallery items={fields.stack} />
      </Section>
      {/*<Section align="right">
        <div
          className="intro"
          dangerouslySetInnerHTML={{ __html: fields.journalHeadline }}
        />
        <PostCarousel items={data.allWpPost.nodes} />
      </Section>*/}
    </Layout>
  )
}

const ServiceItem = styled.div`
  padding-bottom: 4rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  & > ul {
    list-style: none;
    padding-bottom: 1rem;
    li {
      margin-bottom: 1rem;
    }
  }
  & > hr {
    margin-top: 4rem;
  }
`

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        slug
        featuredImage {
          node {
            remoteFile {
              ...HeroImage
            }
          }
        }
        tags {
          nodes {
            name
          }
        }
      }
    }
    allWpProject(sort: { fields: [date] }) {
      nodes {
        id
        title
        excerpt
        slug
        featuredImage {
          node {
            remoteFile {
              ...HeroImage
            }
          }
        }
      }
    }
    wpPage(isFrontPage: { eq: true }) {
      title
      excerpt
      featuredImage {
        node {
          remoteFile {
            ...HeroImage
          }
        }
      }
      acfFrontPageFields {
        clientsHeadline
        clients {
          localFile {
            publicURL
          }
        }
        servicesHeadline
        services {
          content
        }
        stackHeadline
        stack {
          localFile {
            publicURL
          }
        }
        journalHeadline
      }
    }
  }
`
