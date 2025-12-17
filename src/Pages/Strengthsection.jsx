import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import "./Strengthsection.css";

import icon1 from "../assets/strengthicons/icon1.png";
import icon2 from "../assets/strengthicons/icon2.png";
import icon3 from "../assets/strengthicons/icon3.png";
import icon4 from "../assets/strengthicons/icon4.png";

export default function StrengthsectionMUI() {
  return (
    <Container maxWidth="lg" sx={{ my: { xs: 4, sm: 6, md: 10 } }}>
      <Typography variant="h4" fontWeight={700} sx={{ fontSize: { xs: 24, sm: 28, md: 32 }, mb: 5 }}>
        Our Strengths
      </Typography>

      <Grid container spacing={3}>
        {/* Box 1 */}
        <Grid item xs={12} sm={6}>
          <Box className="strength-box">
            <Box className="icon-wrap pink">
              <img src={icon1} alt="Interdisciplinary Approach" />
            </Box>
            <Box className="text-wrap">
              <Typography variant="h6" fontWeight={500}>
                Interdisciplinary Approach
              </Typography>
              <Typography variant="body2">
                Students from a wide range of backgrounds connect.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Box 2 */}
        <Grid item xs={12} sm={6}>
          <Box className="strength-box">
            <Box className="icon-wrap purple">
              <img src={icon2} alt="Immersive & Experiential Learning" />
            </Box>
            <Box className="text-wrap">
              <Typography variant="h6" fontWeight={500}>
                Immersive & Experiential Learning
              </Typography>
              <Typography variant="body2">
                Exposure to real-life projects to develop hands-on.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Box 3 */}
        <Grid item xs={12} sm={6}>
          <Box className="strength-box">
            <Box className="icon-wrap blue">
              <img src={icon3} alt="Whole Brain Learning Pedagogy" />
            </Box>
            <Box className="text-wrap">
              <Typography variant="h6" fontWeight={500}>
                Whole Brain Learning Pedagogy
              </Typography>
              <Typography variant="body2">
                Pedagogy to empowers learners acquire future-proof.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Box 4 */}
        <Grid item xs={12} sm={6}>
          <Box className="strength-box">
            <Box className="icon-wrap yellow">
              <img src={icon4} alt="Faculty from Academia & Industry" />
            </Box>
            <Box className="text-wrap">
              <Typography variant="h6" fontWeight={500}>
                Faculty from Academia & Industry
              </Typography>
              <Typography variant="body2">
                Inspiration by dynamic, brilliant scholars with too.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
