import React from 'react';
import Style from './Footer.module.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
            <>
        <footer className={`footer2 ${Style.footer2}`} id="footer2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 footerP text-center">
                        <Link to={"/signup"} className={`${Style.link}`} href="#">Register</Link>
                        <a className={`${Style.link}`} href="#">Forum</a>
                        <a className={`${Style.link}`} href="#">Affiliate</a>
                        <a  className={`${Style.link}`}href="#questions">FAQ</a>
                    </div>
                    <div className="footer-social space30 text-center mt-3 mb-5">
                        <a href="https://www.facebook.com/2002johncena/" target="_blank" className={`${Style.link2}`}>{<FaFacebook className={`${Style.facebook}`}/>}</a>
                        <a href="#" className={`${Style.link2}`}>{<FaTwitter target="_blank" className={`${Style.twitter}`} />}</a>
                        <a href="https://www.youtube.com/channel/UCRL2NgNk28JWIbRwggd_PBQ" target="_blank" className={`${Style.link2}`}>{<FaYoutube className={`${Style.youtube}`}/>}</a>
                        <a href="#"  target="_blank"className={`${Style.link2}`}>{<FaDribbble className={`${Style.dribble}`}/>}</a>
                        <a href="https://www.linkedin.com/in/john-ihab-58b74b204/" target="_blank" className={`${Style.link2}`}>{<FaLinkedin className={`${Style.linkedin}`}/>}</a>
                        <a href="https://www.instagram.com/official_johnihab/" target="_blank" className={`${Style.link2}`}>{<FaInstagram className={`${Style.instagram}`}/>}</a>
                    </div>
                </div>
            </div>
        </footer>
        <div class={`footer-copy ${Style.foot}`}>
            <div class="container">
                © 2023. JOHN. All rights reserved.
            </div>
        </div>
        </>
    );
};

export default Footer;