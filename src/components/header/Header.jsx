import React, { useState } from "react";
import "./header.css";

const Header = () => {

    /*--========================== Change Backround Header ==========================--*/

    window.addEventListener('scroll', function () {
        const header = document.querySelector(".header")
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })

    /*--========================== Toggle Menu ==========================--*/
    const [Toggle, showMenu] = useState(false)
    const [activeNav, setActiveNave] = useState("#home");

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Thirumoorthy</a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNave
                                ('#home')} className={activeNav === "#home" ?
                                    "nav__link active-link" : "nav__link"
                                }
                            >

                                <i className="uil uil-estate nav__icon"></i>
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNave
                                ('#about')} className={activeNav === "#about" ?
                                    "nav__link active-link" : "nav__link"
                                }
                            >
                                <i className="uil uil-user nav__icon"></i>
                                About Me
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#experience" onClick={() => setActiveNave
                                ('#experience')} className={activeNav === "#experience" ?
                                    "nav__link active-link" : "nav__link"
                                }
                            >
                                <i className="uil uil-briefcase-alt nav__icon">
                                </i>
                                Experience
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNave
                                ('#skills')} className={activeNav === "#skills" ?
                                    "nav__link active-link" : "nav__link"
                                }
                            >
                                <i className="uil uil-file-alt nav__icon"></i>
                                Skills
                            </a>
                        </li>
                        {/* <li className="nav__item">
                            <a href="#mywork" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i>
                                My Works
                            </a>
                        </li> */}
                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNave
                                ('#contact')} className={activeNav === "#contact" ?
                                    "nav__link active-link" : "nav__link"
                                }
                            >
                                <i className="uil uil-message nav__icon">
                                </i>
                                Contact Me
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>
                {/* <button className="theme__icon-button">
                    <i class='bx bx-moon theme__icon'></i>
                </button> */}
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i class="uil uil-apps"></i>
                </div>
            </nav>
        </header>

    )
}
export default Header