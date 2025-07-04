import React from "react";

const Social = () => {
    return (
        <>
            <div className="home__social">
                <a href="https://www.instagram.com/" className="home__social-icon" target="_blank">
                    <i class="uil uil-instagram"></i>
                </a>

                <a href="https://www.linkedin.com/in/thirumuthammal/" className="home__social-icon" target="_blank">
                    {/* <i class="uil uil-dribbble"></i> */}
                    <i class="uil uil-linkedin"></i>
                </a>

                <a href="https://github.com/ThiruMuthammal" className="home__social-icon" target="_blank">
                    <i class="uil uil-github"></i>
                </a>
            </div>
        </>
    )
}

export default Social