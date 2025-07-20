import React, { useRef, useEffect, useState } from 'react';
import "./skills.css";
// import Marquee from "react-fast-marquee";


// Image imports
import img1 from "../../assets/Technology/Devops.png";
import img2 from "../../assets/Technology/Azure.png";
import img3 from "../../assets/Technology/BitBucket.png";
import img4 from "../../assets/Technology/Jira.png";
import img5 from "../../assets/Technology/RabbitMQ.png";
import img6 from "../../assets/Technology/Slack.png";
import img7 from "../../assets/Technology/Swagger.png";
import img8 from "../../assets/Technology/Figma.png";
import img9 from "../../assets/Technology/Firebase.png";
import img10 from "../../assets/Technology/Git.png";
import img11 from "../../assets/Technology/GitHub.png";
import img12 from "../../assets/Technology/HTML5.png";
import img13 from "../../assets/Technology/CSS3.png";
import img14 from "../../assets/Technology/JavaScript.png";
import img15 from "../../assets/Technology/React.png";
import img16 from "../../assets/Technology/Bootstrap.png";
import img17 from "../../assets/Technology/Jest.png";
import img18 from "../../assets/Technology/NPM.png";
import img19 from "../../assets/Technology/CSharp.png";
import img20 from "../../assets/Technology/NET.png";
import img21 from "../../assets/Technology/NET-core.png";
import img22 from "../../assets/Technology/SQL.png";
import img23 from "../../assets/Technology/MongoDB.png";
import img24 from "../../assets/Technology/MySQL.png";
import img25 from "../../assets/Technology/PostgresSQL.png";
import img26 from "../../assets/Technology/jQuery.png";
import img27 from "../../assets/Technology/Docker.png";
import img28 from "../../assets/Technology/Kubernetes.png";
import img29 from "../../assets/Technology/Redis.png";
import img30 from "../../assets/Technology/VS.png";
import img31 from "../../assets/Technology/VS-Code.png";
import img32 from "../../assets/Technology/Postman.png";
import img33 from "../../assets/Technology/SonarQube.png";

const images = [
    { src: img1, name: "DevOps" },
    { src: img2, name: "Azure" },
    { src: img3, name: "BitBucket" },
    { src: img4, name: "Jira" },
    { src: img5, name: "RabbitMQ" },
    { src: img6, name: "Slack" },
    { src: img7, name: "Swagger" },
    { src: img8, name: "Figma" },
    { src: img9, name: "Firebase" },
    { src: img10, name: "Git" },
    { src: img11, name: "GitHub" },
    { src: img12, name: "HTML5" },
    { src: img13, name: "CSS3" },
    { src: img14, name: "JavaScript" },
    { src: img15, name: "React" },
    { src: img16, name: "Bootstrap" },
    { src: img17, name: "Jest" },
    { src: img18, name: "NPM" },
    { src: img19, name: "C#" },
    { src: img20, name: ".NET" },
    { src: img21, name: ".NET Core" },
    { src: img22, name: "SQL" },
    { src: img23, name: "MongoDB" },
    { src: img24, name: "MySQL" },
    { src: img25, name: "PostgreSQL" },
    { src: img26, name: "jQuery" },
    { src: img27, name: "Docker" },
    { src: img28, name: "Kubernetes" },
    { src: img29, name: "Redis" },
    { src: img30, name: "Visual Studio" },
    { src: img31, name: "VS Code" },
    { src: img32, name: "Postman" },
    { src: img33, name: "SonarQube" },
];


const Skills = () => {
    // const scrollRef = useRef(null);
    //     const [isPaused, setIsPaused] = useState(false);

    //     useEffect(() => {
    //         const container = scrollRef.current;
    //         if (!container) return;

    //         const speed = window.innerWidth <= 768 ? 3.5 : 3;
    //         let animationId;

    //         const autoScroll = () => {
    //             if (!isPaused) {
    //                 container.scrollLeft += speed;

    //                 // Looping logic: reset when halfway through
    //                 if (container.scrollLeft >= container.scrollWidth / 2) {
    //                     container.scrollLeft = 0;
    //                 }
    //             }
    //             animationId = requestAnimationFrame(autoScroll);
    //         };

    //         autoScroll();

    //         return () => cancelAnimationFrame(animationId);
    //     }, [isPaused]);


    //     // Manual drag scroll (mouse)
    //     useEffect(() => {
    //         const container = scrollRef.current;

    //         // Detect mobile
    //         const isMobile = window.innerWidth <= 768;

    //         if (!isMobile) return;

    //         let touchStartX = 0;
    //         let touchStartScroll = 0;

    //         const handleTouchStart = (e) => {
    //             touchStartX = e.touches[0].pageX;
    //             touchStartScroll = container.scrollLeft;
    //         };

    //         const handleTouchMove = (e) => {
    //             const touchX = e.touches[0].pageX;
    //             const deltaX = (touchX - touchStartX) * 8; // speed multiplier
    //             container.scrollLeft = touchStartScroll - deltaX;
    //         };

    //         const handleTouchEnd = () => {
    //             setIsPaused(false);
    //         };

    //         container.addEventListener('touchstart', handleTouchStart);
    //         container.addEventListener('touchmove', handleTouchMove);
    //         container.addEventListener("touchend", handleTouchEnd);

    //         return () => {
    //             container.removeEventListener('touchstart', handleTouchStart);
    //             container.removeEventListener('touchmove', handleTouchMove);
    //             container.removeEventListener("touchend", handleTouchEnd);
    //         };
    //     }, []);


    //     return (
    //         <section className="skills section" id="skills">
    //             <h2 className="section__title">Skills</h2>
    //             {/* <span className="section__subtitle">My technical level</span> */}

    //             <div className="skills__scroll-container" ref={scrollRef}>
    //                 {[...images, ...images].map((img, index) => (
    //                     <div
    //                         key={index}
    //                         className="image-tooltip-container"
    //                         onMouseEnter={() => setIsPaused(true)}
    //                         onMouseLeave={() => setIsPaused(false)}
    //                         onTouchStart={() => setIsPaused(true)}
    //                         onTouchEnd={() => setIsPaused(false)}
    //                     >
    //                         <img src={img.src} alt={img.name} className="tech-image" />
    //                         <span className="image-tooltip">{img.name}</span>
    //                     </div>
    //                 ))}
    //             </div>
    //         </section>
    //     );
    // };

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            {/* <span className="section__subtitle">My technical level</span> */}

            <div className="marquee-wrapper">
                <div className="marquee-track">
                    {[...images, ...images].map((img, index) => (
                        <div key={index} className="image-tooltip-container">
                            <img src={img.src} alt={img.name} className="tech-image" />
                            <span className="image-tooltip">{img.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
