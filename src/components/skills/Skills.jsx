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
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const scrollInterval = useRef(null);

    // Auto-scroll effect
    useEffect(() => {
        const container = scrollRef.current;

        const startAutoScroll = () => {
            scrollInterval.current = setInterval(() => {
                if (!isDragging && !isPaused) {
                    container.scrollLeft += 2;
                    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
                        container.scrollLeft = 0;
                    }
                }
            }, 16); // Smooth scroll speed
        };

        startAutoScroll();

        return () => clearInterval(scrollInterval.current);
    }, [isDragging, isPaused]);

    // Manual drag scroll (mouse)
    useEffect(() => {
        // if ('ontouchstart' in window) return;

        const container = scrollRef.current;
        let isDown = false;
        let startX;
        let scrollLeft;

        const handleMouseDown = (e) => {
            isDown = true;
            setIsDragging(true);
            container.classList.add('dragging');
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        };

        const stopDragging = () => {
            isDown = false;
            setIsDragging(false);
            container.classList.remove('dragging');
        };

        const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 6;
            container.scrollLeft = scrollLeft - walk;
        };

        // Touch support
        const handleTouchStart = (e) => {
            startX = e.touches[0].pageX;
            scrollLeft = container.scrollLeft;
        };

        const handleTouchMove = (e) => {
            const x = e.touches[0].pageX;
            const walk = x - startX;
            container.scrollLeft = scrollLeft - walk;
        };

        container.addEventListener('mousedown', handleMouseDown);
        container.addEventListener('mouseup', stopDragging);
        container.addEventListener('mouseleave', stopDragging);
        container.addEventListener('mousemove', handleMouseMove);

        container.addEventListener('touchstart', handleTouchStart);
        container.addEventListener('touchmove', handleTouchMove);

        return () => {
            container.removeEventListener('mousedown', handleMouseDown);
            container.removeEventListener('mouseup', stopDragging);
            container.removeEventListener('mouseleave', stopDragging);
            container.removeEventListener('mousemove', handleMouseMove);

            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            {/* <span className="section__subtitle">My technical level</span> */}

            <div className="skills__scroll-container" ref={scrollRef}>
                {images.map((img, index) => (
                    <div key={index} className="image-tooltip-container"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                    >
                        <img src={img.src} alt={img.name} className="tech-image" />
                        <span className="image-tooltip">{img.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

// const Skills = () => {
//     return (
//         <section className="skills section" id="skills">
//             <h2 className="section__title">Skills</h2>
//             <span className="section__subtitle">My technical level</span>

//             <Marquee speed={50} gradient={false} pauseOnHover={true}>
//                 {images.map((img, index) => (
//                     <div key={index} className="image-tooltip-container">
//                         <img src={img.src} alt={img.name} className="tech-image" />
//                         <span className="image-tooltip">{img.name}</span>
//                     </div>
//                 ))}
//             </Marquee>
//         </section>
//     );
// };

// export default Skills;
