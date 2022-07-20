import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
    {
        id: 1,
        name: "Rinae Mi",
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, nobis?",
        avatar: AVTR1,
    },
    {
        id: 2,
        name: "Rinae Mi",
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, nobis?",
        avatar: AVTR2,
    },
    {
        id: 3,
        name: "Rinae Mi",
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, nobis?",
        avatar: AVTR3,
    },
    {
        id: 4,
        name: "Rinae Mi",
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, nobis?",
        avatar: AVTR4,
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper
                className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {data.map(({ avatar, name, review }, index) => {
                    return (
                        <SwiperSlide className="testimonial" key={index}>
                            <div className="client__avatar">
                                <img src={avatar} alt={avatar} />
                            </div>
                            <h5 className="client__name">{name}</h5>
                            <small className="client__review">{review}</small>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Testimonials;
