import React from 'react';
import "../styles/aupKeyObjectives.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AupKeyObjectives() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <div data-aos="fade-left"className='aupKeyObjectivesBox'>
        <h3>Online Work Africa Goals</h3>
        <div className='KOsectBigBox'>
          <section data-aos="zoom-in" className='KOsectBox1'>
          <p>
          <b>1.  Online Work Awareness: </b>
            Increase awareness about diverse online work opportunities among the youth in Africa, aiming to reach numerous participants through promotional  campaigns and active conference participation.
          </p>
        </section>
        <section data-aos="zoom-in" className='KOsectBox2'>
          <p>
          <b>2. Digital Skills Empowerment: </b>
            Equip conference participants with foundational digital skills essential for online work, ensuring they are well-prepared to seize opportunities in the digital job market.
          </p>
        </section>
        <section data-aos="zoom-in" className='KOsectBox3'>
          <p>
          <b>3. Inspire Pursuit of Online Careers: </b>
            Inspire and motivate participants to explore and pursue online careers by showcasing success stories, industry insights, and the potential for sustainable income generation through online work.
          </p>
        </section>
        <section data-aos="zoom-in" className='KOsectBox4'>
          <p>
         <b>4. Community Building: </b>
            Establish an active online community for participants, fostering continuous dialogue, knowledge sharing, and networking among individuals interested in leveraging online work for their livelihoods.
          </p>
        </section>
        <section data-aos="zoom-in" className='KOsectBox5'>
          <p>
          <b>5. Contribution to SDGs: </b>
            Align the conference outcomes with Sustainable Development Goals (SDG) 1: No Poverty and SDG 8: Decent Work and Economic Growth, specifically focusing on reducing youth unemployment through exposure to viable online work opportunities.
          </p>
        </section>
        </div>

      </div>
    </div>

  )
}