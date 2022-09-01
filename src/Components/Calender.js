import React from 'react'
import Container from 'react-bootstrap/Container';
import Spacer from './Spacer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Calender.css"
function Calender() {
    
  
        
    return (
        <>
            <Container
                className='cd'>
                <Row>
                    <Col >
                        <Spacer></Spacer>
                        <div style={{
                            backgroundColor: "rgba(65,105,225,0.35)",
                            // border: "2px solid black",
                            borderRadius: "10px",
                            height: "70px",
                            paddingTop:"10px"
                        }}>
                            <p style={{
                            color: "rgba(65,105,225)",
                        }}><span><b>13h</b><br></br></span>Time</p>
                        </div>
                    </Col>
                    <Col >
                        <Spacer></Spacer>
                        <div style={{
                            backgroundColor: "rgba(0,255,0,0.35)",
                            // border: "2px solid black",
                            borderRadius: "10px",
                            height: "70px",
                            paddingTop:"10px"
                        }}>
                            <p style={{
                            color: "green",
                        }}><span><b>188</b><br></br></span>Atendeed</p>
                        </div>
                    </Col>
                    
                </Row>
                <Row>
                    <Col >
                        <Spacer></Spacer>
                        <div style={{
                            backgroundColor: "rgba(139,0,139,0.35)",
                            // border: "2px solid black",
                            borderRadius: "10px",
                            height: "70px",
                            paddingTop:"10px"
                        }}>
                            <p style={{
                            color: "rgba(139,0,139)",
                        }}><span><b>119</b><br></br></span>Meetings</p>
                        </div>
                    </Col>
                    <Col >
                        <Spacer></Spacer>
                        <div style={{
                            backgroundColor: "rgba(210,105,30,0.35)",
                            // border: "2px solid black",
                            borderRadius: "10px",
                            height: "70px",
                            paddingTop:"10px"
                        }}>
                            <p style={{
                            color: "rgba(210,105,30)",
                        }}><span><b>41</b><br></br></span>Rejected</p>
                        </div>
                    </Col>
                    
                </Row>
                
                <Row >
                    <Spacer></Spacer>
                    <Col>
                        <p> <b>Current Week</b> </p>
                    </Col>
                    <Col>
                        <p className='asd'>Activity </p>
                    </Col>
                </Row>
                <Row>
                    <Spacer></Spacer>
                    <Col className='connn'></Col>
                    <Col className='connn2'></Col>
                    <Col className='connn'></Col>
                    <Col className='connn'></Col>
                    <Col className='connn'></Col>
                    <Col className='connn'></Col>
                    <Col className='connn'></Col>       
                </Row>
                <Spacer></Spacer>
                <Row>
                  <p className='week'>MON TUE WED THU FRI THU SAT SUN</p> 
                </Row>
              

            </Container>
        </>
    )
}

export default Calender