import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import  SubjectBar  from '../components/SubjectBar'
import TeacherList from '../components/TeacherList';

const Courses = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <SubjectBar />
                </Col>
                <Col md={9}>
                    <TeacherList/>
                </Col>
            </Row>
        </Container>
    )
};

export default Courses;