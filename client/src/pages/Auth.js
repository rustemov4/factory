import React, {useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {observer} from "mobx-react-lite";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import MyGoogleLogin from '../components/MyGoogleLogin';
import {login, registration} from "../http/userAPI";


const Auth = observer(() => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container 
        className='d-flex justify-content-center align-items-center'
        style={{height: window.innerHeight - 54}}
        >

            <Card style={{width: 600}} className="p-5">
                <h2 className='m-auto'>{isLogin ? "Sign In" : "Sign Up"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter your email ...' 

                    />
                </Form>

                <Form className="d-flex flex-column">
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter your first name ...'  
                    />
                </Form>

                <Form className="d-flex flex-column">
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter your last name ...' />
                </Form>
                    
                <Form className="d-flex flex-column">
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter your password ...' 
                    />
                </Form>

                {isLogin ?
                    <Form className="d-flex flex-column">
                    <Form.Control
                        className='mt-3 pb-5 pr-5'
                        placeholder='Tell something about yourself ...' />
                    </Form>
                    :
                    <></>
                }

                <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                    {isLogin ? 
                        <div>
                            No account? <NavLink to={REGISTRATION_ROUTE}>Sign up</NavLink>
                        </div>
                        :
                        <div>
                            Already has an account? <NavLink to={LOGIN_ROUTE}>Sign in</NavLink>
                        </div>
                    }
                    <Button
                        className='mt-3'
                        variant={"outline-primary"}
                    >
                        {isLogin ? "Login" : "Register"}
                    </Button>               
                </Row>

                <Row className="d-flex justify-content-between pl-3 pr-3 mt-3 ">
                    <MyGoogleLogin/>
                </Row>
            </Card>
        </Container>
    )
});

export default Auth;