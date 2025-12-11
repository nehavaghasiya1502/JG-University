// import React from "react";
// import './Introsection.css';
// import { Container } from "@mui/material";

// const IntroSection = () => {
//   return (
//     <Container maxWidth="lg" sx={{ mt: 5 }}>

//       <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
        
//         {/* LEFT TEXT SECTION */}
//         <div style={{ flex: 1 }}>
//           <h2>Welcome to JG University the <br /> Best University in <br /> Ahmedabad</h2>
//           <p>
//             JG University is a New Age Tech-Driven University offering programmes that evolve as per future industry demand, thus enabling its students to get into employment or self-employment seamlessly. It is a UGC approved University sponsored by the ASIA Charitable Trust, Which has been in the field of education since 1965, successfully managing 17 colleges and 3 schools.
//           </p>
//         </div>

//         {/* RIGHT VIDEOS SECTION */}
//         <div style={{ flex: 1, display: "flex", gap: "15px" }}>
          
//          <iframe width="270" height="280" src="https://www.youtube.com/embed/QuRupPh1kAU?si=3tijTYjTGJ968RCc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

//           <iframe width="270" height="280" src="https://www.youtube.com/embed/P5sIw2tbjYQ?si=Lv6KkM0K6ViwPjsf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

//         </div>
//       </div>

//     </Container>
//   );
// };

// export default IntroSection;


import React from "react";
import "./Introsection.css";
import { Container } from "@mui/material";

const IntroSection = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",         
          gap: "20px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT TEXT SECTION */}
        <div style={{ flex: "1 1 300px", minWidth: "300px" }}>
          <h2>
            Welcome to JG University the <br /> Best University in <br /> Ahmedabad
          </h2>
          <p>
            JG University is a New Age Tech-Driven University offering programmes
            that evolve as per future industry demand, thus enabling its students 
            to get into employment or self-employment seamlessly. It is a UGC 
            approved University sponsored by the ASIA Charitable Trust, Which has 
            been in the field of education since 1965, successfully managing 17 colleges 
            and 3 schools.
          </p>
        </div>

        {/* RIGHT VIDEOS SECTION */}
        <div
          style={{
            flex: "1 1 300px",
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",        
            justifyContent: "center",
          }}
        >
          <iframe
            width="100%"
            height="250"
            style={{ maxWidth: "270px" }}
            src="https://www.youtube.com/embed/QuRupPh1kAU?si=3tijTYjTGJ968RCc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          <iframe
            width="100%"
            height="250"
            style={{ maxWidth: "270px" }}
            src="https://www.youtube.com/embed/P5sIw2tbjYQ?si=Lv6KkM0K6ViwPjsf"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default IntroSection;
