import React from "react"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Box, Flex } from "@chakra-ui/core"

import Section from "../components/section"

export default ({ bgColor, text, image }) => {
  return (
    <Section
      bg={bgColor}
      align="right"
      css={css`
        overflow: hidden;
      `}
    >
      <Flex flexDirection={["column-reverse", "", "", "", "row"]}>
        <Box dangerouslySetInnerHTML={{ __html: text }} maxW="500px" />
        <Box w="100%">
          <Image fluid={image.localFile.childImageSharp.fluid} />
        </Box>
      </Flex>
    </Section>
  )
}

const Image = styled(Img)`
  width: 100%;
  margin-bottom: 3rem;
  @media screen and (min-width: 1280px) {
    margin-left: 8rem;
    margin-bottom: 0;
  }
`
