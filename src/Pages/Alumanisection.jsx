import React from "react";
import Slider from "react-slick";
import {
  Container,
  Box,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import alumani1 from "../assets/alumani/alumani1.png";
import alumani2 from "../assets/alumani/alumani2.png";
import alumani3 from "../assets/alumani/alumani3.png";
import alumani4 from "../assets/alumani/alumani4.png";
import alumani5 from "../assets/alumani/alumani5.png";
import alumani6 from "../assets/alumani/alumani6.png";
import alumani7 from "../assets/alumani/alumani7.png";
import alumani8 from "../assets/alumani/alumani8.png";
import alumani9 from "../assets/alumani/alumani9.png";
import alumani10 from "../assets/alumani/alumani10.png";

const testimonials = [
  {
    name: "Jigardan Gadhvi",
    designation: "Celebrity Singer",
    image: alumani1,
    text: "My experience at JG University was incredible. Faculty and peers were highly supportive.",
  },
  {
    name: "Parth Rupareliya",
    designation: "Art Director",
    image: alumani2,
    text: "The opportunities for internships and projects helped me grow professionally.",
  },
  {
    name: "Parth Raval",
    designation: "Creative Producer, Colors Gujarati",
    image: alumani3,
    text: "I gained real-world skills and knowledge that helped me in my career.",
  },
  {
    name: "Yatendra Sinh Joddha",
    designation: "BCA Technical Lead, TCS",
    image: alumani4,
    text: "I gained real-world skills and knowledge that helped me in my career.",
  },
  {
    name: "Disha Thakar",
    designation: "BCA Project Associate, Cognizant",
    image: alumani5,
    text: "I gained real-world skills and knowledge that helped me in my career.",
  },
  {
    name: "Krishna Soni",
    designation: "Assistant Manager, ICICI Bank",
    image: alumani6,
    text: "I gained real-world skills and knowledge that helped me in my career.",
  },
  {
    name: "Aayushi Gor",
    designation: "HR Trainer, Godrej",
    image: alumani7,
    text: "I gained real-world skills and knowledge that helped me in my career.",
  },
  {
    name: "Shrusti Raval",
    designation: "Recruitment Consultant",
    image: alumani8,
    text: "I gained real-world skills and knowledge that helped me in my career.",
  },
  {
    name: "Parth Prajapati",
    designation: "Sr. Business Development Manager",
    image: alumani9,
    text: "I gained real-world skills and knowledge that helped me in my career.",
  },
  {
    name: "Chintan Vyas",
    designation: "Manager, Nexa",
    image: alumani10,
    text: "I gained real-world skills and knowledge that helped me in my career.",
  },
];

/* LEFT ARROW */
const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      bottom: 20,
      right: 70,
      backgroundColor: "rgb(92,175,234)",
      color: "#fff",
      zIndex: 2,
      "&:hover": { backgroundColor: "#5cafea" },
    }}
  >
    <ArrowBackIosNewIcon fontSize="small" />
  </IconButton>
);

/* RIGHT ARROW */
const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      bottom: 20,
      right: 20,
      backgroundColor: "rgb(92,175,234)",
      color: "#fff",
      zIndex: 2,
      "&:hover": { backgroundColor: "#5cafea" },
    }}
  >
    <ArrowForwardIosIcon fontSize="small" />
  </IconButton>
);

const AlumniTestimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ py: 10, position: "relative" }}>
      <Typography variant="h4" fontWeight="bold" mb={6}>
        JG Alumni Testimonials
      </Typography>

      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <Box
            key={i}
            sx={{
              p: 4,
              m: 2,
              backgroundColor: "#fff",
              borderRadius: 3,
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              minHeight: 220,
            }}
          >
            <Typography fontStyle="italic" mb={3}>
              “{t.text}”
            </Typography>

            <Box display="flex" alignItems="center">
              <Avatar src={t.image} sx={{ mr: 2 }} />
              <Box>
                <Typography fontWeight="bold">{t.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {t.designation}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default AlumniTestimonials;
