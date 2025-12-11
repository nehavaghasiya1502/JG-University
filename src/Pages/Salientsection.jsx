import React from 'react';
import "./Salientsection.css";
import { Container, Grid, Typography, Box, Button } from "@mui/material";


const Salientsection = () => {
  return (
     <Box sx={{ backgroundColor: "#f4f9fb",py:1 }}> 
    <Container maxWidth="lg" sx={{ my: 5 , mt: 15}}>
      <Typography variant="h4" fontWeight="bold" sx={{fontSize:30,}} mb={4}>
        JG University Salient Features
      </Typography>

      <Box
        sx={{
          mb: 4,
          p: 3,
          borderRadius: 2,
          border: "1px solid #006bb2",
          // backgroundColor: "#f7f7f7",
        }}
      >
        <Grid container alignItems="center" justifyContent="space-between" spacing={3}>
          <Grid item xs={12} md={9}>
            <Typography sx={{ fontWeight: 400, textAlign:"justify",wordSpacing:2,letterSpacing:1,lineHeight:3, fontSize: 15 }}>
             <li>National Education Policy (NEP) 2020 & UGC Compliant Programmes</li>
             <li>Collaboration with Foreign Universities for Curriculum, Delivery, and Student Exchange</li>
             <li>Full Pay On-The-Job Training Opportunities</li>
             <li>Course-Embedded Capstone Projects</li>
             <li>Faculty Members with Industry Experience and Academic Expertise</li>
             <li>Hands-on Experience using Industry Use-Cases and Emerging Tech</li>
             <li>Cross-Cultural and Cross-Sectoral Internships</li>
             <li>24*7 Accessibility of Facilities to Students and Faculty Members</li>
            </Typography>
          </Grid>

        </Grid>
      </Box>

          </Container>
          </Box>
  );
};

export default Salientsection;
