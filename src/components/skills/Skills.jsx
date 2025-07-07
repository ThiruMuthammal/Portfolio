import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Marquee from "react-fast-marquee";
import img1 from "../../assets/Technology/Tech1.png"
import img2 from "../../assets/Technology/Tech2.png"
import img3 from "../../assets/Technology/Tech3.png"
import img4 from "../../assets/Technology/Tech4.png"
import img5 from "../../assets/Technology/Tech5.png"
import img6 from "../../assets/Technology/Tech6.png"
import img7 from "../../assets/Technology/Tech7.png"
import img8 from "../../assets/Technology/Tech8.png"
import img9 from "../../assets/Technology/Tech9.png"
import img10 from "../../assets/Technology/Tech10.png"
import img11 from "../../assets/Technology/Tech11.png"
import img12 from "../../assets/Technology/Tech12.png"
import img13 from "../../assets/Technology/Tech13.png"
import img14 from "../../assets/Technology/Tech14.png"
import img15 from "../../assets/Technology/Tech15.png"
import img16 from "../../assets/Technology/Tech16.png"
import img17 from "../../assets/Technology/Tech17.png"
import img18 from "../../assets/Technology/Tech18.png"
import img19 from "../../assets/Technology/Tech19.png"
import img20 from "../../assets/Technology/Tech20.png"
import img21 from "../../assets/Technology/Tech21.png"
import img22 from "../../assets/Technology/Tech22.png"
import img23 from "../../assets/Technology/Tech23.png"
import img24 from "../../assets/Technology/Tech24.png"
import img25 from "../../assets/Technology/Tech25.png"
import img26 from "../../assets/Technology/Tech26.png"
import img27 from "../../assets/Technology/Tech27.png"
import img28 from "../../assets/Technology/Tech28.png"
import img29 from "../../assets/Technology/Tech29.png"
import img30 from "../../assets/Technology/Tech30.png"
import img31 from "../../assets/Technology/Tech31.png"

const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9,
    img10, img11, img12, img13, img14, img15, img16, img17,
    img18, img19, img20, img21, img22, img23, img24, img25,
    img26, img27, img28, img29, img30, img31
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
            {/* <div className="marquee-wrapper"> */}
            <Marquee
                speed={50}
                gradient={false}
                pauseOnHover={true}
            >
                {images.map((imgSrc, index) => (
                    <div key={index} className="marquee-image">
                        <img src={imgSrc} alt={`img-${index}`} />
                    </div>
                ))}
            </Marquee>
            {/* </div> */}
        </section>
    )
}

export default Skills