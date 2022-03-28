import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background: ${({ scrollNav, darkNav }) =>
    scrollNav || darkNav ? '#000' : 'transparent'};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  text-shadow: #474747 3px 5px 2px;

  &:hover {
    transition: 0.2s ease-in-out;
    color: #ffe184;
  }
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -150px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  text-shadow: 1px 1px 2px pink;
  cursor: pointer;
  padding: 0 40px 0 40px;
  font-size: 18px;

  &.active {
    border-bottom: 3px solid #f7717e;
  }

  &:hover {
    border-bottom: 3px solid #f7717e;
    transition: 0.2s ease-in-out;
  }
`

export const LinksR = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  text-shadow: #474747 3px 5px 2px;
  cursor: pointer;
  padding: 0 40px 0 40px;
  font-size: 18px;

  &.active {
    border-bottom: 3px solid #f7717e;
  }

  &:hover {
    border-bottom: 3px solid #f7717e;
    transition: 0.2s ease-in-out;
    color: #ffe184;
  }
`

export const NavIcon = styled.img`
  padding-right: 3px;
  display: block;
  max-width: 40px;
  max-height: 40px;
  width: auto;
  height: auto;
  margin-left: auto;
  margin-right: auto;
`
