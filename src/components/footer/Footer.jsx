import React from "react";
import "./footer.css"
const Footer = () => {

    return (

        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Thirumoorthy</h1>
                {/* <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#experience" className="footer__link">Experiance</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul> */}

                <div className="footer__social">
                    <a href="mailto:thirumuthammal1297@gmail.com" className="footer__social-link" target="_blank">
                        <i class="uil uil-envelope"></i>

                    </a>
                    <a href="https://www.linkedin.com/in/thirumuthammal/" className="footer__social-link" target="_blank">
                        <i class="uil uil-linkedin"></i>
                    </a>

                    <a href="https://github.com/ThiruMuthammal" className="footer__social-link" target="_blank">
                        <i class="uil uil-github"></i>
                    </a>

                    <a href="tel:+917639833601" className="footer__social-link">
                        <i class="uil uil-phone-alt"></i>
                    </a>
                </div>

                {/* <span className="footer__contact-copy"><i className="bx bxs-phone phone__button-icon"></i>7639833601
                </span> */}
                {/* <span className="footer__copy">&#169; Thirumoorthy. All rights reserved</span> */}
            </div>


        </footer>


    )
}

export default Footer