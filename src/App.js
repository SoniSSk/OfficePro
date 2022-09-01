import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainBox from './Components/MainBox';

function App() {
  return (
    <div style={{
      backgroundColor:"rgba(173,216,230, 0.25)",
      width: "100%",
      height: "2000px"
    }} >
      <div style={{
        paddingTop: "70px",
      }}>
        <MainBox/>
      </div>

    </div>


  )
}

export default App
{/* <Container style={{
    backgroundColor:"red",
    width:"200px",
    height:"200px",
    borderRadius: "10px",
  }}>
  </Container> */}