import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="about" />
                    </div>
                </div>
                <div className="about__content">
                    <article className="about__cards">
                        <div className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </div>
                        <div className="about__card">
                            <FiUser className="about__icon" />
                            <h5>Clients</h5>
                            <small>5+ National</small>
                        </div>
                        <div className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </div>
                    </article>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium ducimus voluptatibus illo adipisci officiis
                        dignissimos voluptatum repellat error non, eum explicabo
                        praesentium nesciunt nostrum harum esse repellendus
                        dicta!
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Contact
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
