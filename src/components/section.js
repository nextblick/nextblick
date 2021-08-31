import React from "react"
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"

import Container from "./container"

export default ({ align, bg, children, headline, small, full, ...props }) => (
  <Section
    css={css`
      ${bg === "primary"
        ? "background-color: #040C26; color: #fff;"
        : "background-color: #F6F6F6; color: #000;"}
    `}
    {...props}
  >
    <Container align={align} small={small} full={full}>
      {headline && (
        <Headline
          dangerouslySetInnerHTML={{ __html: headline }}
          data-sal="slide-up"
          data-sal-duration="1200"
        />
      )}
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

const Headline = styled.div`
  margin-bottom: 2rem;
  h1,
  h2,
  h3 {
    max-width: 690px;
    margin-bottom: 1rem;
  }
  p {
    max-width: 960px;
  }
`
