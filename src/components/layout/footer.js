import React from 'react'
import { Link } from 'gatsby'
import fotLogo from '../../assets/images/studio_black_transparent.png'
import './style.scss'

const Footer = () => {
    return (
        <>
            <div className="main-footer">
                <div className="footer-pages">
                    <Link className="pages" to="/">Terms of Service</Link>
                    <Link className="pages" to="/">Privacy Policy</Link>
                    <Link className="pages" to="/">Help & Support</Link>
                </div>
                <div className="footer-logo">
                    <p className="fot-text">Powered by</p>
                    <img className="logo" src={fotLogo} alt="ajf" />
                </div>
            </div>
        </>
    )
}

export default Footer
