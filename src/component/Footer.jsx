import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import './Footer.css';

function Footer() {
  return (
    <Box  className="footer-contact-item" sx={{ backgroundColor: "#f5f5f5", color: "#333", pt: 5, pb: 0, mb: 0 }}>
      <Container maxWidth="lg" sx={{mt: 6, mb: 0 }} >
        <Grid container spacing={4}>

          {/* Column 1 */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>School of Management</Typography>
            <Typography className="footer-item" variant="body2" sx={{lineHeight:2}}>BBA (Hons) - 4 years, 8 semesters</Typography>
            <Typography className="footer-item" variant="body2" sx={{lineHeight:2}}>iMBA - 5 years, 10 semesters</Typography>
            <Typography className="footer-item" variant="body2" sx={{lineHeight:2}}>iMBA - Global Business - <br /> 5 years, 10 semesters</Typography>
            <Typography className="footer-item" variant="body2" sx={{lineHeight:2}}>iMBA - International <br /> Trade & <br /> Finance -  5 years, 10 semesters</Typography>
            <Typography className="footer-item" variant="body2" sx={{lineHeight:2}}>BBA (Hons) - International Trade &  <br /> Finance - 4 years, 8 semesters</Typography>
            <Typography className="footer-item" variant="body2" sx={{lineHeight:2}}>MBA - 2 years, 4 semesters</Typography>
            <Typography className="footer-item" variant="body2" sx={{lineHeight:2}}>Masters in International <br /> Trade & Finance - <br /> 2 years, 4 semesters</Typography>
            <Typography className="footer-item" variant="body2" sx={{lineHeight:2}}>PGD - Banking & Finance - <br /> 1 year, 2 semesters</Typography>
          </Grid>

          {/* Column 2 */}
          <Grid item xs={12} md={3}>
            <Typography  variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>School of Computing</Typography>
            <Typography  className="footer-item" sx={{lineHeight:2}} variant="body2">BCA (Hons) - 4 years, 8 semesters</Typography>
            <Typography  className="footer-item" sx={{lineHeight:2}} variant="body2">iMSc (IT) - 5 years, 10 semesters</Typography>
             <Typography  className="footer-item" sx={{lineHeight:2}} variant="body2">iMCA - 5 years, 10 semesters</Typography>
              <Typography  className="footer-item" sx={{lineHeight:2}} variant="body2">MCA - 2 years, 4 semesters</Typography>
          </Grid>

          {/* Column 3 */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>School of Engineering</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>B.Tech - CSE - 4 years, 8 semesters</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>B.Tech - IT - 4 years, 8 semesters</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>B.Tech - AI & DS - 4 years, 8 <br /> semesters</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>B.Tech - AI & ML - 4 years, 8 <br /> semesters</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>B.Tech - CE - 4 years, 8 semesters</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>B.Tech - CSE - AI - 4 years, 8 <br /> semesters</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>B.Tech - CSE - AI & ML - 4 years, 8 <br /> semesters</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>B.Tech - CSE - BDA - 4 years, 8 <br /> semesters</Typography>
          </Grid>

          {/* Column 4 */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>School of Commerce</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>B.Com (Hons) - 4 years, 8 semesters</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>M.Com (Hons) - 2 years, 4 semesters</Typography>
          </Grid>

            {/* Column 5 */}
           <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>School of Law</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>LL.M. - 2 years, 4 semesters, Master <br /> of Legislative Law</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>LL.B. - 3 years, 6 semesters</Typography>
          </Grid>

            {/* Column 6 */}
           <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>School of Design</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>B.Design - UI/UX - 3 years, <br /> 6 semesters</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>B.Design(Hons) - UI/UX - 4 years <br /> , 8 semesters</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>B.Design - Game Design - 3 years, <br /> 6 semesters</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>B.Design(Hons) - Game Design - <br /> 4 years, 8 semesters</Typography>
          </Grid>

            {/* Column 7 */}
           <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>School of Emerging <br /> Technology</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>Metaverse</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>Data Science, AI-ML</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>Mobile applications (Flutter and Native)</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>Blockchain</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>Digital Marketing</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>Cyber Security</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>Robotic Process Automation</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>Industrial IoT</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>Full Stack Architect</Typography>
             <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>Azure DevOps</Typography>
          </Grid>

          {/* Column 8 */}
           <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>School of Aviation & <br /> Hospitality</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>Integrated BBA + MBA - 5 years, <br /> 10 semesters</Typography>
            <Typography variant="body2" className="footer-item" sx={{lineHeight:2}}>Masters in Aviation, Hospitality & <br /> Travel Management - 2 years, <br /> 4 semesters</Typography>
          </Grid>


          {/* Contact Info Column */}
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 2 }}>Contact Information</Typography>

            <Box sx={{display:'flex',justifyContent:'space-around'}}>
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
        <Box sx={{display:'flex',justifyContent:'center', textAlign: 'center',pb:2, mt: 5,pt:2, borderTop: "1px solid #ccc", fontSize: '12px' }}>
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
