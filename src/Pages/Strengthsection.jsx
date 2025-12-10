// import React from "react";
// import { Container, Grid, Box, Typography } from "@mui/material";
// import "./Strengthsection.css";

// import icon1 from "../assets/strengthicons/icon1.png";
// import icon2 from "../assets/strengthicons/icon2.png";
// import icon3 from "../assets/strengthicons/icon3.png";
// import icon4 from "../assets/strengthicons/icon4.png";

// const strengths = [
//   {
//     icon: icon1,
//     colorClass: "pink",
//     title: "Interdisciplinary Approach",
//     text: "Students from diverse backgrounds connect, ideate, and solve problems using different conceptual structures and methods of understanding",
//   },
//   {
//     icon: icon2,
//     colorClass: "purple",
//     title: "Innovative Curriculum",
//     text: "Exposure to real-life projects to develop hands-on expertise Exposure to real-life projects to develop hands-on expertise",
//   },
//   {
//     icon: icon3,
//     colorClass: "blue",
//     title: "Whole Brain Learning Pedagogy",
//     text: "Pedagogy that empower learners to acquire future-proof technical skills and moulds them into creative thinkers",
//   },
//   {
//     icon: icon4,
//     colorClass: "yellow",
//     title: "Faculty from Academia & Industry",
//     text: "Inspiration by dynamic, brilliant scholars with vast academic knowledge and real-world experience dynamic",
//   },
// ];

// export default function StrengthsectionMUI() {
//   return (
//     <Container maxWidth="lg" disableGutters sx={{ my: 6 }}>
//       <Typography variant="h4" fontWeight={700} sx={{ mb: 5 }}>
//         Our Strengths
//       </Typography>

//       <Grid container spacing={1}>
//         {strengths.map((item, index) => (
//           <Grid item xs={12} sm={6} md={6} key={index}>
//             <Box
//               className="box"
//               sx={{
//                 display: "flex",
//                 alignItems: "flex-start",
//                 p: 3,
//                 gap: 2,
//                 borderRadius: 2,
//                 width: "100%",
//               }}
//             >
//               <Box className={`icon-wrap ${item.colorClass}`}>
//                 <img src={item.icon} alt={item.title} />
//               </Box>

//               <Box>
//                 <Typography variant="h6" fontWeight={600}>
//                   {item.title}
//                 </Typography>
//                 <Typography variant="body2" sx={{ mt: 1 }}>
//                   {item.text}
//                 </Typography>
//               </Box>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }



import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import "./Strengthsection.css";

import icon1 from "../assets/strengthicons/icon1.png";
import icon2 from "../assets/strengthicons/icon2.png";
import icon3 from "../assets/strengthicons/icon3.png";
import icon4 from "../assets/strengthicons/icon4.png";

export default function StrengthsectionMUI() {
  return (
    <Container maxWidth="lg" disableGutters sx={{ my: 6 }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 5 }}>
        Our Strengths
      </Typography>

      <Grid container spacing={3}>
        {/* Box 1 */}
        <Grid item xs={12} sm={6}>
          <Box
            className="box"
            sx={{ display: "flex", alignItems: "flex-start", p: 3, gap: 2, borderRadius: 2 }}
          >
            <Box className="icon-wrap pink">
              <img src={icon1} alt="Interdisciplinary Approach" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={500}>
                Interdisciplinary Approach
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Students from diverse backgrounds connect,ideate,  and   <br /> problems using different conceptual <br /> structures and methods of understanding
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Box 2 */}
        <Grid item xs={12} sm={6}>
          <Box
            className="box"
            sx={{ display: "flex", alignItems: "flex-start", p: 3, gap: 2, borderRadius: 2 }}
          >
            <Box className="icon-wrap purple">
              <img src={icon2} alt="Innovative Curriculum" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={500}>
                Innovative Curriculum
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Exposure to real-life projects to develop hands-on  expertis <br /> Exposure to real-life projects to develop <br /> hands-on expertise
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Box 3 */}
        <Grid item xs={12} sm={6}>
          <Box
            className="box"
            sx={{ display: "flex", alignItems: "flex-start", p: 3, gap: 2, borderRadius: 2 }}
          >
            <Box className="icon-wrap blue">
              <img src={icon3} alt="Whole Brain Learning Pedagogy" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={500}>
                Whole Brain Learning Pedagogy
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Pedagogy that empower learners to acquire future-proo <br /> technical skills and moulds them into creative <br /> thinkers
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Box 4 */}
        <Grid item xs={12} sm={6}>
          <Box
            className="box"
            sx={{ display: "flex", alignItems: "flex-start", p: 3, gap: 2, borderRadius: 2 }}
          >
            <Box className="icon-wrap yellow">
              <img src={icon4} alt="Faculty from Academia & Industry" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={500}>
                Faculty from Academia & Industry
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Inspiration by dynamic, brilliant scholars with vast <br /> academic knowledge and real-world experience dynamic
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

