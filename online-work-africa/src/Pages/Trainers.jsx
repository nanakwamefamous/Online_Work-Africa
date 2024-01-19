import React from 'react'
import "../styles/Trainers.css"
// import image0 from "../images/unknown-image.jpg"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SponsorsSlider from '../components/SponsorsSlider';


export default function Trainers() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <div>
        <div className='ttopimg'></div>
        <h4 data-aos="zoom-in" className='th1text'>TRAINERS</h4>
        <div data-aos="fade-left" className='tline'></div>
        {/* <div className='tbox'>
        {data.map((d) => (
          <div data-aos="zoom-in" key={d.name} className="h-[450px] text-black rounded-xl card_2con">
            <div className='h-56 flex justify-center items-center rounded-t-x1 imgbg'>
              <img src={d.img} alt="" className="h-44 w-44 rounded-full "/>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-4 bg-gray-400 card_text">
              <p className="text-xl font-semibold name_text">{d.name}</p>
              <p className="text-center">{d.review}</p>
            </div>
          </div>
        ))}
        </div> */}
      </div>
      <h2 className='tpupcoming'>UPCOMING</h2>
      <SponsorsSlider/>
    </div>
  )
}


// const data = [
//   {
//     name: `John Morgan`,
//     img: image0,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Anderson`,
//     img: image0,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Nia Adebayo`,
//     img: image0,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Rigo Louie`,
//     img: image0,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Mia Williams`,
//     img: image0,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Mia Williams`,
//     img: image0,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Mia Williams`,
//     img: image0,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Mia Williams`,
//     img: image0,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Mia Williams`,
//     img: image0,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Mia Williams`,
//     img: image0,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Mia Williams`,
//     img: image0,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
//   {
//     name: `Mia Williams`,
//     img: image0,
//     review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
//   },
  
// ];

