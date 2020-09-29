import React from "react"
import { Grid, Flex } from "@chakra-ui/core"
import { css } from "@emotion/core"

const LogoGallery = ({ items, sal, salDuration, salDelay }) => {
  return (
    <Grid
      templateColumns={[
        "repeat(2, 1fr)",
        "",
        "repeat(3, 1fr)",
        "",
        "repeat(5, 1fr)",
      ]}
      gap={16}
    >
      {items.map((item, index) => (
        <Flex
          align="center"
          justifyContent="center"
          key={index}
          data-sal={sal}
          data-sal-duration={salDuration}
          data-sal-delay={index * salDelay}
        >
          <img
            alt={item.altText}
            src={item.localFile.publicURL}
            css={css`
              width: 100%;
              max-height: 100px;
              max-width: 200px;
            `}
          />
        </Flex>
      ))}
    </Grid>
  )
}

export default LogoGallery
