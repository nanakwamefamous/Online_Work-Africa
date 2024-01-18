import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/SponsorsSlider.css"
import sponsorsimg_1 from '../images/LOGO 1.png'
import sponsorsimg_2 from '../images/LOGO 2.png'
import sponsorsimg_3 from '../images/LOGO 2.png'
import sponsorsimg_4 from '../images/LOGO 2.png'
import sponsorsimg_5 from '../images/LOGO 2.png'

function SponsorsSlider() {
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
    <div className='w-2/4 m-auto SSbox'>
      <div className="mt-5">
      <h2 className="SStextH2">SPONSORS</h2>
      <Slider {...settings}>
        {data.map((d) => (
            <img src={d.img} alt=""/>
        ))}
      </Slider>
      </div>
      
    </div>
  );
}

const data = [
  {
    img: sponsorsimg_1,
  },
  {
    img: sponsorsimg_2,
  },
  {
    img: sponsorsimg_3,
  },
  {
    img: sponsorsimg_4,
  },
  {
    img: sponsorsimg_5,
  },
  
];

export default SponsorsSlider;



