import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";

const Contact = () => {
    return (
        <section id="contact">
            <h5>Get in touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>farhanaaxy@gmail.com</h5>
                        <a
                            href="mailto:farhanaaxy@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsLinkedin className="contact__option-icon" />
                        <h4>LinkedIn</h4>
                        <h5>Farhan Altariq</h5>
                        <a
                            href="https://linkedin.com/in/farhan-altariq"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>Farhan</h5>
                        <a
                            href="https://m.me/farhan.altariq.9"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a message
                        </a>
                    </article>
                </div>
                <form action="">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="7"
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
