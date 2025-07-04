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
                        Software Engineer with expertise in .NET and React.
                        Skilled in building responsive and maintainable applications.
                        Focused on delivering efficient, user-centered solutions.
                    </p>
                    <a href={CV} className="button button--flex">Download CV
                    </a>

                </div>
            </div>
        </section>
    )
}

export default About