import React from 'react'
import Container from 'react-bootstrap/Container';
import Spacer from './Spacer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'bootstrap';
import "./ContactUs.css";

function ContactUs() {
  
    return (
        <>
            <Container className="containerCss">
                <Spacer></Spacer>
                {/* <Row><div className='onbord'></div></Row> */}
                <Row><div className="onbord"><p>Onboard Clients</p></div></Row>
                <Row><div className="opacityLow"><p>Share the link with prospects and discuss all stuff</p></div></Row>
                <Row><div >
                    <button className='buttonCss'> <span className='spanCss'>Copy Link</span></button>
                </div>
                </Row>
            </Container>
        </>
    )
}

export default ContactUs