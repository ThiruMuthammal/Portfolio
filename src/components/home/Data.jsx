import React from "react";

const Data = () => {
    return (
        <div className="home__data">
            <h1 className="home__title">Thirumoorthy M
                <img src="src\assets\hand.svg" className="home__hand" />
            </h1>
            <h3 className="home__subtitle">Full Stack Developer</h3>
            <p className="home__description">I'm a passionate Full Stack Developer with experience in designing developing and deploying scalable web application using React, .Net Core, and SQL Server.
            </p>
            <a href="#contact" className="button button--flex">
                Say Hello

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="20" width="24" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="home__send">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
            </a>
        </div>
    )
}

export default Data