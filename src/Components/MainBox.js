import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from './Logo';
import MyProfile from './MyProfile';
import ChatBox from './ChatBox';
import Calender from './Calender';
import Chats from './Chats';
import Spacer from './Spacer';
import Details from './Details';
import ContactUs from './ContactUs';
import "./MainBox.css"
function MainBox() {
    return (
        <Container className="cds">

            <div style={{
                paddingTop: "30px",
            }}> <Row>
                    <Col xs={3}>
                        <Logo></Logo>
                        <Spacer></Spacer>
                        <MyProfile></MyProfile>
                        <Spacer></Spacer>
                        <Chats></Chats>
                    </Col>
                    <Col>
                        <ChatBox></ChatBox>
                    </Col>
                    <Col xs={3}>
                        <Details></Details>
                        <Spacer></Spacer>
                        <Calender></Calender>
                        <Spacer></Spacer>
                        <ContactUs></ContactUs>
                    </Col>
                </Row>

            </div>

        </Container>
    )
}

export default MainBox