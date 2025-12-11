import React from "react";
import './Leadershipsection.css';
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import leader1 from "../assets/leaderimg/leader1.png";
import leader2 from "../assets/leaderimg/leader2.png";

const Leadershipsection = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 5 , mt: 15}}>
      <Typography variant="h4" fontWeight="bold" sx={{fontSize:30,}} mb={4}>
        Our Leaders
      </Typography>


      <Box
        sx={{
          mb: 4,
          p: 3,
          borderRadius: 2,
          border: "1px solid #7a5aa8",
          // backgroundColor: "#f7f7f7",
        }}
      >
        <Grid container alignItems="center" justifyContent="space-between" spacing={3}>
          <Grid item xs={12} md={9}>
            <Box display="flex" flexWrap="wrap" alignItems="center" mb={2}>
              <Typography className="leader-color" variant="h6" fontWeight={500}>
                M.P Chandran
              </Typography>

              <Typography className="leader-color" mx={2}>|</Typography>

              <Typography className="leader-color" variant="subtitle1">
                President, JG University
              </Typography>
            </Box>

            <Typography sx={{ fontWeight: 400, textAlign:"justify",wordSpacing:1, fontSize: 15 }}>
              M.P Chandran is a postgraduate in management with more than 30 years of experience in senior and board- <br /> level positions in public and private sectors in India and abroad. He is the Chairperson of the Education Task <br /> Force, Gujarat Chamber of Commerce and Industry. He is also the chairman of ASIA Charitable Trust <br /> (ACT). ACT  owns and successfully runs 3 schools, 17 colleges, and JG University.
            </Typography>

            <Button variant="outlined" sx={{
              mt: 2, backgroundColor: "#7a5aa8",
              color: "#ffffff",
            }} className="message-btn1">
              View President's Message
            </Button>
          </Grid>


          <Grid item xs={12} md={3} textAlign="center">
            <Box
              component="img"
              src={leader1}
              alt="leader"
              sx={{ width: "100%", borderRadius: 5, maxWidth: 220 }}
            />
          </Grid>
        </Grid>
      </Box>

      <div className="box2 container my-4 p-3" style={{ border: "1px solid #7a5aa8", borderRadius: "10px" }}>
  <div className="row align-items-center">

    {/* LEFT IMAGE */}
    <div className="col-12 col-md-3 text-center mb-3 mb-md-0">
      <img
        src={leader2}
        alt="leader"
        className="img-fluid rounded"
        style={{ maxWidth: "220px", borderRadius: "10px" }}
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="col-12 col-md-9">
      {/* Heading + Pipe + Subtitle */}
      <div className="d-flex align-items-center mb-2">
        <h6 className="leader-color fw-medium mb-0">Dr. CA Achyut Dani</h6>
        <p className="mx-2 leader-color">|</p>
        <p className="leader-color fw-lighter">Director-General and Provost, JG University</p>
      </div>

      {/* Paragraph */}
      <p style={{ fontWeight: 400, fontSize: 15, wordSpacing: "1px", textAlign: "justify" }}>
        Dr. CA Achyut Dani has more than 21 years of experience and expertise in academics and industry. He holds a doctorate in management and commerce and is also a research guide. He has been a fellow member of the Committee for Review of Education and Training (CRET) of the Institute of Chartered Accountants of India, a senior mentor and faculty at Academic Staff College, Gujarat University, National Academy of Direct Taxes, DTRTI (Direct Taxes Regional Training Institute), CEI - Confederation of Entrepreneurship Initiatives and with Mission Mentors for strategic management and international collaborations. He is on the Governing Council of the Asian-African Chambers of Commerce & Industry. He is on the Commission Board of CIAC Global and Passion Vista Publications as Senior Board Member. To his credit, he has multiple awards and recognitions for his contribution to the field of education.
      </p>

      {/* Button */}
      <button className="message-btn1 mt-2">
        View DG's Message
      </button>
    </div>

  </div>
</div>


    </Container>
  );
};

export default Leadershipsection;
