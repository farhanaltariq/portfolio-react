import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Farhan Altariq</h1>
                <h5 className="text-light">Fullstack JavaScript Developer</h5>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <img className="img" src={ME} alt="" />
                </div>

                <a href="#contact" className="scroll__down">
                    Scroll down
                </a>
            </div>
        </header>
    );
};

export default Header;
