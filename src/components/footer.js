import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Flex } from "@chakra-ui/core"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Section from "../components/section"
import MetaMenu from "./metaMenu"

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          wp {
            themeFooterSettings {
              acfOptionsFooterFields {
                footerContent
                footerImage {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1280) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={({
        wp: {
          themeFooterSettings: { acfOptionsFooterFields },
        },
      }) => (
        <Footer>
          <Section
            bg="primary"
            align="right"
            css={css`
              padding-bottom: 0 !important;
            `}
          >
            <Flex flexDirection={["column-reverse", "", "row"]}>
              <Flex
                css={css`
                  max-width: 500px;
                  margin-bottom: 2rem;
                `}
                flexDirection="column"
                justifyContent="space-between"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: acfOptionsFooterFields.footerContent,
                  }}
                />
                <div>
                  <MetaMenu />
                </div>
              </Flex>
              <Image
                fluid={
                  acfOptionsFooterFields.footerImage.localFile.childImageSharp
                    .fluid
                }
              />
            </Flex>
          </Section>
        </Footer>
      )}
    />
  )
}

const Footer = styled.footer`
  .contact {
    margin: 3rem 0;
    font-size: 1.8rem;
    font-weight: bold;
  }
`
const Image = styled(Img)`
  width: 100%;
  margin-bottom: 3rem;
  @media screen and (min-width: 768px) {
    margin-left: 8rem;
    margin-bottom: 0;
  }
`
