import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Marquee from "react-fast-marquee";

import img1 from "../../assets/Technology/Azure-Devops.png"
import img2 from "../../assets/Technology/Azure.png"
import img3 from "../../assets/Technology/BitBucket.png"
import img4 from "../../assets/Technology/Jira.png"
import img5 from "../../assets/Technology/RabbitMQ.png"
import img6 from "../../assets/Technology/Slack.png"
import img7 from "../../assets/Technology/Swagger.png"
import img8 from "../../assets/Technology/Figma.png"
import img9 from "../../assets/Technology/Firebase.png"
import img10 from "../../assets/Technology/Git.png"
import img11 from "../../assets/Technology/GitHub.png"
import img12 from "../../assets/Technology/HTML5.png"
import img13 from "../../assets/Technology/CSS3.png"
import img14 from "../../assets/Technology/JavaScript.png"
import img15 from "../../assets/Technology/React.png"
import img16 from "../../assets/Technology/Bootstrap.png"
import img17 from "../../assets/Technology/Jest.png"
import img18 from "../../assets/Technology/NPM.png"
import img19 from "../../assets/Technology/CSharp.png"
import img20 from "../../assets/Technology/NET.png"
import img21 from "../../assets/Technology/NET-core.png"
import img22 from "../../assets/Technology/SQL-Server.png"
import img23 from "../../assets/Technology/MongoDB.png"
import img24 from "../../assets/Technology/MySQL.png"
import img25 from "../../assets/Technology/PostgresSQL.png"
import img26 from "../../assets/Technology/jQuery.png"
import img27 from "../../assets/Technology/Docker.png"
import img28 from "../../assets/Technology/Kubernetes.png"
import img29 from "../../assets/Technology/Redis.png"
import img30 from "../../assets/Technology/Visual-Studio.png"
import img31 from "../../assets/Technology/VS-Code.png"
import img32 from "../../assets/Technology/Postman.png"
import img33 from "../../assets/Technology/SonarQube.png"

const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9,
    img10, img11, img12, img13, img14, img15, img16, img17,
    img18, img19, img20, img21, img22, img23, img24, img25,
    img26, img27, img28, img29, img30, img31, img32, img33
];

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            {/* <div className="skills__container container grid">
                <Frontend />
                <Backend />
            </div> */}

            {/* <Marquee speed={50} gradient={false} pauseOnHover={true}>
                {images.map((imgSrc, index) => (
                    <div
                        key={index}
                        className="marquee-image"
                        data-tooltip={imgSrc.split('/').pop()}
                    >
                        <img src={imgSrc} alt={`img-${index}`} />
                    </div>
                ))}
            </Marquee> */}

            <Marquee speed={50} gradient={false} pauseOnHover={true}>
                {images.map((imgSrc, index) => {
                    const fileName = imgSrc.split("/").pop().replace(".png", ""); // Just Tech1, Tech2...
                    return (
                        <div key={index} className="image-tooltip-container">
                            <img src={imgSrc} alt={fileName} className="tech-image" />
                            <span className="image-tooltip">{fileName}</span>
                        </div>
                    );
                })}
            </Marquee>
        </section>
    );
};

export default Skills;
