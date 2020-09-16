import React, { useState } from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

import Header from "./header"
import Footer from "./footer"
import Menu from "./menu"

import "../assets/style.css"

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuButtonToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Wrapper
      css={
        isMenuOpen &&
        css`
          &:before {
            opacity: 0.5;
            visibility: visible;
          }
        `
      }
    >
      <Global
        styles={css`
          body {
            font-size: 20px;
            font-family: "Nunito Sans", sans-serif;
          }
          h1 {
            font-size: 3.25rem;
            font-weight: bold;
            line-height: 1.3;
            margin-bottom: 2rem;
            @media screen and (min-width: 768px) {
              font-size: 3.75rem;
              margin-bottom: 0;
            }
          }
          h2 {
            font-size: 2rem;
            margin-bottom: 3rem;
            @media screen and (min-width: 768px) {
              font-size: 3rem;
            }
          }
          h3 {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }
          p {
            margin-bottom: 1rem;
          }
          address {
            font-style: normal;
            margin-bottom: 2rem;
          }
          hr {
            opacity: 0.2;
          }
          .intro {
            max-width: 960px;
            margin-bottom: 2rem;
          }
        `}
      />
      <Header
        isMenuOpen={isMenuOpen}
        handleMenuButtonToggle={handleMenuButtonToggle}
      />
      <Menu isMenuOpen={isMenuOpen} />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #040c26;
    opacity: 0;
    visibility: hidden;
    z-index: 9;
    transition: all 0.3s ease-in-out;
  }
`

const Main = styled.main``

export default Layout
