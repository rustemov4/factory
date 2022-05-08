import React, {useState, useContext} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap';
import { Context } from '../index';


const Subscription = () => {
    const {user} = useContext(Context)


    return (
        <Container  className='d-flex justify-content-center align-items-center'
        style={{height: window.innerHeight - 54}}
        >
            <Card style={{ width: '50rem' }} className="align-items-center">
                {user.isSub ? "1" : "2"}

                <Card.Body>
                    <Card.Img src='https://thejewishnews.com/wp-content/uploads/2018/10/139b45ae.jpg' />
                    <Card.Title style={{fontSize: "50px"}} >StudyOne Subscription</Card.Title>
                    <Card.Subtitle  style={{fontSize: "50px"}}className="mb-2 text-muted">1 month</Card.Subtitle>
                    <Card.Text style={{fontSize: "25px"}}>
                        <b>20, 000 Tenge</b>
                    </Card.Text>
                    <Card.Text style={{fontSize: "25px"}}>
                        <ul>
                            <li>30 days of studying</li>
                            <li>10+ available tutors</li>
                            <li>Choose suitable time for yourself</li>
                        </ul>
                    </Card.Text>
                    <Button variant="primary" style={{fontSize: "25px"}}
                        onClick= {() => user.setIsSub(true) }
                    >
                        Buy
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    )
};

export default Subscription;