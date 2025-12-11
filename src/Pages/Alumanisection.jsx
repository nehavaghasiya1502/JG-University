import React from "react";
import Slider from "react-slick";
import { Container, Box, Typography, Avatar, IconButton } from "@mui/material";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
    text: "My experience at JG University was incredible. Faculty and peers were highly supportive."
  },
  {
    name: "Parth Rupareliya",
    designation: "Art Directer",
    image: alumani2,
    text: "The opportunities for internships and projects helped me grow professionally."
  },
  {
    name: "Parth Raval",
    designation: "Creative Producer,Colors Gujarati",
    image: alumani3,
    text: "I gained real-world skills and knowledge that helped me in my career."
  },
  {
    name: "Yatendra Sinh Joddha",
    designation: "BCA Technical Lead, Tata Consultancy Services",
    image: alumani4,
    text: "I gained real-world skills and knowledge that helped me in my career."
  },
  {
    name: "Disha Thakar",
    designation: "BCA Project Associate,Cognizant",
    image: alumani5,
    text: "I gained real-world skills and knowledge that helped me in my career."
  },
  {
    name: "Krishna Soni",
    designation: "BBA-Assistant Manager,ICICI Bank",
    image: alumani6,
    text: "I gained real-world skills and knowledge that helped me in my career."
  },
  {
    name: "Aayushi Gor",
    designation: "BBA - HR Trainer,Godrej and Boyce Manufacturing Pvt.Ltd",
    image: alumani7,
    text: "I gained real-world skills and knowledge that helped me in my career."
  },
  {
    name: "Shrusti Raval",
    designation: "BBA - Recruitment Consultant,United HR Solutions Pvt.Ltd",
    image: alumani8,
    text: "I gained real-world skills and knowledge that helped me in my career."
  },
  {
    name: "Parth Prajapati",
    designation: "BBA - Sr.Bussiness Developer Manager, KGL India Shipping Line",
    image: alumani9,
    text: "I gained real-world skills and knowledge that helped me in my career."
  },
  {
    name: "Chintan Vyas",
    designation: "B.Com - Manager, Nexa",
    image: alumani10,
    text: "I gained real-world skills and knowledge that helped me in my career."
  },
];
    // Left Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        right: 80,
        bottom: 28,
        backgroundColor: "rgb(92, 175, 234)",
        color: "#fff",
        zIndex: 1
      }}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );
};

// Right Arrow
const NextArrow = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        right: 20,
        bottom: 28,
        backgroundColor: "rgb(92, 175, 234)",
        color: "#fff",
        zIndex: 1
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
};

const AlumniTestimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <Container maxWidth="lg" sx={{ py: 10, position: "relative" }}>
      <Typography variant="h4" fontWeight="bold" mb={6}>
        Alumni Testimonials
      </Typography>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box
            key={index}
            sx={{
              p: 3,
              m: 2,
              backgroundColor: "#fff",
              borderRadius: 3,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              minHeight: 200,
            }}
          >
            <Typography sx={{ fontStyle: "italic", mb: 2 }}>
              "{testimonial.text}"
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
              <Avatar src={testimonial.image} alt={testimonial.name} sx={{ mr: 2 }} />
              <Box>
                <Typography fontWeight="bold">{testimonial.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {testimonial.designation}
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
