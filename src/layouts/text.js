import React from "react"
import { Box } from "@chakra-ui/core"

import Section from "../components/section"

export default ({ bgColor, text }) => {
  return (
    <Section bg={bgColor}>
      <Box dangerouslySetInnerHTML={{ __html: text }} />
    </Section>
  )
}
