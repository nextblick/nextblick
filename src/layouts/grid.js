import React from "react"
import { Box, Grid } from "@chakra-ui/core"

import Section from "../components/section"

export default ({ bgColor, columns, headline, items }) => {
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
    <Section bg={bgColor}>
      {headline && (
        <div data-sal="slide-up" data-sal-duration="1200">
          <Box maxW="60rem" dangerouslySetInnerHTML={{ __html: headline }} />
        </div>
      )}
      <Grid templateColumns={columnsArr} gap={[10, "", "", 20]}>
        {items.map((item, index) => (
          <Box
            dangerouslySetInnerHTML={{ __html: item.content }}
            data-sal="slide-up"
            data-sal-duration="1200"
            data-sal-delay={index * 100}
          />
        ))}
      </Grid>
    </Section>
  )
}
