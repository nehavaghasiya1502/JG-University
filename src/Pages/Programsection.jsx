import React from "react";
import './Programsection.css';
import { Container, Typography } from "@mui/material";

import ug from "../assets/programs/p1.png";
import pg from "../assets/programs/p2.png";
import phd from "../assets/programs/p3.png";
import cert from "../assets/programs/p4.png";


const programs = [
  {
    title: "Undergraduate",
    image: ug,
    color: "#7b56a5",
    list: [
      "B.Com - 3 Years, 6 Semesters",
      "BBA - 4 Years, 8 Semesters",
      "BCA - 3 Years, 6 Semesters",
      "BCA(Hons) - 4 Years, 8 Semesters",
    ],
  },
  {
    title: "Postgraduate",
    image: pg,
    color: "#e6548a",
    list: [
      "M.Com – 2 years, 4 semesters",
      "MCA – 2 years, 4 semesters",
      "MBA – 2 years, 4 semesters",
      "Masters in Aviation, Hospitality and Travel",
    ],
  },
  {
    title: "Doctoral",
    image: phd,
    color: "#9c0b1a",
    list: ["Commerce", "Management", "Computing", "Interdisciplinary", "Law"],
  },
  {
    title: "Certificate Courses",
    image: cert,
    color: "#4fc3f7",
    list: [
      "Metaverse",
      "Data-Science,AI-ML",
      "Mobile Applications",
      "Block-chain",
      "Digital-Marketing",
      "Cyber-Security",
    ],
  },
];

export default function ProgrammesMUI() {
  return (
    <Container maxWidth="lg" sx={{ my: { xs: 4, md: 6 } }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          fontSize: { xs: 22, sm: 26, md: 30 },
          mb: 4,
        }}
      >
        Programmes
      </Typography>

      <div className="program-grid">
        {programs.map((item, index) => (
          <div className="program-card" key={index}>
            <img src={item.image} alt={item.title} />

            <div
              className="program-slide"
              style={{ background: item.color }}
            >
              <h4>{item.title}</h4>
              <ul>
                {item.list.map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

