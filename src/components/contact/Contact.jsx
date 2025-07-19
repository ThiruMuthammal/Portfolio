import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        project: false,
    });

    const handleInputChange = (e) => {
        const { name } = e.target;
        setErrors((prev) => ({ ...prev, [name]: false }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const nameInput = e.target.name;
        const emailInput = e.target.email;
        const projectInput = e.target.project;

        let isValid = true;

        const validateField = (input) => {
            const { name, value } = input;
            if (!value.trim()) {
                setErrors((prev) => ({ ...prev, [name]: true }));
                isValid = false;
            }
        };

        validateField(nameInput);
        validateField(emailInput);
        validateField(projectInput);

        if (!isValid) return;

        emailjs.sendForm(
            'service_0mc6mwd',
            'template_2w91x1z',
            form.current,
            { publicKey: 'Gccd10h2nhhy3TNaM' }
        );

        e.target.reset();
    };

    return (
        <section className="contact section" id="contact">
            <h3 className="section__title">Get in touch</h3>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                {/* Contact Info */}
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        {/* <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">user@gmail.com</span>
                            <a href="mailto:thirumuthammal1297@gmail.com" className="contact__button">
                                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div> */}
                        <a href="mailto:thirumuthammal1297@gmail.com" target="_blank" className="contact__button">
                            <div className="contact__card">
                                <i className="bx bx-mail-send contact__card-icon"></i>
                                <h3 className="contact__card-title">Email</h3>
                                <span className="contact__card-data">user@gmail.com</span>
                                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </div>
                        </a>
                        <a
                            href="https://api.whatsapp.com/send?phone=7639833601&text=Hello, more information!"
                            className="contact__button"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="contact__card">
                                <i className="bx bxl-whatsapp contact__card-icon"></i>
                                <h3 className="contact__card-title">Whatsapp</h3>
                                <span className="contact__card-data">999-888-7777</span>

                                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>

                            </div>
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact__content">
                    <h3 className="contact__title">Let's Build Something Together</h3>
                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className={`contact__form-tag ${errors.name ? 'error' : ''}`}>Name</label>
                            <input
                                type="text"
                                name="name"
                                className={`contact__form-input ${errors.name ? 'error' : ''}`}
                                placeholder="Enter your name"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="contact__form-div">
                            <label className={`contact__form-tag ${errors.email ? 'error' : ''}`}>Email</label>
                            <input
                                type="email"
                                name="email"
                                className={`contact__form-input ${errors.email ? 'error' : ''}`}
                                placeholder="Enter your email"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className={`contact__form-tag ${errors.project ? 'error' : ''}`}>Project</label>
                            <textarea
                                name="project"
                                cols={30}
                                rows={10}
                                className={`contact__form-input ${errors.project ? 'error' : ''}`}
                                placeholder="Tell me about your project"
                                onChange={handleInputChange}
                            ></textarea>
                        </div>

                        <button className="button button--flex" type="submit">
                            Send Message
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="20"
                                width="24"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="home__send"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
