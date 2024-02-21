import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: white;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: 4px double white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#e6c2ff' : '#01BF71')};
    opacity: ${({ background }) => (background ? 0.2 : 0.85)};
    color: ${({ primary }) => (primary ? '#f7717e' : 'white')};
  }
`
export const Button2 = styled.a`
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: white;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: 4px double white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#CD97A9' : '#01BF71')};
    opacity: ${({ background }) => (background ? 0.2 : 0.85)};
    color: ${({ primary }) => (primary ? '#FFE600' : 'white')};
  }
`
