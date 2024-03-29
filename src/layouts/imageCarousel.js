import React from "react"
import Slider from "react-slick"
import { Box } from "@chakra-ui/react"
import Img from "gatsby-image"
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

import Section from "../components/section"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default ({ bgColor, headline, images }) => {
  var settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    nextArrow: <HiOutlineArrowNarrowRight />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  }

  return (
    <Section bg={bgColor} full>
      <div data-sal="slide-up" data-sal-duration="1200">
        {headline && (
          <Box maxW="40rem" dangerouslySetInnerHTML={{ __html: headline }} />
        )}
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
              &.slick-next {
                right: 0;
              }
            }
          `}
          {...settings}
        >
          {images.map(({ altText, localFile: { childImageSharp } }) => (
            <SliderItem>
              <Img fluid={childImageSharp.fluid} alt={altText} />
            </SliderItem>
          ))}
        </Slider>
      </div>
    </Section>
  )
}

const SliderItem = styled.div`
  width: 100vw !important;
  @media screen and (min-width: 768px) {
    width: 960px !important;
    margin: 0 2rem;
  }
`
