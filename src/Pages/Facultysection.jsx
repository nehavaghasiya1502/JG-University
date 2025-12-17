import React from 'react';
import './Facultysection.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Typography } from "@mui/material";

import faculty1 from "../assets/faculty/sanjay-1.png";
import faculty2 from "../assets/faculty/namika2.png";
import faculty3 from "../assets/faculty/hitesh3.png";
import faculty4 from "../assets/faculty/harshil4.png";
import faculty5 from "../assets/faculty/pratik5.png";
import faculty6 from "../assets/faculty/parag6.png";
import faculty7 from "../assets/faculty/megha7.png";
import faculty8 from "../assets/faculty/aarti9.png";
import faculty9 from "../assets/faculty/nirali20.png";
import faculty10 from "../assets/faculty/delnaz10.png";
import faculty11 from "../assets/faculty/vish11.png";
import faculty12 from "../assets/faculty/vaibhav12.png";
import faculty13 from "../assets/faculty/jigar13.png";
import faculty14 from "../assets/faculty/harshil4.png";
import faculty15 from "../assets/faculty/vishva15.png";
import faculty16 from "../assets/faculty/minniee16.png";
import faculty17 from "../assets/faculty/pushpa17.png";
import faculty18 from "../assets/faculty/mona18.png";
import faculty19 from "../assets/faculty/niku19.png";
import faculty20 from "../assets/faculty/nirali20.png";

const faculty = [
  {
    img: faculty1,
    name: "Dr. Namika Patel",
    dept: "School of Management",
  },
  {
    img: faculty2,
    name: "Dr. Hitesh Harwani",
    dept: "School of Management",
  },
  {
    img: faculty3,
    name: "CA CPA Harshil Trivedi",
    dept: "School of Commerce",
  },
  {
    img: faculty4,
    name: "Dr. Pratik Darji",
    dept: "School of Management",
  },
  {
    img: faculty5,
    name: "Dr. Sanjay Christian",
    dept: "School of Management",
  },
  {
    img: faculty6,
    name: "CA Parag Soni",
    dept: "School of Commerce",
  },
  {
    img: faculty7,
    name: "Dr. Megha Bhatt",
    dept: "School of Commerce",
  },
  {
    img: faculty8,
    name: "Prof. Dinesh Patel",
    dept: "School of Commerce",
  },
  {
    img: faculty9,
    name: "Dr. Aarti Shah",
    dept: "School of Commerce",
  },
  {
    img: faculty10,
    name: "Dr. Delnaz Jokhi",
    dept: "School of Commerce",
  },
  {
    img: faculty11,
    name: "Prof. Vishva Gandhi",
    dept: "School of Commerce",
  },
  {
    img: faculty12,
    name: "Dr. Vaibhav Shah",
    dept: "School of Management",
  },
  {
    img: faculty13,
    name: "Dr. Jigar Aggarwal",
    dept: "School of Commerce",
  },
  {
    img: faculty14,
    name: "Dr. Urvi Gajjar",
    dept: "School of Commerce",
  },
  {
    img: faculty15,
    name: "Dr. Vishva Deuskar",
    dept: "School of Commerce",
  },
  {
    img: faculty16,
    name: "Dr. Minnie Mattheew",
    dept: "School of Commerce",
  },
  {
    img: faculty17,
    name: "Dr. S Pushpalatha",
    dept: "School of Computing",
  },
  {
    img: faculty18,
    name: "Dr. Mona Shah",
    dept: "School of Computing",
  },
  {
    img: faculty19,
    name: "Prof. Niku Brahmbhatt",
    dept: "School of Computing",
  },
  {
    img: faculty20,
    name: "Shruti Darbar",
    dept: "School of Computing",
  }
];

const Facultysection = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div
        onClick={onClick}
        style={{
          position: "absolute",
          right: "-40px",
          top: "45%",
          transform: "translateY(-50%)",
          width: "35px",
          height: "35px",
          background: "#4FC4F1",
          color: "white",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 10
        }}
      >
        ❯
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        onClick={onClick}
        style={{
          position: "absolute",
          left: "-40px",
          top: "45%",
          transform: "translateY(-50%)",
          width: "35px",
          height: "35px",
          background: "#4FC4F1",
          color: "white",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 10
        }}
      >
        ❮
      </div>
    );
  };
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };


  return (
    <Box sx={{ width: "100%", maxWidth: "1100px", margin: "auto", mt: 15 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, fontSize: 30, mb: 4 }}>
        Faculty Members
      </Typography>
      <Slider {...settings}>
        {faculty.map((item, index) => (
          <Box
            key={index}
            className="faculty-card"
            sx={{
              textAlign: "center",
              p: 2,
              transition: "0.4s",
            }}
          >
            {/* IMAGE */}
            <Box
              component="img"
              src={item.img}
              alt={item.name}
              className="faculty-img"
              sx={{
                width: "100%",
                height: "320px",
                objectFit: "cover",
                transition: "0.4s",
              }}
            />

            {/* TEXT */}
            <Typography variant="h6" mt={5} sx={{ fontWeight: 500, pt: 2, fontSize: 17 }}>
              {item.name}
            </Typography>
            <Typography sx={{ color: "gray" }}>
              {item.dept}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Facultysection;
