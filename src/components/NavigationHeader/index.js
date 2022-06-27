import React, { useEffect } from 'react';
import ALink from '../Alink';
import { useLocation } from 'react-router-dom';
import {
    Container,
    Nav,
    Navbar,
} from 'react-bootstrap';
import './style.scss';
import { useState } from 'react';
const NavigationHeader = (props) => {
    const [showNavbar, setShowNavbar] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/") {
            setShowNavbar(false)
        } else {
            setShowNavbar(true)
        }
    }, [location.pathname])

    return (
        <>
            <div className="navbar-section">
                <Navbar bg="" expand="xl">
                    <Container fluid>
                        <ALink to="/">
                            <Navbar.Brand>
                                Bismillah Car AC
                            </Navbar.Brand>
                        </ALink>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className=" my-2 my-lg-0 ml-auto"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                {!showNavbar && (
                                    <>
                                        <ALink to="/homePage">
                                            <Nav.Link>Home</Nav.Link>
                                        </ALink>
                                        <Nav.Link>Services</Nav.Link>
                                        <Nav.Link>About</Nav.Link>
                                    </>
                                )}
                                <Nav.Link>
                                    <a href='#' onClick={() => props.setShowModal(true)}>
                                        <i className="fas fa-envelope"></i>
                                    </a>
                                </Nav.Link>
                                <Nav.Link>
                                    <a href="tel:923040421105">
                                        <i className="fas fa-phone-alt">
                                        </i>
                                    </a>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};
export default NavigationHeader;
