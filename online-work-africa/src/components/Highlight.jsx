// import React from 'react';
// import "../styles/Highlight.css";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// export default function Highlight() {
//   useEffect(() => {
//     Aos.init({
//       duration: 1000,
//     });
//   }, []);
//   return (
//     <div>
//       <div data-aos="fade-left"className='Highlight'>
//         <h3>Highlight</h3>
//         <div className='HLsectBigBox'>
//           <section data-aos="zoom-in" className='HLsectBox1'>
//           <p>
//           <b>1. Exploring Digital Horizons:.</b>
//           - Uncover a spectrum of themes at the forefront of the digital revolution. From remote collaboration to emerging online work trends, our conference delves into the latest insights shaping the future of work.
//           </p>
//         </section>
//         <section data-aos="zoom-in" className='HLsectBox2'>
//           <p>
//           <b>2. Distinguished Speakers Lineup:</b>  
//             - Brace yourself for thought-provoking discussions led by industry luminaries, entrepreneurs, and experts. Our lineup of speakers brings diverse perspectives and deep insights into the world of online work.
//           </p>
//         </section>
//         <section data-aos="zoom-in" className='HLsectBox3'>
//           <p>
//           <b>3. Inspire Pursuit of Online Careers.</b>
//             Inspire and motivate participants to explore and pursue online careers by showcasing success stories, industry insights, and the potential for sustainable income generation through online work.
//           </p>
//         </section>
//         <section data-aos="zoom-in" className='HLsectBox4'>
//           <p>
//          <b>4. Community Building.</b>
//             Establish an active online community for participants, fostering continuous dialogue, knowledge sharing, and networking among individuals interested in leveraging online work for their livelihoods.
//           </p>
//         </section>
//         <section data-aos="zoom-in" className='HLsectBox5'>
//           <p>
//           <b>5. Contribution to SDGs.</b>
//             Align the conference outcomes with Sustainable Development Goals (SDG) 1: No Poverty and SDG 8: Decent Work and Economic Growth, specifically focusing on reducing youth unemployment through exposure to viable online work opportunities.
//           </p>
//         </section>
//         </div>

//       </div>
//     </div>

//   )
// }


// CardComponent.js
import React from 'react';
import "../styles/Highlight.css";; // Import the CSS file for styling

const Highlight = () => {
  return (
    <>
    <h1 className='cardh1'>WHAT TO EXPECT</h1>
    <div className="card-container">
        <div className="card">
            <i class="fa-solid fa-chalkboard-user  fa-2xl"></i>
          <h2 className="card-title">Distinguished Speakers Lineup</h2>
          {/* <p className="card-content">
            Brace yourself for thought-provoking discussions led by industry luminaries, entrepreneurs, and experts. Our lineup of speakers brings diverse perspectives and deep insights into the world of online work.
          </p> */}
        </div>
        <div className="card">
        <i class="fa-solid fa-globe fa-2xl"></i>
          <h2 className="card-title">Exploring Digital Horizons</h2>
          {/* <p className="card-content">
            Uncover a spectrum of themes at the forefront of the digital revolution. From remote collaboration to emerging online work trends, our conference delves into the latest insights shaping the future of work.
          </p> */}
        </div>
        <div className="card">
        <i class="fa-solid fa-user-pen fa-2xl"></i>
          <h2 className="card-title">Inclusive Learning Paths</h2>
          {/* <p className="card-content">Engage in interactive sessions designed for all skill levels. Whether you're a seasoned professional or just starting, our conference offers learning paths tailored to your digital journey.</p> */}
        </div>
        <div className="card">
          <i class="fa-solid fa-wifi fa-2xl"></i>
          <h2 className="card-title">Networking Opportunities</h2>
          {/* <p className="card-content">Connect with a vibrant community of professionals, students, and entrepreneurs from across Africa. Our networking sessions provide the perfect platform to forge collaborations, share experiences, and expand your network.</p> */}
        </div>
        <div className="card">
        <i class="fa-solid fa-person-circle-question fa-2xl"></i>
          <h2 className="card-title">Dynamic Q&A Sessions</h2>
          {/* <p className="card-content"> Have burning questions? Our dynamic Q&A sessions allow you to interact directly with our speakers, gaining deeper insights and perspectives on the evolving landscape of online work.</p> */}
        </div>
    </div>
    </>
  );
};

export default Highlight;






