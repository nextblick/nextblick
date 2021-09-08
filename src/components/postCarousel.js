import React from "react"
import Slider from "react-slick"
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { PostItem } from "./postItem"

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
        <PostItem
          featuredImage={featuredImage}
          title={title}
          tags={tags}
          key={id}
        />
      ))}
    </Slider>
  )
}

export default PostCarousel
