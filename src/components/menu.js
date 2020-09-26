import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Menu, Box, Flex } from "@chakra-ui/core"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import { normalizePath } from "../utils/get-url-path"
import Container from "./container"

export default ({ isMenuOpen }) => {
  const { wp, wpMenu } = useStaticQuery(graphql`
    {
      wp {
        themeMenuSettings {
          acfOptionsMenuFields {
            menuContent
          }
        }
      }
      wpMenu(slug: { eq: "main-menu" }) {
        name
        menuItems {
          nodes {
            label
            url
            parentId
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
          }
        }
      }
    }
  `)

  return !!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes ? (
    <Wrapper
      css={
        isMenuOpen
          ? css`
              opacity: 1;
              visibility: visible;
              transition: all 0.3s ease-in-out;
            `
          : css`
              opacity: 0;
              visibility: hidden;
              transition: all 0.3s ease-in-out;
            `
      }
    >
      <Container>
        <Flex flexDirection={["column-reverse", "", "row"]}>
          <Box w={["100%", "", "50%"]}>
            <div
              dangerouslySetInnerHTML={{
                __html: wp.themeMenuSettings.acfOptionsMenuFields.menuContent,
              }}
            />
          </Box>
          <Box>
            <Menu>
              {wpMenu.menuItems.nodes.map((menuItem, i) => {
                if (menuItem.parentId) {
                  return null
                }

                const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

                return (
                  <Link
                    key={i + menuItem.url}
                    css={css`
                      font-size: 2rem;
                      display: block;
                      margin-bottom: 0.6rem;
                      &[aria-current="page"] {
                        font-weight: bold;
                      }
                      @media screen and (min-width: 768px) {
                        font-size: 3rem;
                        margin-bottom: 1.2rem;
                      }
                    `}
                    to={normalizePath(path)}
                  >
                    {menuItem.label}
                  </Link>
                )
              })}
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Wrapper>
  ) : null
}

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: #fff;
  padding: 8rem 0;
  p {
    font-size: 0.9rem;
    margin-bottom: 0;
    @media screen and (min-width: 768px) {
      margin-bottom: 2rem;
      font-size: 1.2rem;
    }
  }
`
