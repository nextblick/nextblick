import React from "react"
import Img from "gatsby-image"
import { Box } from "@chakra-ui/core"
import styled from "@emotion/styled"

import Container from "./container"

export default ({ image, title }) => (
  <Hero>
    {image && <Image fluid={image} />}
    <Content>
      <Container>
        <Box maxW="60rem">
          <h1>{title}</h1>
          <p>
            With the power of modern web technologies we help you to maximize
            your business potential and reaching new customers.
          </p>
        </Box>
      </Container>
    </Content>
  </Hero>
)

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
  height: 800px;
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
`

const Image = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
