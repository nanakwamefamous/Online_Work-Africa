import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/cardslider.css"
import image0 from "../images/unknown-image.jpg"

function Cardslider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className='w-3/4 m-auto main_con'>
      <div className="mt-5">
      <h2 className="textH2">TRAINERS</h2>
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="h-[450px] text-black rounded-xl card_con">
            <div className='h-56 flex justify-center items-center rounded-t-x1 imgbg'>
              <img src={d.img} alt="" className="h-44 w-44 rounded-full "/>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 p-4 bg-gray-400 card_text">
              <p className="text-xl font-semibold name_text">{d.name}</p>
              <p className="text-center">{d.review}</p>
              <a href="/Trainers" className='text-white text-lg px-6 py-1 rounded-xl crm'>READ MORE</a>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
  );
}

const data = [
  {
    name: `John Obeng`,
    img: image0,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Anderson`,
    img: image0,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo`,
    img: image0,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie`,
    img: image0,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: image0,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  
];

export default Cardslider;
