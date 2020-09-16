import React from "react"
import Slider from "react-slick"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ProjectCarousel = ({ items, ...props }) => {
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
          &.slick-next {
            right: 0;
          }
        }
      `}
      {...settings}
      {...props}
    >
      {items.map(({ featuredImage, title, id }) => (
        <ProjectItem key={id}>
          {featuredImage && (
            <Img fluid={featuredImage.node.remoteFile.childImageSharp.fluid} />
          )}
          <Overlay>
            <Content>
              <span>{title}</span>
              <h3
                css={css`
                  margin-bottom: 0;
                `}
              >
                Corporate Website for a cloud software company Lorem Ipsum dolor
              </h3>
            </Content>
          </Overlay>
        </ProjectItem>
      ))}
    </Slider>
  )
}

const Content = styled.div`
  max-width: 500px;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, #545454 100%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
`

const ProjectItem = styled.article`
  cursor: pointer;
  display: block;
  position: relative;
  width: 100vw !important;
  &:hover ${Overlay} {
    opacity: 1;
    visibility: visible;
  }
  @media screen and (min-width: 768px) {
    width: 650px !important;
  }
`

export default ProjectCarousel
