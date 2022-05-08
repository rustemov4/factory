import React from 'react'
import { NavLink } from 'react-bootstrap';
import { SUBSCRIPTION_ROUTE } from '../utils/consts';

const Footer = () => {
    return (
    <footer className="page-footer font-small blue pt-4 mt-3" style={{backgroundColor: '#00008B', color: "white"}}>
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">StudyOne</h5>
                    <p>Creating awesome products!</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0"/>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Additionally</h5>
                    <ul className="list-unstyled" >
                        <li><NavLink href={SUBSCRIPTION_ROUTE} style={{color:"white"}}>Subscription</NavLink></li>
                    </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Contact Us</h5>
                    <ul className="list-unstyled">
                        <li>+7 (702) 664-25-65</li>
                        <li>drakeaifoce@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center py-3">© 2022 Copyright:
            <p>Colibri team</p>
        </div>

    </footer>
    )
};

export default Footer;