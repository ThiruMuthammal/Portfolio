import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_0mc6mwd',
                'template_2w91x1z',
                form.current, {
                publicKey: 'Gccd10h2nhhy3TNaM',
            })
        e.target.reset()
    };


    return (
        <section className="contact section" id="contact">
            <h3 className="section__title">Get in touch</h3>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">user@gmail.com</span>

                            <a href="https://mail.google.com/mail/u/0/#inbox" className="contact__button"
                                target="_blank" rel="noopener noreferrer">Write me  {" "}<i
                                    className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">999-888-7777</span>

                            <a href="https://api.whatsapp.com/send?phone=7639833601&text=Hello, more information!"
                                className="contact__button" target="_blank" rel="noopener noreferrer">Write me  {" "}<i
                                    className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>
                        {/* <div className="contact__card">
                            <i className="bx bx contact__card-icon"></i>

                            <h3 className="contact__card-title">Messenger</h3>
                            <span className="contact__card-data">user.fb123</span>

                            <a href="https://m.me/crypticalcoder" className="contact__button">Write me {" "} <i
                                className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div> */}
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>
                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="name"
                                className="contact__form-input"
                                placeholder="Enter your name" />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name="email"
                                className="contact__form-input"
                                placeholder="Enter your email" />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea name="project" cols={30} rows={10}
                                className="contact__form-input"
                                placeholder="write your project"></textarea>
                        </div>
                        <button className="button button--flex">
                            Send Message

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="20" width="24" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="home__send">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact