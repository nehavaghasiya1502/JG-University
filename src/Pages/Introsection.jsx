import React from 'react';
import './Introsection.css';
import { Box, Container, Grid, Typography } from '@mui/material';

const Introsection = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 8 }}>
            <Grid container spacing={5} alignItems="center">

                {/* LEFT SIDE CONTENT */}
                <Grid item xs={12} md={4}>
                    <Typography
                        variant="h3"
                        fontWeight="600"
                        lineHeight={1.3}
                        sx={{ fontSize: { xs: "32px", md: "42px" } }}
                    >
                        Welcome to JG University the <br />
                        Best University in <br />
                        Ahmedabad
                    </Typography>
                    <Typography className='body2'> 
                        <body2>JG University is a New Age Tech-Driven University offering <br />programmes that evolve as per future industry demand, thus enabling its <br />students to get into employment or self-employment seamlessly. It is <br />a UGC approved University sponsored by the ASIA Charitable Trust, <br />Which has been in the field of education since 1965, successfully <br />managing 17 colleges and 3 schools.</body2>
                    </Typography>
                </Grid>

                <Grid item xs={12} md={8}>
                     <Grid container spacing={2}>

                        {/* LEFT VIDEO */}
                         <Grid item xs={12} sm={6}>
                        <iframe
                            width="100%"
                            height="260"
                            src="https://www.youtube.com/embed/QuRupPh1kAU?si=z-AW0A-Qpa3z_P3z"
                            title="Video 1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            style={{ borderRadius: "16px" }}
                        ></iframe>
                        </Grid>

                        {/* RIGHT VIDEO */}
                        <Grid item xs={12} sm={6}>
                        <iframe
                            width="100%"
                            height="260"
                            src="https://www.youtube.com/embed/P5sIw2tbjYQ?si=pIDCTtUwxjrIK3a6"
                            title="Video 2"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            style={{ borderRadius: "16px" }}
                        ></iframe>
                        </Grid>

                   </Grid>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Introsection;
