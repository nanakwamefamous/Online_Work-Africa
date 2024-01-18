import React from 'react';
import "../styles/Blog.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SponsorsSlider from '../components/SponsorsSlider';

export default function Blog() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <div className='topimgBox'>
        <div className='Btopimg'></div>
        <h4 data-aos="zoom-in"className='Bh1text'>Blog</h4>
        <div data-aos="fade-left" className='Bline'></div>
      </div>
      <div data-aos="fade-left"className='BlogBox'>
        <h3>Online Work Africa : Mobile Web Ghana's New Initiative for Youth Empowerment</h3>
        <div className='BsectBigBox'>
          <section data-aos="zoom-in" className='BsectBox1'>
          <p>
          Mobile Web Ghana introduces a new initiative aimed at supporting the youth in gaining skills and opportunities to earn money online. In a time where unemployment rates are high, this initiative comes as a timely and much-needed solution to equip young individuals with the tools to make a decent living through online work.
          </p>
        </section>
        <section data-aos="zoom-in" className='BsectBox2'>
          <p>
          As we witness a surge in unemployment, Mobile Web Ghana believes in providing practical solutions. This initiative focuses on unlocking the potential of the youth by offering them access to skills and opportunities in the online work landscape. It's not just a program; it's a lifeline for those seeking ways to make a living in these challenging times.
          </p>
        </section>
        <section data-aos="zoom-in" className='BsectBox3'>
          <p>
          In the coming days, we will be organizing a launch event to officially introduce this initiative to the public. During this launch, we'll reach out to potential sponsors and partners to join us in making this initiative a reality. Together, we can create a positive impact on the lives of many.
          </p>
        </section>
        <section data-aos="zoom-in" className='BsectBox4'>
          <p>
          Details on how to participate in the conference, where valuable skills and insights will be shared, will be communicated soon. We understand the importance of accessibility, and we're working to make this opportunity available to as many individuals as possible.
          </p>
        </section>
        <section data-aos="zoom-in" className='BsectBox5'>
          <p>
          Stay tuned for updates on this groundbreaking initiative that seeks to empower the youth, create opportunities, and foster a sense of hope in a world where every effort counts. Mobile Web Ghana is dedicated to making a difference, one opportunity at a time.
          </p>
        </section>
        <section data-aos="zoom-in" className='BsectBox5'>
          <p>
          Follow our the journey to our Online Work Africa experience via our social media handles below:
          </p>
          <li>Facebook:</li>
          <li>Tiktok:</li>
          <li>Twitter:</li>
          <li>Linkedin:</li>
          <li>Instagram:</li>
        </section>
        </div>

      </div>
      <SponsorsSlider />
    </div>

  )
}