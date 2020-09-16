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
        <Box maxW="40rem" dangerouslySetInnerHTML={{ __html: headline }} />
      )}
      <Grid templateColumns={columnsArr} gap={20}>
        {items.map((item) => (
          <Box dangerouslySetInnerHTML={{ __html: item.content }} />
        ))}
      </Grid>
    </Section>
  )
}
