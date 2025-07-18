import React from "react";
import img2 from "/scroll.svg"

const ScrollDown = () => {
    return (
        <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
                <img src="/scroll.svg" className="wheel" />
                <sapn className="home__scroll-name">Scroll Down</sapn>
                <i class="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
        </div>
    )
}

export default ScrollDown