import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Container from "./container"

export default ({ align, bg, children, small, full, ...props }) => (
  <Section
    css={css`
      ${bg === "primary"
        ? "background-color: #040C26; color: #fff;"
        : "background-color: #F6F6F6; color: #000;"}
    `}
    {...props}
  >
    <Container align={align} small={small} full={full}>
      {children}
    </Container>
  </Section>
)

const Section = styled.section`
  padding: 3rem 0;
  @media screen and (min-width: 768px) {
    padding: 6rem 0;
  }
`
