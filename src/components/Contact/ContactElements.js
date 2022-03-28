import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #e6c2ff;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg, 
        rgba(0, 0, 0, 0.2) 0%, 
        rgba(255,212,59,0.1) 100%
        
    );
    
  );
`

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`

export const Form = styled.form`
  background: #010101;
  max-width: 450px;
  max-height: 600px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 27px 34px;
  border-radius: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  border: 3px double white;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`

export const FormH1 = styled.h1`
    margin-bottom: 20px;
    margin-top: 15px;
    color: #f7717e;
    font-size: 22px;
    font-weight;
    text-align: center;
`

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`

export const FormInput = styled.input`
  padding: 10px 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
`
export const FormInputArea = styled.textarea`
  padding: 10px 10px;
  margin-bottom: 32px;
  border: none;
  border-radius: 10px;
  height: 150px;
  resize: none;
  margin-bottom: 20px;
`

export const FormButton = styled.input`
  white-space: nowrap;
  padding: 14px 0;
  color: #fff;
  font-size: 17px;
  outline: none;
  border: 2px solid white;
  cursor: pointer; 
  margin: 10px 120px 30px 120px;
  background-color: rgba(0,0,0,0);

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#f7717e' : '#01BF71')};
    opacity: ${({ background }) => (background ? 0.2 : 0.85)};
    color: ${({ primary }) => (primary ? '#FFE600' : 'white')};
`
export const Message = styled.div`
  color: #f7717e;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 100px;
`
