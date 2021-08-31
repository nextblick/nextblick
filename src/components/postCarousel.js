import React from "react"
import Slider from "react-slick"
import Img from "gatsby-image"
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const PostCarousel = ({ items, ...props }) => {
  var settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <HiOutlineArrowNarrowRight />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          variableWidth: false,
        },
      },
    ],
  }

  console.log(items)

  return (
    <Slider
      css={css`
        overflow: hidden;
        .slick-arrow {
          width: 64px;
          height: 64px;
          background: #040c26;
          opacity: 0.5;
          color: #fff;
          padding: 1rem;
          transform: translateY(-80px);
          &.slick-next {
            right: 0;
          }
        }
      `}
      {...settings}
      {...props}
    >
      {items.map(({ featuredImage, title, id, tags }) => (
        <PostItem key={id}>
          {featuredImage && (
            <Image
              alt={featuredImage.node.altText}
              fluid={featuredImage.node.remoteFile.childImageSharp.fluid}
            />
          )}
          <div>
            {tags.nodes.map((tag) => (
              <Tag>{tag.name}</Tag>
            ))}
          </div>
          <h3>{title}</h3>
        </PostItem>
      ))}
    </Slider>
  )
}

const PostItem = styled.article`
  display: block;
  width: 400px !important;
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

export default PostCarousel
