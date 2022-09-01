import React from 'react'
import Container from 'react-bootstrap/Container';
import Spacer from './Spacer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Details.css";

function Details() {
    return (
        <>
            <Container className="con">
                <Spacer></Spacer>
                
                    <div className="text"><img className='imgCss' src="https://media-exp1.licdn.com/dms/image/C4E03AQFbpgI2cs8Cvw/profile-displayphoto-shrink_800_800/0/1622051492203?e=1667433600&v=beta&t=Ibo7eq8vA7w6CVTSSQRb-F4ahrKzouSaWI0L3wr3TIk"></img></div>
                
                <Row className='text'>
                    {/* <Col>
                        <img className='logos' src="https://www.shareicon.net/download/2016/07/09/118472_email_512x512.png"></img>
                    </Col> */}
                    <Col>
                        <span className='spanCss1'>kuldeep</span><span className='spanCss1'>soniapply</span><span className='spanCss1'>@gmail.com</span>
                    </Col>
                </Row>
                <Row className='text'>
                    {/* <Col>
                        <img className='logos' src="https://e7.pngegg.com/pngimages/85/114/png-clipart-avatar-user-profile-male-logo-profile-icon-hand-monochrome.png"></img>
                    </Col> */}
                    <Col>
                        <span className='spanCss2'>Kuldeep Soni</span>
                    </Col>
                </Row>
                <div className="text">
                    <button className="buttonCssWhite"><span className='spanCss2'>Archive </span> </button>
                </div>
            </Container>
        </>
    )
}

export default Details