import React from 'react'
import "../styles/Sponsors.css"
import sponsorsimg_1 from '../images/LOGO 1.png'
import sponsorsimg_2 from '../images/LOGO 2.png'
import PartnerWithUs from '../components/PartnerWithUs';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Sponsors() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <div className='sptopimgBox'>
        <div className='sptopimg'></div>
        <h4 data-aos="zoom-in" className='sph1text'>SPONSORS</h4>
        <div data-aos="fade-left" className='spline'></div>
        <div className='sponsorsimgbox'>
          <div className='spimg'>
            <img data-aos="zoom-in" src={sponsorsimg_1} alt="" />
            <img data-aos="zoom-in" src={sponsorsimg_2} alt="" />
          </div>
        </div>
        <PartnerWithUs />
      </div>
    </div>
  )
}