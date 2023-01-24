import React from "react";
import Slider from "react-slick";
import { announcements } from "../Data/Announcement";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AnnouncementBar() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {announcements.map((item) => (
        <div key={item.id} className="announcement-bar">
          <p>{item.title}</p>
        </div>
      ))}
    </Slider>
  );
}

export default AnnouncementBar;
