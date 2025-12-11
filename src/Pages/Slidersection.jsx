import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slidersection.css';
import slide1 from '../assets/slider/heroslider1.png';
import slide2 from '../assets/slider/heroslider2.png';
import slide3 from '../assets/slider/heroslider3.png';
import slide4 from '../assets/slider/heroslider4.png';
import slide5 from '../assets/slider/heroslider5.png';
import slide6 from '../assets/slider/heroslider6.png';

// react slick npm slider
const Slidersection = () => {
    const settings = {
        dots: false,
        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        centerMode: false,
        centerPadding: "0px",
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Slider {...settings} className="my-slider">
            <div><img src={slide1} alt="slide1" /></div>
            <div><img src={slide2} alt="slide2" /></div>
            <div><img src={slide3} alt="slide3" /></div>
            <div><img src={slide4} alt="slide4" /></div>
            <div><img src={slide5} alt="slide5" /></div>
            <div><img src={slide6} alt="slide6" /></div>
        </Slider>
    );
}

export default Slidersection;
