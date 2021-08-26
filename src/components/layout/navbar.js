import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link } from 'gatsby';
// import { BsPeopleCircle } from 'react-icons';
import { PersonCircle ,Heart} from 'react-bootstrap-icons';
import navLogo from '../../assets/images/studio_new_logo_small.png'
import './style.scss'

const TopNavbar = ({data}) => {
    return (
        <>
            <Navbar expand="lg" className="navbar">
                <Navbar.Brand 
                  style ={{
                      backgroundImage: `url(${data.frontmatter.top_logo})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      height: '30px',
                  }}
                href="#"> </Navbar.Brand>
                {/* <img className="top-logo" src={data.frontmatter.top_logo} alt="fn" /> */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="ml-auto"
                    navbarScroll
                    
                    >
                        {data.frontmatter.add_links.links.map(x => {
                            return(
                                <a className="nav-link" target="_blank" href={x.url}>{x.link_name}</a>
                            )
                        })}
                   <div className="login-btn">
                       <div className="login">
                       <span><PersonCircle color="#285AA5" size="27px"/></span>
                       <a href="#">Login</a>
                       </div>
                       <Button  size="30" active>
                           <span  className="donate-heart">
                           <Heart color="#F8AF2C"/>
                           </span>
                         
                        <span className="donate-btn">Donate</span>
                         </Button>
                   </div>
                    {/* <Link className="nav-link" to="/coming">Link</Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default TopNavbar
