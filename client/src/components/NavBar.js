import React, {useContext, userNavigate} from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import { Context } from "..";
import Button from 'react-bootstrap/Button'
import { LANDING_ROUTE, COURSES_ROUTE, SUBSCRIPTION_ROUTE, PROFILE_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        navigate(LOGIN_ROUTE)
    }

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href={LANDING_ROUTE}>StudyOne</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink href={COURSES_ROUTE}>Courses</NavLink>
                    <NavLink href={SUBSCRIPTION_ROUTE}>Subscription</NavLink>
                </Nav>
                <Nav className="ml-auto">
                    <NavLink href={PROFILE_ROUTE}>Profile</NavLink>
                    {
                        user.isAuth ?
                        <Button 
                            variant={"outline-light"}
                            onClick={() => logOut()}
                        >
                            Logout
                        </Button>
                        :
                        <Button 
                            variant={"outline-light"}
                            onClick={() => navigate(LOGIN_ROUTE)}    
                        >
                            Login
                        </Button>
                    }
                </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;