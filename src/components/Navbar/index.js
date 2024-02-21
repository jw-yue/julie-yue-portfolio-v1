import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import Icon from '../../images/abstract.png'
import { useLocation } from 'react-router'

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  LinksR,
  NavIcon,
} from './NavbarElements'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = ({ toggle, darkNav, setDarkNav }) => {
  const location = useLocation()
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  // const defineDarkNav = () => {
  //   location.pathname === '/about' ? setDarkNav(true) : setDarkNav(false)
  // }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#F7739B' }}>
        <Nav scrollNav={scrollNav} darkNav={darkNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <NavIcon src={Icon} />
              JULZ
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                {/* <NavLinks
                  to="projects"
                  smooth={true}
                  duration={1000}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Projects
                </NavLinks> */}
              </NavItem>
              <NavItem>
                <LinksR to="/">Home</LinksR>
              </NavItem>
              <NavItem>
                <LinksR to="/about">About</LinksR>
              </NavItem>
              <NavItem>
                <LinksR to="/contact">Contact</LinksR>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
