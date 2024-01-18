import React from 'react'
import "../styles/PartnerWithUs.css";
import PartnerWithUsImage from "../images/hand shake.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function PartnerWithUs() {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (

    <div data-aos="fade-down" className="pwucontent-container">
      <div data-aos="zoom-in" className="pwutext-container">
        <h2>PARTNER WITH US</h2>
        <p>
        We invite you to join us in making a meaningful impact on the lives of the youth by creating opportunities for the youth in Africa through our initiative – the Online Work Africa Summit, brought to you by Mobile Web Ghana.
        </p>
      </div>

      <div className="pwuimage-container">
        <img
          src={PartnerWithUsImage}
          alt="Sample"
        />
      </div>

      <a className="pwubottom-left-btn" href='https://forms.gle/UhYXkFfCBX4Fg9Eq9'>SIGN UP</a>
    </div>

  // <div>
  //   <div className='pwuBigBox'>
  //     <div className='wrapper'>
  //       <img src={PartnerWithUsImage} alt='' className='PartnerWithUsimg'/>
  //       <div className='pwutext-box'>
  //         <h2>PARTNER WITH US</h2>
  //         <p>
  //           fjhvj  udf uyfcd dguv ouydf   vbjvgv fvyjag vuv dvuyg vvgv vvga afyuvv sjvvivg avihv fhkdfv vugiolhvhpv vuigvininv biufdafdvfa fuvahvvkvcn,b k  jvbkygh yghivbvc vusvids vubhsnbhvndc scuxhbnvcbx vchbfbdc kbnjchbfnj fhbvhcjvhbc gvhbhb  dhj dhjifvhbcctfydytfgkydtfgyidt divjftiutsgchiyserdxfcgh yhuhtgcvfjchvbhphlr irt ttgdyhpyh;phkyytsfs yrfhfiyfhvkgoljlokutokgdeyft4fxfih  fyikvfugjyi hlgyiugfytufhotufh fjyrifypgv jhiutghugj yhfitgj iiutigjb guihtiufhvnnm gifhvjyuchj,m mgjygchb 
  //         </p>
  //         <div className='pwubox'><a href='/Sponsors' className='pwuReadMore'>Sign Up</a></div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  )
}