import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'gatsby';
import navLogo from '../../assets/images/studio_new_logo_small.png'
import './style.scss'

const TopNavbar = () => {
    return (
        <>
            <Navbar expand="lg" className="navbar">
                <Navbar.Brand href="#"> <img className="top-logo" src={navLogo} alt="fn" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="ml-auto"
                    navbarScroll
                    style={{marginLeft: 'auto'}}
                    >
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/coming">Link</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default TopNavbar
