import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const HeaderSocial = () => {
    return (
        <div className="header__socials">
            <a
                href="https://linkedin.com/farhan-altariq"
                target="_blank"
                rel="noreferrer"
            >
                <BsLinkedin />
            </a>
            <a
                href="https://github.com/hanpetualang"
                target="_blank"
                rel="noreferrer"
            >
                <FaGithub />
            </a>
            <a
                href="https://instagram.com/farhanaa_xy"
                target="_blank"
                rel="noreferrer"
            >
                <FiInstagram />
            </a>
        </div>
    );
};

export default HeaderSocial;
