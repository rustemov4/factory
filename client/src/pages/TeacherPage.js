import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from 'react-bootstrap/Image'

const TeacherPage = () => {
    return (
        <Container className="mt-3">
            <Row >
                <Col>
                    <Image width={300} height={400} src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"}/>
                </Col>
                <Col className="d-flex flex-column align-items-center">
                    <h2 style={{fontSize: "50px"}}>
                        Marina Ivanova
                    </h2>
                    <div>
                        4.5 / 5.0
                    </div>
                    <div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </Col>
            </Row>

            <Row>

            </Row>

            <Row className='m-3'>
                <h5 style={{fontSize: "25px"}}>
                    Subjects
                </h5>
            </Row>
        </Container>
    )
};

export default TeacherPage;