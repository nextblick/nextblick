import React from "react"
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"

export default ({ align, children, small, full }) => {
  return (
    <Container
      css={css`
        ${align === "right"
          ? "@media screen and (min-width: 768px) { padding-right: 0; }"
          : null}
        ${align === "left"
          ? "@media screen and (min-width: 768px) { padding-left: 0; }"
          : null}
        ${full ? "padding-left: 0; padding-right: 0; " : null}
        ${small === "full"
          ? "@media screen and (max-width:s 767px) { padding: 0; }"
          : null}
      `}
    >
      {children}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  @media screen and (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  @media screen and (min-width: 1920px) {
    max-width: 1920px;
    margin: 0 auto;
  }
`
