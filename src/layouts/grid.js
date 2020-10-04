import React from "react"
import { Box, Grid } from "@chakra-ui/core"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Section from "../components/section"

export default ({ bgColor, columns, headline, items, separator }) => {
  let columnsArr = ["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]

  if (columns === "3") {
    columnsArr = [
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
      "repeat(3, 1fr)",
    ]
  }
  if (columns === "4") {
    columnsArr = [
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
      "repeat(4, 1fr)",
    ]
  }

  return (
    <Section bg={bgColor} headline={headline}>
      <Grid templateColumns={columnsArr} gap={[10, "", "", 16]}>
        {items.map((item, index) => (
          <GridItem
            dangerouslySetInnerHTML={{ __html: item.content }}
            data-sal="slide-up"
            data-sal-duration="1200"
            data-sal-delay={index * 100}
            css={
              separator &&
              css`
                border-bottom: 2px solid rgba(255, 255, 255, 0.1);
                padding-bottom: 5rem;
              `
            }
          />
        ))}
      </Grid>
    </Section>
  )
}

const GridItem = styled(Box)`
  p:last-child {
    margin-bottom: 0;
  }
`
