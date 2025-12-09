import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", color: "#333", pt: 5,  pb: 0,mb: 0  }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>

          {/* Column 1 */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>School of Law</Typography>
            <Typography variant="body2">LL.M. - 2 years, 4 semesters</Typography>
            <Typography variant="body2">LL.B. - 3 years, 6 semesters</Typography>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>School of Science & Technology</Typography>
            <Typography variant="body2">iMSc (IT) - 5 years</Typography>
            <Typography variant="body2">MSc (IT) - 2 years</Typography>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>School of Design</Typography>
            <Typography variant="body2">B.Design - UI/UX</Typography>
            <Typography variant="body2">B.Design - Game Design</Typography>
          </Grid>

         {/* Contact Info Column */}
<Grid item xs={12} md={3}>
  <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>Contact Information</Typography>

  <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
    {/* Location */}
    <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, mr: 1 }}>
      <LocationOnIcon sx={{ mr: 1, color: '#d32f2f' }} />
      <Typography variant="body2" sx={{ fontWeight: 300 }}>
        ASIA Campus, Drive In Rd, Thaltej, Ahmedabad
      </Typography>
    </Box>

    {/* Email */}
    <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, mx: 1 }}>
      <EmailIcon sx={{ mr: 1, color: '#d32f2f' }} />
      <Typography variant="body2" sx={{ fontWeight: 300 }}>
        connect@jguni.in <br /> admission@jguni.in
      </Typography>
    </Box>

    {/* Phone */}
    <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, ml: 1 }}>
      <PhoneIcon sx={{ mr: 1, color: '#d32f2f' }} />
      <Typography variant="body2" sx={{ fontWeight: 300 }}>
        +91 7567 7567 58/59
      </Typography>
    </Box>
  </Box>
</Grid>
</Grid>


        {/* Bottom Strip */}
        <Box sx={{ textAlign: 'center', mt: 5, borderTop: "1px solid #ccc", pt: 2, fontSize: '12px' }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} JG University All Rights Reserved &nbsp;|&nbsp;
            <Link href="#" underline="hover" color="inherit">Terms and Conditions</Link> &nbsp;|&nbsp;
            <Link href="#" underline="hover" color="inherit">Privacy Policy</Link> &nbsp;|&nbsp;
            Powered by N2N Solutions
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
