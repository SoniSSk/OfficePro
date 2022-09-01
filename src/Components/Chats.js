import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Spacer from './Spacer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Chats.css";
import { useSelector } from 'react-redux';

function Chats() {
    const [activeOpen, setActiveOpen] = useState(true);
    const [archiveOpen, setArchiveOpen] = useState(false);

    const activePerson = useSelector((state) => state.ActiveData);
    const archivePerson = useSelector((state) => state.ArchiveData);
    console.log(activePerson);
    console.log(archivePerson);
    
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
                <Col xs={8}> <p className='Archive'><b>Active Conversation</b> </p> </Col>
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
                <Col xs={8}> <p className='Archive'><b>Archived Conversation</b> </p> </Col>
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