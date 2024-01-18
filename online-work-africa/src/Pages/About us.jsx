import React from 'react';
import "../styles/About us.css";
import AupAboutBox from '../components/aupAboutBox';
import AupKeyObjectives from '../components/aupKeyObjectives';
import SponsorsSlider from '../components/SponsorsSlider';

export default function AboutUs() {
  return (
    <div>
      <AupAboutBox />
      <AupKeyObjectives />
      <SponsorsSlider />
    </div>
  )
}
