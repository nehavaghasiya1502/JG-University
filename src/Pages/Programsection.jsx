// import React from "react";
// import './Programsection.css';
// import { Container, Grid, Box, Typography } from "@mui/material";

// import ug from "../assets/programs/p1.png";
// import pg from "../assets/programs/p2.png";
// import phd from "../assets/programs/p3.png";
// import cert from "../assets/programs/p4.png";

// const programs = [
//   {
//     title: "Undergraduate",
//     image: ug,
//     color: "#7b56a5",
//     list: [
//       "B.Com - 3 Years, 6 Semesters",
//       "BBA - 4 Years, 8 Semesters",
//       "BCA - 3 Years, 6 Semesters",
//       "BCA(Hons) - 4 Years, 8 Semesters",
//     ],
//   },
//   {
//     title: "Postgraduate",
//     image: pg,
//     color: "#e6548a",
//     list: [
//       "M.Com – 2 years, 4 semesters",
//       "MCA – 2 years, 4 semesters",
//       "MBA – 2 years, 4 semesters",
//       "Masters in Aviation, Hospitality and Travel",
//     ],
//   },
//   {
//     title: "Doctoral",
//     image: phd,
//     color: "#9c0b1a",
//     list: ["Commerce", "Management", "Computing", "Interdisciplinary", "Law"],
//   },
//   {
//     title: "Certificate Courses",
//     image: cert,
//     color: "#4fc3f7",
//     list: [
//       "Metaverse",
//       "Data-Science,AI-ML",
//       "Mobile Applications",
//       "Block-chain",
//       "Digital-Marketing",
//       "Cyber-Security",
//       "Robotic Process Automation",
//       "Industrial IOT",
//       "Full Stack Architect",
//       "Azure DevOps",
//     ],
//   },
// ];

// export default function ProgrammesMUI() {
//   return (
//     <Container fixed sx={{ my: 8 }}>
//       <Typography
//         variant="h4"
//         fontWeight={700}
//         sx={{ mb: 4 }}
//       >
//         Programmes
//       </Typography>

//       <Grid container spacing={2}>
//         {programs.map((item, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Box
//               sx={{
//                 position: "relative",
//                 overflow: "hidden",
//                 borderRadius: 2,
//                 cursor: "pointer",
//                 height: 280,
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//                 "&:hover .slide": {
//                   transform: "translateY(0%)",
//                 },
//               }}
//             >
//               {/* TOP IMAGE */}
//               <Box
//                 component="img"
//                 src={item.image}
//                 alt={item.title}
//                 sx={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                 }}
//               />

//               {/* SLIDING PANEL */}
//               <Box
//                 className="slide"
//                 sx={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   background: item.color,
//                   color: "#fff",
//                   padding: "20px",
//                   transform: "translateY(100%)",
//                   transition: "0.4s ease-in-out",
//                   overflowY: "auto",
//                 }}
//               >
//                 <Typography variant="h6" fontWeight={600} mb={1}>
//                   {item.title}
//                 </Typography>

//                 <ul style={{ paddingLeft: "18px", margin: 0 }}>
//                   {item.list.map((li, i) => (
//                     <li key={i} style={{ marginBottom: "5px" }}>
//                       {li}
//                     </li>
//                   ))}
//                 </ul>
//               </Box>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }



import React from "react";
import './Programsection.css';
import { Container, Grid, Typography, Box } from "@mui/material";

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
    <Container fixed sx={{ my: 8 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
        Programmes
      </Typography>

      <Grid container spacing={1}>
        {programs.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <div className="program-card">
              
              {/* IMAGE */}
              <img src={item.image} alt={item.title} />

              {/* SLIDE EFFECT PANEL */}
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
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

