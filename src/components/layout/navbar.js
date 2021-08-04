import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'gatsby';
import navLogo from '../../assets/images/studio_new_logo_small.png'
import './style.scss'

const TopNavbar = ({data}) => {
    return (
        <>
            <Navbar expand="lg" className="navbar">
                <Navbar.Brand href="#"> <img className="top-logo" src={data.frontmatter.top_logo} alt="fn" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="ml-auto"
                    navbarScroll
                    style={{marginLeft: 'auto'}}
                    >
                        {data.frontmatter.add_links.links.map(x => {
                            return(
                                <a className="nav-link" target="_blank" href={x.url}>{x.link_name}</a>
                            )
                        })}
                   
                    {/* <Link className="nav-link" to="/coming">Link</Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default TopNavbar
