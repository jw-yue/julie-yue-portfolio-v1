import React, { useState, useEffect, useLocation } from 'react'
import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormInputArea,
  FormButton,
  Message,
} from './ContactElements'

const Contact = () => {
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(<Message>Thanks. I'll get back to you soon!</Message>)
    setIsSubmitted(true)
    console.log('hi')
  }
  return (
    <>
      <Container id="contact">
        <FormWrap>
          <FormContent onSubmit={handleSubmit}>
            {!isSubmitted ? (
              <Form>
                <FormH1>Enter your name, email, and message</FormH1>
                <FormLabel htmlFor="for">Name</FormLabel>
                <FormInput type="name" required />
                <FormLabel htmlFor="for">Email</FormLabel>
                <FormInput type="email" required />
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormInputArea type="message" required />
                <FormButton type="submit" primary="true" />
              </Form>
            ) : (
              message
            )}
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Contact
