import React from "react"
import Img from "gatsby-image"
import { Box, Grid } from "@chakra-ui/core"
import styled from "@emotion/styled"

import Section from "../components/section"

export default ({ bgColor, headline, items }) => {
  return (
    <Section bg={bgColor}>
      {headline && (
        <Box maxW="40rem" dangerouslySetInnerHTML={{ __html: headline }} />
      )}
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={10}
      >
        {items.map(({ image, description }) => (
          <Box>
            <Image fluid={image.localFile.childImageSharp.fluid} />
            <Description dangerouslySetInnerHTML={{ __html: description }} />
          </Box>
        ))}
      </Grid>
    </Section>
  )
}

const Image = styled(Img)`
  margin-bottom: 1rem;
`
const Description = styled.div`
  h3 {
    margin-bottom: 0;
  }
`
