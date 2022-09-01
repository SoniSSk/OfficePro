import React from 'react'
import Container from 'react-bootstrap/Container';
import Spacer from './Spacer';

function Logo() {
  return (
      <>
    <Container style={{
        width: "100%",
        height: "40px",
    }}>
        <img style={{
            float:"left",
            height:"50px",
            width:"70%"
        }} src="https://www.quickchat.ai/img/logo_color.png"/> 
        </Container>
        </>
  )
}

export default Logo