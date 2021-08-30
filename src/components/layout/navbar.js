import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "gatsby";
import navLogo from "../../assets/images/User1.svg";
import di from "../../assets/images/Di.svg";
import "./style.scss";

const TopNavbar = ({ data }) => {
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand
          style={{
            backgroundImage: `url(${data.frontmatter.top_logo})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            height: "30px",
          }}
          href="#"
        >
          {" "}
        </Navbar.Brand>
        {/* <img className="top-logo" src={data.frontmatter.top_logo} alt="fn" /> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ml-auto" navbarScroll>
            {data.frontmatter.add_links.links.map((x) => {
              return (
                <a className="nav-link" target="_blank" href={x.url}>
                  {x.link_name}
                </a>
              );
            })}
          </Nav>
        </Navbar.Collapse>
        <div className="login-Donat">
          <div className="nav-login">
            <img className="login-logo" src={navLogo} alt="fdsf" />
            <a className="login-text" href="x">
              Login
            </a>
          </div>

          <a className="nav-button" href="#">
            <img className="button-logo" src={di} alt="djd" />{" "}
            <span className="btn-text"> Donate</span>
          </a>
        </div>
      </Navbar>
    </>
  );
};

export default TopNavbar;
