import React from "react"
import Slider from "react-slick"
import { Box } from "@chakra-ui/core"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

import Section from "../components/section"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "gatsby"

export default ({ bgColor, headline, category }) => {
  var settings = {
    speed: 500,
    slidesToShow: 2,
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

  console.log(category)

  return (
    <Section bg={bgColor} headline={headline} align="right" full>
      <div data-sal="slide-up" data-sal-duration="1200">
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
        >
          {category.posts.nodes.map(
            ({ featuredImage, title, id, tags, uri }) => (
              <PostItem key={id}>
                {featuredImage && (
                  <Image
                    fluid={featuredImage.node.localFile.childImageSharp.fluid}
                  />
                )}
                <div>
                  {tags.nodes.map((tag) => (
                    <Tag>{tag.name}</Tag>
                  ))}
                </div>
                <Link to={uri}>
                  <h3>{title}</h3>
                </Link>
              </PostItem>
            )
          )}
        </Slider>
      </div>
    </Section>
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
