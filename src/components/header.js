import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Container from "./container"
import Logo from "../assets/svg/mbmco-blue-2.inline.svg"

export default ({ isMenuOpen, handleMenuButtonToggle }) => (
  <Header
    css={
      isMenuOpen &&
      css`
        color: #000;
      `
    }
  >
    <Container>
      <Flex>
        <div>
          <Link to="/">
            <strong>NEXT</strong>BLICK
          </Link>
        </div>
        <div>
          <MenuButton
            css={
              isMenuOpen &&
              css`
                &:before,
                &:after {
                  background-color: #000;
                }
                &:before {
                  top: 6px;
                  transform: rotate(-45deg);
                }
                &:after {
                  top: 6px;
                  transform: rotate(45deg);
                }
              `
            }
            onClick={handleMenuButtonToggle}
          />
        </div>
      </Flex>
    </Container>
  </Header>
)

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Header = styled.header`
  width: 100%;
  position: absolute;
  z-index: 100;
  padding: 2rem 0;
  color: #fff;
`
const MenuButton = styled.div`
  width: 37px;
  height: 16px;
  position: relative;
  cursor: pointer;
  &:before, &:after {
    content '';
    width: 100%;
    height: 4px;
    background-color: #fff;
    position: absolute;
    left: 0;
    transition: all 0.3s ease-in-out;
  }
  &:before {
    top: 0;
  }
  &:after {
    top: 12px;
  }
`
