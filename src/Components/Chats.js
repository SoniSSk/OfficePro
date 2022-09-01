import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Spacer from './Spacer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Chats.css"
function Chats() {
    const [activeOpen, setActiveOpen] = useState(true);
    const [archiveOpen, setArchiveOpen] = useState(false);
    
    let activePerson = [{"name":"Sejal Soni", "img":"https://media-exp1.licdn.com/dms/image/C4D03AQHAKJ9c482JIQ/profile-displayphoto-shrink_800_800/0/1650223838445?e=1667433600&v=beta&t=OomNdLE4XP8OdVaIDGKGG1wkKHYHq_GP-3H6l9OisoM"},
    {"name":"Abhisk s", "img":"https://media-exp1.licdn.com/dms/image/C5603AQFGWRbY2e9g-A/profile-displayphoto-shrink_800_800/0/1612368385290?e=1667433600&v=beta&t=LKikrrqn37RqR1koCHtBtljMzi3vGOYPPHZCb2E1-PY"},
    {"name":"Ankit Soni", "img":"https://media-exp1.licdn.com/dms/image/C4E03AQFbpgI2cs8Cvw/profile-displayphoto-shrink_800_800/0/1622051492203?e=1667433600&v=beta&t=Ibo7eq8vA7w6CVTSSQRb-F4ahrKzouSaWI0L3wr3TIk"},
    {"name":"Dev Soni", "img":"https://media-exp1.licdn.com/dms/image/C5603AQFyN9_MseshCg/profile-displayphoto-shrink_800_800/0/1622917651214?e=1667433600&v=beta&t=Jgn-2B3I5oDhvJL0mhuGITyW6Au8GrltXa5p05CbKLQ"},
    {"name":"Madan Soni", "img":"https://media-exp1.licdn.com/dms/image/C5103AQEh-jlqtZzc0g/profile-displayphoto-shrink_800_800/0/1554549326820?e=1667433600&v=beta&t=PKdFaw10WswEPZrp9nXAvNQyhuTe2sg0yulCf93eMjs"},
    {"name":"Swapni Soni", "img":"https://media-exp1.licdn.com/dms/image/C4D03AQELutHfOGU5Jg/profile-displayphoto-shrink_800_800/0/1636035320546?e=1667433600&v=beta&t=qlV6GW-e67EN0fQmuFyEwjlThqxKfoh0Eut7Nr7iA4A"}];
 
    let archivePerson = [{"name":"Abhisk s", "img":"https://media-exp1.licdn.com/dms/image/C5603AQFGWRbY2e9g-A/profile-displayphoto-shrink_800_800/0/1612368385290?e=1667433600&v=beta&t=LKikrrqn37RqR1koCHtBtljMzi3vGOYPPHZCb2E1-PY"},
    {"name":"Swapni Soni", "img":"https://media-exp1.licdn.com/dms/image/C4D03AQELutHfOGU5Jg/profile-displayphoto-shrink_800_800/0/1636035320546?e=1667433600&v=beta&t=qlV6GW-e67EN0fQmuFyEwjlThqxKfoh0Eut7Nr7iA4A"},
    {"name":"Ankit Soni", "img":"https://media-exp1.licdn.com/dms/image/C4E03AQFbpgI2cs8Cvw/profile-displayphoto-shrink_800_800/0/1622051492203?e=1667433600&v=beta&t=Ibo7eq8vA7w6CVTSSQRb-F4ahrKzouSaWI0L3wr3TIk"},
    {"name":"Dev Soni", "img":"https://media-exp1.licdn.com/dms/image/C5603AQFyN9_MseshCg/profile-displayphoto-shrink_800_800/0/1622917651214?e=1667433600&v=beta&t=Jgn-2B3I5oDhvJL0mhuGITyW6Au8GrltXa5p05CbKLQ"},
    {"name":"Madan Soni", "img":"https://media-exp1.licdn.com/dms/image/C5103AQEh-jlqtZzc0g/profile-displayphoto-shrink_800_800/0/1554549326820?e=1667433600&v=beta&t=PKdFaw10WswEPZrp9nXAvNQyhuTe2sg0yulCf93eMjs"}];
 
    // const [activeOpenToggle, setActiveOpenToggle] = useState(true);
    const updateActiveOpen = () =>{
        if (activeOpen == true){
            setActiveOpen(false);
            setArchiveOpen(true);
        }
        else{
            setActiveOpen(true);
            setArchiveOpen(false);
        }
    }
    const updateArchiveOpen = () =>{
        if (archiveOpen == true){
            setArchiveOpen(false);
            setActiveOpen(true);
        }
        else{
            setArchiveOpen(true);
            setActiveOpen(false);
        }
    }

    return (
        <>
            <Container
               className="cdss">
                
                <Row>
                <Spacer></Spacer>
                <Col xs={8}> <p style={{
                        float:"left",  
                        fontSize:"17px"
                    }}><b>Active Conversation</b> </p> </Col>
                <Col xs={2}> <span style={{
                        borderRadius:"20px",
                        height:"20px",
                        width:"30",
                        backgroundColor:"grey",
                        fontSize:"17px"
                    }}>46</span></Col>
                <Col xs={1}> <button onClick={updateActiveOpen} style={{border:"0px", backgroundColor:"white"}}>
                        {activeOpen ? "^" : "v"}
                        </button></Col>
                </Row>
                {activeOpen ? activePerson.map((value, index)=>  <Row style={{ borderRadius:"20px",backgroundColor:index == 0 ? "rgba(173,216,230,0.35)": "white"}}> <Col xs={3}><img className="imageNo" src={`${value.img}`}/> </Col><Col><span style={{float:"left", marginTop:"20px", textAlign:"center"}}>{value.name}</span></Col><Spacer></Spacer> </Row> ) : <Row></Row>}
                <Row>
                    
                <Spacer></Spacer>
                <Col xs={8}> <p style={{
                        float:"left",  
                        fontSize:"15px"
                    }}><b>Archived Conversation</b> </p> </Col>
                <Col xs={2}> <span style={{
                        borderRadius:"20px",
                        height:"20px",
                        width:"30",
                        backgroundColor:"grey",
                        fontSize:"17px"
                    }}>39</span></Col>
                <Col xs={1}> <button onClick={updateArchiveOpen} style={{border:"0px", backgroundColor:"white"}}>
                        {archiveOpen ? "^" : "v"}
                        </button></Col>
                </Row>
                {archiveOpen ? archivePerson.map((value)=>  <Row> <Col xs={3}><img className='imageNo' src={`${value.img}`}/> </Col><Col><span style={{float:"left", textAlign:"center", marginTop:"10px"}}>{value.name}</span></Col><Spacer></Spacer> </Row> ) : <Row></Row>}
                
                
               
            </Container>
        </>
    )
}

export default Chats