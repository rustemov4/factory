import React from 'react'
import { Container } from 'react-bootstrap';
import Books from '../assets/books.png'
import Image from "react-bootstrap/Image"
import { SUBSCRIPTION_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Subscription from './Subscription';

const Landing = () => {
    const navigate = useNavigate()

    return (
        <Container className='d-flex align-items-center justify-content-end'
            style={{height: window.innerHeight - 54}}
        >
            <div>
                <h1>
                    Одна подписка на всех репетиторов в твоём городе!
                </h1>

                <Button 
                    className="mt-5"
                    variant={"outline-primary"}
                    onClick={() => navigate(SUBSCRIPTION_ROUTE)}    
                >
                    Buy now
                </Button>
            </div>

            <div>
                <Image src={Books} style={{aspectRatio: 1/1}} width={800}/>
            </div>
        </Container>

    )
};

export default Landing;