import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box ">
                <i class='bx bx-award about__icon'></i>
                <h3 className="about__title">Experience</h3>
                <sapn className="about__subtitle">3.6 Years Working</sapn>
            </div>
            <div className="about__box">
                <i class='bx bxs-briefcase about__icon'></i>
                <h3 className="about__title">Completed</h3>
                <sapn className="about__subtitle">3 + Projects</sapn>
            </div>
            <div className="about__box">
                <i class='bx bx-support about__icon' ></i>
                <h3 className="about__title">Support</h3>
                <sapn className="about__subtitle">Online 24/7</sapn>
            </div>
        </div>
    )
}

export default Info