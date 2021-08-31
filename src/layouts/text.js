import React from "react"
import { Box } from "@chakra-ui/react"

import Section from "../components/section"

export default ({ bgColor, text }) => {
  return (
    <Section bg={bgColor}>
      <Box
        dangerouslySetInnerHTML={{ __html: text }}
        data-sal="slide-up"
        data-sal-duration="1200"
      />
    </Section>
  )
}
