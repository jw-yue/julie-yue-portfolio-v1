import React from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarLinkR,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {/* <SidebarLink to="about" onClick={toggle} offset={-170}>
            {' '}
            About
          </SidebarLink> */}
          <SidebarLinkR to="/" onClick={toggle}>
            {' '}
            Home
          </SidebarLinkR>
          <SidebarLinkR to="/about" onClick={toggle}>
            {' '}
            About
          </SidebarLinkR>
          <SidebarLinkR to="/contact" onClick={toggle}>
            {' '}
            Contact
          </SidebarLinkR>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
