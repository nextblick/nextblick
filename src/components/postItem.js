import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"

export const PostItem = ({ featuredImage, tags, title, excerpt }) => {
  return (
    <Item>
      {featuredImage && (
        <Image
          alt={featuredImage.node.altText}
          fluid={featuredImage.node.localFile.childImageSharp.fluid}
        />
      )}
      <div>
        {tags.nodes.map((tag) => (
          <Tag>{tag.name}</Tag>
        ))}
      </div>
      <h3>{title}</h3>
      <blockquote dangerouslySetInnerHTML={{ __html: excerpt }} />
    </Item>
  )
}

const Item = styled.article`
  display: block;
  width: 100%;
  margin-right: 1.5rem;
  cursor: pointer;
`

const Image = styled(Img)`
  margin-bottom: 1.5rem;
`

const Tag = styled.span`
  position: relative;
  margin-right: 0.3rem;
  &:not(:last-child):after {
    content: "|";
    padding-left: 0.3rem;
  }
`
