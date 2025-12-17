import React from 'react';
import { Container, Grid, Typography, Box } from "@mui/material";


const Salientsection = () => {
  return (
  <Box sx={{ backgroundColor: "#f4f9fb", py: { xs: 3, sm: 5, md: 8 } }}> 
  <Container maxWidth="lg" sx={{ my: { xs: 3, md: 5 } }}>
    <Typography 
      variant="h4" 
      fontWeight="bold" 
      sx={{ 
        fontSize: { xs: 22, sm: 26, md: 30 }, 
        mb: { xs: 2, md: 4 } 
      }}
    >
      JG University Salient Features
    </Typography>

    <Box
      sx={{
        mb: { xs: 3, md: 4 },
        p: { xs: 2, md: 3 },
        borderRadius: 2,
        border: "1px solid #006bb2",
      }}
    >
      <Grid container alignItems="flex-start" spacing={2}>
        <Grid item xs={12}>
          <Typography 
            component="ul"
            sx={{ 
              fontWeight: 400, 
              textAlign: "justify", 
              wordSpacing: 1, 
              letterSpacing: 0.5, 
              lineHeight: 2, 
              fontSize: { xs: 13, sm: 14, md: 15 },
              pl: 2
            }}
          >
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
