import React from 'react'
import { Link } from 'gatsby'
import fotLogo from '../../assets/images/studio_black_transparent.png'
import './style.scss'

const Footer = ({data}) => {
    return (
        <>
            <div className="main-footer">
                <div className="footer-pages">
                    {data.frontmatter.pages.page.map(a =>{
                        return(
                            <Link className="pages" to="/">{a.pagename}</Link>
                        )
                    })}
                    
                    {/* <Link className="pages" to="/">Privacy Policy</Link>
                    <Link className="pages" to="/">Help & Support</Link> */}
                </div>
                <div className="footer-logo">
                    <p className="fot-text">{data.frontmatter.powered_by}</p>
                    <img style={{maxWidth:'40px'}} className="logo" src={data.frontmatter.footer_logo} alt="ajf" />
                </div>
            </div>
        </>
    )
}

export default Footer
