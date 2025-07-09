import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/Thirumoorthy-Cv.pdf";
import Info from "./Info";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>
            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />
                <div className="about__data">
                    <Info />
                    <p className="about__description">
                        Full Stack Developer with experience in building web applications using React,
                        .Net Core, SQL Server, and Azure. I enjoy creating clean, efficient code and solving
                        real-world problems. I'm passionate about learning new technologies and building
                        full-stack solutions from UI to deployment.
                    </p>
                    <a href={CV} className="button button--flex" target="_blank" rel="noopener noreferrer">Download CV
                    </a>

                </div>
            </div>
        </section>
    )
}

export default About