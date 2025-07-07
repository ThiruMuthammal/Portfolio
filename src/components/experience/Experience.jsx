import React, { useState } from "react";
import "./experience.css";

const Experience = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="experience section" id="experience">
            <h3 className="section__title">Experience</h3>
            <span className="section__subtitle">What I offer</span>

            <div className="experience__container container grid">
                <div className="experience__content">
                    <div>
                        <i class='uil uil-briefcase-alt experience__icon'></i>
                        <h3 className="experience__title">Flyers Soft</h3>
                    </div>

                    <span className="experience__button" onClick={() =>
                        toggleTab(1)
                    }>View More <i
                        className="uil uil-arrow-right experience__button-icon"></i> </span>

                    <div className={toggleState === 1 ? "experience__modal active-modal" : "experience__modal"}>
                        <div className="experience__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times experience__modal-close"></i>

                            <h3 className="experience__modal-title">Junior Software Developer</h3>
                            <p className="experience__modal-description">
                                Service with more than 1.10 years of experience.Providing quality work to clients and companies.
                            </p>

                            <ul className="experience__modal-experience grid">
                                <li className="experience__modal-experiences">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                        Legacy Application Upgraded (WCF to .NET Core 6.0) Honeywell.
                                    </p>
                                </li>
                                <li className="experience__modal-experiences">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                        Migrated the existing desktop application into Restful web-app (Client-Server) .
                                    </p>
                                </li>
                                <li className="experience__modal-experiences">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                        Developed REST APIs using .NET Core 3.1 with C# and microservices.
                                    </p>
                                </li>
                                <li className="experience__modal-experiences">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                        Integrated with various backend systems to ensure seamless data flow.
                                    </p>
                                </li>
                                <li className="experience__modal-experiences">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                        Wrote unit test cases using XUnit framework and FakeItEasy library.
                                    </p>
                                </li>
                                <li className="experience__modal-experiences">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">Used SonarQube to validate clean code.</p>
                                </li>
                                <li className="experience__modal-experiences">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                        Web page development.
                                    </p>
                                </li>
                                <li className="experience__modal-experiences">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                        I develop the user interface.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="experience__content">
                    <div>
                        <i class='uil uil-briefcase-alt experience__icon'></i>
                        <h3 className="experience__title">Firstsource</h3>
                    </div>
                    <span className="experience__button" onClick={() =>
                        toggleTab(2)}>View More <i className="uil uil-arrow-right experience__button-icon"></i> </span>
                    <div className={toggleState === 2 ? "experience__modal active-modal" : "experience__modal"}>
                        <div className="experience__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times experience__modal-close"></i>

                            <h3 className="experience__modal-title">Software Engineer</h3>
                            <p className="experience__modal-description">
                                Service with more than 1.4 years of experience.Providing quality work to clients and companies.
                            </p>

                            <ul className="experience__modal-experience grid">
                                <li className="experience__modal-experiences">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                        Designed and maintained databases using SQL Server to store and manage patient records, appointment details, and other critical healthcare data.
                                    </p>
                                </li>
                                <li className="experience__modal-experiences">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                        Developed and implemented WCF services to handle various healthcare operations, including patient registration, appointment scheduling, medical record management, and billing.
                                    </p>
                                </li>
                                <li className="experience__modal-experiences">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                        This is mainly the US healthcare domain maintaining the three different projects Patient Management, Advocate Portal, Register Portal.
                                    </p>
                                </li>
                                <li className="experience__modal-experiences">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                        These projects manage the patient records, appointment details, and other critical healthcare data.
                                    </p>
                                </li>
                                <li className="experience__modal-experiences">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">Used SonarQube to validate clean code.</p>
                                </li>
                                <li className="experience__modal-experiences">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                        Web page development.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="experience__content">
                    <div>
                        <i class='uil uil-briefcase-alt experience__icon'></i>
                        <h3 className="experience__title">Intake Freelance</h3>
                    </div>
                    <span className="experience__button" onClick={() =>
                        toggleTab(3)}>View More <i className="uil uil-arrow-right experience__button-icon"></i> </span>

                    <div className={toggleState === 3 ? "experience__modal active-modal" : "experience__modal"}>
                        <div className="experience__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times experience__modal-close"></i>

                            <h3 className="experience__modal-title">Developer</h3>
                            <p className="experience__modal-description">
                                Service with more than 3 months of experience freelanching. Providing quality work to clients.
                            </p>
                            <ul className="experience__modal-experience grid">
                                <li className="experience__modal-experiences">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                        Developed REST APIs using .NET Core 6.0 with C# and microservices.
                                    </p>
                                </li>
                                <li className="experience__modal-experiences">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                        Implemented continuous integration and deployment using Azure DevOps.
                                    </p>
                                </li>
                                <li className="experience__modal-experiences">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                        Successfully deployed applications on Azure App Service
                                    </p>
                                </li>
                                <li className="experience__modal-experiences">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                        Integrated with various backend systems to ensure seamless data flow.
                                    </p>
                                </li>
                                <li className="experience__modal-experiences">
                                    <i className="uil uil-check-circle experience__modal-icon"></i>
                                    <p className="experience__modal-info">
                                        Wrote unit test cases using XUnit framework and FakeItEasy library.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Experience