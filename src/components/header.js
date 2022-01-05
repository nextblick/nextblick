import React from "react"
import { Link } from "gatsby"
/** @jsx jsx */
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"
import { Button, ButtonGroup } from "@chakra-ui/react"
import { EmailIcon } from "@chakra-ui/icons"

import colors from "../config/colors"

import Container from "./container"
import Logo from "../assets/images/nextblick.inline.svg"

export default ({ isMenuOpen, handleMenuButtonToggle }) => (
  <Header
    css={
      isMenuOpen &&
      css`
        color: #000;
        position: fixed;
      `
    }
  >
    <Container>
      <Flex>
        <div>
          <Link to="/">
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
          </Link>
        </div>
        <StyledButtonGroup spacing="12">
          {/* <StyledButton leftIcon={<EmailIcon />}>
            <Link to="/blog">Projektanfrage</Link>
          </StyledButton> */}
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
        </StyledButtonGroup>
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
  &:before,
  &:after {
    content: "";
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
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Label = styled.span`
  margin-right: 10px;
`

const StyledButtonGroup = styled(ButtonGroup)`
  align-items: center;
`

const StyledButton = styled(Button)`
  background-color: ${colors.primary};
  border-radius: 0;
  text-transform: uppercase;
  height: var(--chakra-sizes-9);
  font-size: 0.7rem;
  display: none;
  @media screen and (min-width: 500px) {
    display: inline-block;
  }
`
