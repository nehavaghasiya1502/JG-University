import React from "react";
import Slider from "react-slick";
import { Container, Box } from "@mui/material";
import "./Partenersection.css";

import part1 from "../assets/parteners/part1.png";
import part2 from "../assets/parteners/part2.png";
import part3 from "../assets/parteners/part3.png";
import part4 from "../assets/parteners/part4.png";
import part5 from "../assets/parteners/part5.png";
import part6 from "../assets/parteners/part6.png";
import part7 from "../assets/parteners/part7.png";
import part8 from "../assets/parteners/part8.png";
import part9 from "../assets/parteners/part9.png";
import part10 from "../assets/parteners/part10.png";

const PartnersSlider = () => {
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,

  responsive: [
    {
      breakpoint: 1200, 
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


  const imgs = [
    part1, part2, part3, part4, part5,
    part6, part7, part8, part9, part10,
  ];

  return (
   <Container maxWidth="lg" sx={{ my: { xs: 4, md: 6 } }}>
  <h2 style={{  marginBottom: "20px" }}>
    <b>Partners</b>
  </h2>

  <Box
    sx={{
      p: { xs: 1.5, sm: 2, md: 3 },
      borderRadius: "12px",
      border: "2px solid #e0e0e0",
    }}
  >
    <Slider {...settings}>
      {imgs.map((img, i) => (
        <div key={i} className="partner-slide">
          <img src={img} alt="Partner Logo" className="partner-img" />
        </div>
      ))}
    </Slider>
  </Box>
</Container>

  );
};

export default PartnersSlider;
