import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'gatsby';
import navLogo from '../../assets/images/User1.svg';
import di from '../../assets/images/Di.svg';
import './style.scss';

const TopNavbar = ({ data }) => {
  console.log(data);
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand
          style={{
            backgroundImage: `url(${data.frontmatter.top_logo})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            height: '30px',
          }}
          href="#"
        >
          {' '}
        </Navbar.Brand>
        {/* <img className="top-logo" src={data.frontmatter.top_logo} alt="fn" /> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ml-auto" navbarScroll>
            {data.frontmatter.add_links.links.map((link => {
              if(link.links) {
               return <NavDropdown title={link.link_name} id="basic-nav-dropdown">
                  {link.links.map(child => {
                    return   <NavDropdown.Item href={child.url}>{child.link_name}</NavDropdown.Item>
                  })}
                
              
              </NavDropdown>
              } else {
               return <Nav.Link href={link.url}>{link.link_name}</Nav.Link>
              }
            }))}
           
           
         
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TopNavbar;
