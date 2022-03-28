import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements'
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/" onClick={toggleHome}>
            JULZ
          </SocialLogo>
          <WebsiteRights>
            Copyright © {new Date().getFullYear()} Julie Yue. All Rights
            Reserved.
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="https://www.linkedin.com/in/julie-yue-570596164/"
              target="_blank"
              aria-label="Linkedin"
            >
              <FaLinkedin size={30} />
            </SocialIconLink>

            <SocialIconLink
              href="https://github.com/julzevias"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub size={30} />
            </SocialIconLink>

            <SocialIconLink
              href="https://www.facebook.com/julie.yue.7/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook size={30} />
            </SocialIconLink>

            <SocialIconLink
              href="https://www.instagram.com/julzevias/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram size={30} />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
