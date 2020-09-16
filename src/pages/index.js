import React from "react"
import { graphql } from "gatsby"
import { Grid } from "@chakra-ui/core"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Section from "../components/section"
import Hero from "../components/hero"
import LogoGallery from "../components/logoGallery"
import ProjectCarousel from "../components/projectCarousel"
import PostCarousel from "../components/postCarousel"

export default function Home({ data }) {
  const { wpPage: page } = data
  const { title, featuredImage, acfFrontPageFields: fields } = page

  return (
    <Layout>
      <Hero
        title={title}
        image={featuredImage.node.remoteFile.childImageSharp.fluid}
      />
      <Section bg="primary" align="right" small="full">
        <ProjectCarousel
          items={data.allWpProject.nodes}
          css={css`
            position: relative;
            transform: translateY(-12rem);
            margin-bottom: -12rem;
            z-index: 1;
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
      <Section
        css={css`
          padding-bottom: 0;
        `}
      >
        <div
          className="intro"
          dangerouslySetInnerHTML={{ __html: fields.stackHeadline }}
        />
        <LogoGallery items={fields.stack} />
      </Section>
      <Section align="right">
        <div
          className="intro"
          dangerouslySetInnerHTML={{ __html: fields.stackHeadline }}
        />
        <PostCarousel items={data.allWpPost.nodes} />
      </Section>
    </Layout>
  )
}

const ServiceItem = styled.div`
  & > ul {
    list-style: none;
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
        excerpt
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
      }
    }
  }
`
