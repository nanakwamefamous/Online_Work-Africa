import React from 'react'
import "../styles/Contact.css"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SponsorsSlider from '../components/SponsorsSlider';

export default function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
        <div className='ctopimg'></div>
        <h4 data-aos="zoom-in" className='ch1text'>CONTACT US</h4>
        <div data-aos="fade-left" className='cline'></div>
      <div data-aos="fade-left" className='contactBox'>
        <section data-aos="zoom-in" className='phone'>
          <i class="fa-solid fa-phone-volume fa-2xl"></i>
          <h1>PHONE</h1>
          <h2>0303944393</h2>
        </section>
        <section data-aos="zoom-in" className='email'>
          <i class="fa-solid fa-envelope fa-2xl"></i>
          <h1>EMAIL</h1>
          <h2>info@onlineworkghana.com</h2>
        </section>
        <section data-aos="zoom-in" className='address'>
          <i class="fa-solid fa-paper-plane fa-2xl"></i>
          <h1>  ADDRESS</h1>
          <h2>Dar es Salaam street, Agbogba, North Legon, Accra</h2>
        </section >
        <div data-aos="zoom-in" className="socialMedia">
          <h1>SOCIAL MEDIA</h1>
          <i data-aos="zoom-in" class="fa-brands fa-facebook fa-2x"></i>
          <i data-aos="zoom-in" class="fa-brands fa-twitter fa-2x"></i>
          <i data-aos="zoom-in" class="fa-brands fa-instagram fa-2x"></i>
          <i data-aos="zoom-in" class="fa-brands fa-linkedin-in fa-2x"></i>
        </div>
      </div>
      <SponsorsSlider />
    </div>
  )
}