import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Menu, Box, Flex } from "@chakra-ui/core"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import { normalizePath } from "../utils/get-url-path"
import Container from "./container"

export default ({ isMenuOpen }) => {
  const { wpMenu } = useStaticQuery(graphql`
    {
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
            <p>
              <strong>Email</strong>
              <br />
              hello@mbmco.de
            </p>
            <p>
              <strong>Phone</strong>
              <br />
              +49 1520 6049110
            </p>
            <p>
              <strong>Address</strong>
              <br />
              <address>
                MBM&amp;CO Digital Agency
                <br />
                Taunusanlage 8<br />
                60329 Frankfurt am Main
                <br />
                HE, Deutschland
              </address>
            </p>
            <p>
              Impressum
              <br />
              Datenschutz
            </p>
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
                      font-size: 3rem;
                      display: block;
                      margin-bottom: 1.2rem;
                      &[aria-current="page"] {
                        font-weight: bold;
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
    margin-bottom: 2rem;
  }
`
