import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Spacer from './Spacer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ChatBox.css"
function ChatBox() {
    const [chats, setChats] = useState("");
    const [storeChats, setStoreChats] = useState(["Hi"]);

    const updateChats = (event) => {
        setChats(event.target.value);
        console.log(chats);
    }
    const updateStoreChats = () => {
        setStoreChats([...storeChats, chats]);
        console.log(chats);
    }

    return (
        <>
            <Container
                className='cfd'>
                <Row>
                    <div className='cfdg1'>
                        {storeChats.map((value) =>
                            <Container>
                                <Spacer></Spacer>
                                <Row>
                                    <Col></Col>
                                    <div className='divCss'><p className='textCssa'>{value}</p></div>
                                    <Col> <img className="imgSrcs" src="https://media-exp1.licdn.com/dms/image/C4E03AQFbpgI2cs8Cvw/profile-displayphoto-shrink_800_800/0/1622051492203?e=1667433600&v=beta&t=Ibo7eq8vA7w6CVTSSQRb-F4ahrKzouSaWI0L3wr3TIk"></img></Col>
                                </Row>
                                <Row> <Spacer></Spacer><Col> <img className='imgSrcs' src="https://media-exp1.licdn.com/dms/image/C4D03AQHAKJ9c482JIQ/profile-displayphoto-shrink_800_800/0/1650223838445?e=1667433600&v=beta&t=OomNdLE4XP8OdVaIDGKGG1wkKHYHq_GP-3H6l9OisoM"></img></Col><div className='divCss2'><p className='textCssa2'>Hi Kuldeep </p></div><Col></Col><Col></Col></Row></Container>)}

                    </div>
                    <Spacer></Spacer>
                </Row>

                <Row>
                    <Spacer></Spacer>
                    <div className='cfdg'>

                        <img style={{ marginTop: "20px", marginRight: "10px", marginleft: "30px", textAlign: "center", float: "left", height: "30px", width: "5%" }} src="https://w7.pngwing.com/pngs/272/156/png-transparent-attachment-illustration-computer-icons-email-attachment-scalable-graphics-free-email-attachment-miscellaneous-text-logo-thumbnail.png" />
                        <input type="text" onChange={updateChats} placeholder=" Enter Your Message here" className='inputcfdg'></input>
                        <button onClick={updateStoreChats} style={{ borderRadius: "10px", backgroundColor: "blue", border: "1px solid blue", marginTop: "10px", color: "white", textAlign: "center", float: "left", height: "50px", width: "20%" }}
                        ><span className='btnsmall'>Send</span></button>

                    </div>
                </Row>



            </Container>
        </>
    )
}

export default ChatBox