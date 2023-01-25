import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";
import { heroImages } from "../../componentData/componentData";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 10000,
  };

  return (
    <div className="hero-container">
      <Slider {...settings}>
        {heroImages.map((item) => (
          <div className="hero-container-img">
            <img src={item.image} key={item.id} className="hero-img"></img>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
