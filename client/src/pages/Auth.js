import React, {useState, useContext} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {observer} from "mobx-react-lite";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, COURSES_ROUTE} from "../utils/consts";
import MyGoogleLogin from '../components/MyGoogleLogin';
import { Context } from '../index';
import { Tab, Tabs } from 'react-bootstrap'
import { login } from '../http/userAPI';
import { registration } from '../http/userAPI';


const Auth = observer(() => {
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user} = useContext(Context)

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(COURSES_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <Container 
        className='d-flex justify-content-center align-items-center'
        style={{height: window.innerHeight - 54}}
        >

            <Card style={{width: 600}} className="p-5">
                <h2 className='m-auto'>{isLogin ? "Sign In" : "Sign Up"}</h2>

                {isLogin ?
                    <>
                     <Form className="d-flex flex-column">
                        <Form.Control
                            className='mt-3'
                            placeholder='Enter your email ...' 
                            
                        />
                        </Form>
                        <Form className="d-flex flex-column">
                            <Form.Control
                                className='mt-3'
                                placeholder='Enter your password ...' 
                            />
                        </Form>
                    </>
                    :
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 mt-3 justify-content-center">
                    <Tab eventKey="Learner" title="Learner">
                        <Form className="d-flex flex-column">
                            <Form.Control
                                className='mt-3'
                                placeholder='Enter your email ...' 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </Form>

                        <Form className="d-flex flex-column">
                            <Form.Control
                                className='mt-3'
                                placeholder='Enter your first name ...'  
                                required
                            />
                        </Form>

                        <Form className="d-flex flex-column">
                            <Form.Control
                                className='mt-3'
                                placeholder='Enter your last name ...' 
                                required
                                />
                        </Form>
                        
                    
                        <Form className="d-flex flex-column">
                            <Form.Control
                                className='mt-3'
                                placeholder='Enter your password ...'
                                type='password' 
                                value={password}
                                required
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form>
                        <Row className="d-flex justify-content-between pl-3 pr-3 mt-3 ">
                            <MyGoogleLogin/>
                        </Row>
                    </Tab>
                    <Tab eventKey="Teacher" title="Teacher">
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
                        <Form className="d-flex flex-column">
                            <Form.Control
                                className='mt-3 pb-5 pr-5'
                                placeholder='Tell something about yourself ...' />
                        </Form>
                    </Tab>
                </Tabs>
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
                        onClick={click}
                    >
                        {isLogin ? "Login" : "Register"}
                    </Button>               
                </Row>
            </Card>
        </Container>
    )
});

export default Auth;