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
    adaptiveHeight: true,
  };

  return (
    <div className="hero-container">
      <Slider {...settings} className="img-carousel">
        {heroImages.map((item) => (
          <div className="hero-container-img" key={item.id}>
            <img src={item.image} alt={item.title} className="hero-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
