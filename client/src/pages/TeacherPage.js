import React, {useState} from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from 'react-bootstrap/Image'
import Star from "../assets/star.png"
import { Tab, Tabs } from 'react-bootstrap'


const TeacherPage = () => {

    return (
        <Container className="mt-5" style={{height: window.innerHeight - 54}}>
            <Row >
                <Col>
                    <Image width={300} height={400} src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"}/>
                </Col>
                <Col className="d-flex flex-column align-items-start justify-content-between">
                    <h2 style={{fontSize: "50px"}}>
                        Marina Ivanova
                    </h2>
                    <h5>
                        Physics
                    </h5>
                    <div className="d-flex">
                        <h4 style={{fontSize: "40px"}}>4</h4>
                        <Image style={{aspectRatio: 1/1}} width={50} src={Star}/>
                    </div>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </Col>
            </Row>

            <Row>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 mt-5">
                    <Tab eventKey="1" title="May 11">
                        May 11
                    </Tab>
                    <Tab eventKey="2" title="May 12">
                        May 12
                    </Tab>
                    <Tab eventKey="3" title="May 13">
                        May 13
                    </Tab> 
                    <Tab eventKey="4" title="May 14">
                        May 14
                    </Tab> 
                    <Tab eventKey="5" title="May 15">
                        May 15
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    )
};

export default TeacherPage;