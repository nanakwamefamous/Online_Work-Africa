import React from 'react';
import "../styles/aupAboutBox.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AupAboutBox() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <div className='topimgBox'>
        <div className='auptopimg'></div>
        <h4 data-aos="zoom-in"className='auph1text'>ABOUT US</h4>
        <div data-aos="fade-left" className='aupline'></div>
      </div>
      <div data-aos="fade-up" className='aupAboutBox'>
        <h2>ABOUT ONLINE WORK AFRICA</h2>
        <section data-aos="zoom-in"className='sectBox-1'>
          <p>
          The Online Work Africa Conference, organized by Mobile Web Ghana and its esteemed partners, stands as a pivotal initiative addressing the surging demand for online work skills in Ghana and the broader African context. In our swiftly evolving digital landscape, technology has become the great equalizer, opening doors for knowledge exchange, skill acquisition, and digital empowerment. <br/><br/>

          This annual conference serves as a gathering point for institutions, government bodies, professionals, entrepreneurs, students, and the youth, acknowledging their collective role in meeting the escalating demand for online work skills. In an era where young minds hold invaluable expertise in the digital sphere, the conference aims to tap into their potential as both contributors and learners.<br/><br/>

          At its core, the conference places a profound emphasis on knowledge sharing, a cornerstone for cultivating digital literacy and empowering individuals to actively engage in the online work realm. By creating a platform for the youth to teach and learn digital skills, Mobile Web Ghana is not just fostering personal development but also addressing the evolving needs of
          </p>
        </section>
        <section className='boxa1'>
        <div className='boxa2'>
        <section data-aos="zoom-in" className='sectBox-2'>
          <h2>Vision:</h2>
          <p>
          Our vision is to pioneer a transformative movement that propels Africa into a digital future marked by empowerment, innovation, and inclusive growth. We envision a continent where every individual, regardless of background or location, has the digital skills and opportunities to thrive in the online work landscape.
          </p>
        </section>
        <section data-aos="zoom-in" className='sectBox-3'>
          <h2>Mission:</h2>
          <p>
            Empower young individuals who are seeking opportunities to work online,by  providing them with the skills and knowledge necessary to explore and thrive in the digital job market.
          </p>
        </section> 
        </div>
        <section data-aos="zoom-in" className='sectBox-4'>
          <h2>Key Pillars of Our Vision:</h2>
          <p>
           <b> 1. Digital Inclusion: </b>We aspire to bridge the digital divide by providing accessible platforms for learning and skill development, ensuring that no one is left behind in the digital revolution.<br/><br/>

            <b> 2. Youth Empowerment: </b>Our vision centers on harnessing the untapped potential of Africa's youth as dynamic contributors and leaders in the digital economy. We believe in creating spaces where young minds not only learn but also actively shape the future of online work.<br/><br/>

            <b>3. Innovation Hub: </b>We envision the Online Work Africa Conference as a dynamic hub of innovation, where ideas flourish, and new pathways for online work emerge. Through this, we aim to contribute to the continuous evolution of Africa's digital landscape.<br/><br/>

            <b>4. Global Impact: </b>Our vision extends beyond borders, foreseeing Africa as a global player in the digital space. By nurturing a generation equipped with digital skills and a global perspective, we aim to position Africa at the forefront of the digital revolution.
          </p>
        </section>
        </section>
      </div>
    </div>

  )
}

