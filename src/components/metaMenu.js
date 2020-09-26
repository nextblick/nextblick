import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Menu } from "@chakra-ui/core"
import { css } from "@emotion/core"

import { normalizePath } from "../utils/get-url-path"

export default () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "meta-menu" }) {
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

  return (
    <Menu>
      {wpMenu.menuItems.nodes.map((menuItem, i) => {
        if (menuItem.parentId) {
          return null
        }

        const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

        return (
          <Link
            key={i + menuItem.url}
            to={normalizePath(path)}
            css={css`
              display: block;
            `}
          >
            {menuItem.label}
          </Link>
        )
      })}
    </Menu>
  )
}
