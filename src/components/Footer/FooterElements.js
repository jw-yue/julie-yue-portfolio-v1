import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
  background-color: black;
`

export const SocialMedia = styled.section`
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  align-items: center;
  font-weight: bold;
  padding-top: 25px;
  padding-bottom: 12px;

  &:hover {
    color: #ffe184;
    transition: 0.2s ease-in-out;
  }
`

export const WebsiteRights = styled.div`
  color: #fff;
  padding: 10px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  padding-bottom: 20px;
  padding-top: 15px;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`
