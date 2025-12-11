import React from "react";
import Slider from "react-slick";
import { Container, Grid, Box } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Campussection.css";

import camp1 from "../assets/campus/camp1.png";
import camp2 from "../assets/campus/camp2.png";
import camp3 from "../assets/campus/camp3.png";
import camp4 from "../assets/campus/camp4.png";
import camp5 from "../assets/campus/camp5.png";
import camp6 from "../assets/campus/camp6.png";
import camp7 from "../assets/campus/camp7.png";
import camp8 from "../assets/campus/camp8.png";
import camp9 from "../assets/campus/camp9.png";
import camp10 from "../assets/campus/camp10.png";
import camp11 from "../assets/campus/camp11.png";
import camp12 from "../assets/campus/camp12.png";
import camp13 from "../assets/campus/camp13.png";
import camp14 from "../assets/campus/camp14.png";
import camp15 from "../assets/campus/camp15.png";

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div className="campus-arrow next" onClick={onClick}>
    <KeyboardArrowRightIcon />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="campus-arrow prev" onClick={onClick}>
    <KeyboardArrowLeftIcon />
  </div>
);

const CampusSlider = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {images.map((img, i) => (
        <div key={i}>
          <img src={img} alt="campus" className="campus-img" />
        </div>
      ))}
    </Slider>
  );
};

export default function CampusSection() {
  const slider1Images = [camp1, camp2, camp3, camp4, camp5, camp6, camp7, camp8, camp9, camp10];
  const slider2Images = [camp11, camp12, camp13, camp14, camp15];

  return (
    <Container maxWidth="lg" sx={{marginTop:"80px"}}>
      <h2><b>Campus</b></h2>

      <Grid container sx={{mb:5, marginTop:"30px"}} spacing={0} className="campus-grid">
        {/* LEFT SLIDER */}
        <Grid item xs={12} md={6}>
          <Box className="campus-box">
            <CampusSlider images={slider1Images} />
          </Box>
        </Grid>

        {/* RIGHT SLIDER */}
        <Grid item xs={12} md={6}>
          <Box className="campus-box">
            <CampusSlider images={slider2Images} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
