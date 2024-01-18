import React from 'react'
import "../styles/Sponsors.css"
import sponsorsimg_1 from '../images/LOGO 1.png'
import sponsorsimg_2 from '../images/LOGO 2.png'
import sponsorsimg_4 from '../images/LOGO 4.jpg'
import sponsorsimg_5 from '../images/LOGO 5.jpg'
import sponsorsimg_6 from '../images/LOGO 6.jpg'
import sponsorsimg_7 from '../images/LOGO 7.png'
import sponsorsimg_8 from '../images/LOGO 8.png'
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
            <img data-aos="zoom-in" src={sponsorsimg_4} alt="" />
            <img data-aos="zoom-in" src={sponsorsimg_5} alt="" />
            <img data-aos="zoom-in" src={sponsorsimg_6} alt="" />
            <img data-aos="zoom-in" src={sponsorsimg_7} alt="" />
            <img data-aos="zoom-in" src={sponsorsimg_8} alt="" />
          </div>
        </div>
        <PartnerWithUs />
      </div>
    </div>
  )
}