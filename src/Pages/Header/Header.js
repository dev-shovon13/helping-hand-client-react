import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logo.png'
import userAvatar from '../../images/avatar.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserLock } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" className="py-3">
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/home">
                            <img
                                src={logo}
                                width="120"
                                height="40"
                                className="d-inline-block align-top"
                                alt="logo"
                            />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} activeStyle={{ color: "#F91944", fontWeight: "bold" }} to="/home" className="fw-bold me-3">Home</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={{ color: "#F91944", fontWeight: "bold" }} to="/donations" className="fw-bold me-3">Donations</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={{ color: "#F91944", fontWeight: "bold" }} to="/events" className="fw-bold me-3">Events</Nav.Link>
                            <Nav.Link as={NavLink} activeStyle={{ color: "#F91944", fontWeight: "bold" }} to="/blog" className="fw-bold me-3">Blog</Nav.Link>

                            {
                                user.displayName || user.email ?
                                    <div className="d-flex align-items-center justify-content-center">
                                        {user.photoURL ?
                                            <img src={user.photoURL} alt="" style={{ height: '35px', borderRadius: '50%' }} className="me-2" />
                                            :
                                            <img src={userAvatar} alt="" style={{ height: '35px', borderRadius: '50%' }} className="me-2" />}
                                        {user.displayName ?
                                            <span className="fw-bold text-dark">{user.displayName}</span>
                                            :
                                            <span className="fw-bold text-dark">{user.email.substring(0, user.email.lastIndexOf("@"))}</span>}
                                        <Button className="btn btn-danger ms-2 btn-sm" onClick={logOut}>Logout</Button>
                                    </div>
                                    :
                                    <div className="d-flex justify-content-center">
                                        <NavLink to="/login">
                                            <Button variant="primary btn-sm" className="me-3 mb-2 mb-lg-0"><FontAwesomeIcon icon={faSignInAlt} className="me-2" />Login</Button>
                                        </NavLink>
                                        <NavLink to="/adminLogin">
                                            <Button variant="outline-primary btn-sm"><FontAwesomeIcon icon={faUserLock} className="me-2" />Admin</Button>
                                        </NavLink>
                                    </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;