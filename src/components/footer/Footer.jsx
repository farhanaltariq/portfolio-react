import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
    return (
        <footer>
            <a href="/#" className="footer__logo">
                FARHAN
            </a>

            <ul className="permalinks">
                <li>
                    <a href="/#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#service">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="footer__socials">
                <a href="https://linkedin.com/in/farhan-altariq">
                    <BsLinkedin />
                </a>
                <a href="https://github.com/hanpetualang">
                    <FaGithub />
                </a>
                <a href="https://instagram.com/farhanaa_xy">
                    <FiInstagram />
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Farhan Altariq. All rights reserved</small>
            </div>
        </footer>
    );
};

export default Footer;
