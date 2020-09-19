import React from "react"
import Img from "gatsby-image"
import { Box } from "@chakra-ui/core"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Container from "./container"
import colors from "../config/colors"

export default ({ excerpt, image, title }) => {
  if (image) {
    return (
      <Hero>
        <Image fluid={image} />
        <Content>
          <Container>
            <Box maxW="60rem">
              <h1>{title}</h1>
              <div dangerouslySetInnerHTML={{ __html: excerpt }} />
            </Box>
          </Container>
        </Content>
      </Hero>
    )
  }
  return (
    <HeroWithoutImage>
      <Container>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
      </Container>
    </HeroWithoutImage>
  )
}

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  z-index: 2;
  color: #fff;
`

const Hero = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #040c26;
    opacity: 0.45;
    z-index: 1;
  }
  @media screen and (min-width: 768px) {
    height: 800px;
  }
`

const HeroWithoutImage = styled.div`
  background: ${colors.primary};
  color: ${colors.white};
  padding-top: 8rem;
`

const Image = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
