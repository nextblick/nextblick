import React from "react"
import { Grid, Flex } from "@chakra-ui/core"
import { css } from "@emotion/core"

const LogoGallery = ({ items }) => {
  console.log(items)
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
        <Flex align="center" justifyContent="center" key={index}>
          <img
            alt={item.altText}
            src={item.localFile.publicURL}
            css={css`
              max-height: 150px;
              max-width: 250px;
            `}
          />
        </Flex>
      ))}
    </Grid>
  )
}

export default LogoGallery
