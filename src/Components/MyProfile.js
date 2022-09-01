import React from 'react'
import Container from 'react-bootstrap/Container';
import Spacer from './Spacer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToggleButton } from 'react-bootstrap';
import ToggleSwitch from './ToggleSwitch';
import "./MyProfile.css"

function MyProfile() {
    return (
        <>
            <Container className='cons'>
                <Spacer></Spacer>
                <div className='text'>
                    <img className=" imgCss" src="https://media-exp1.licdn.com/dms/image/C4E03AQFbpgI2cs8Cvw/profile-displayphoto-shrink_800_800/0/1622051492203?e=1667433600&v=beta&t=Ibo7eq8vA7w6CVTSSQRb-F4ahrKzouSaWI0L3wr3TIk"></img></div>
                <div className='spanCss'>
                    <b>Kuldeep Soni</b>
                </div>
                <div style={{textAlign:"center", opacity:"0.6"}}><p className='spanCss'> Lead UI/UX Designer</p></div>
                <div className='text'>
                <ToggleSwitch label="Active" />
                </div>
            </Container>
        </>
    )
}

export default MyProfile