import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import Bild1 from '../assets/bild1.png';
import Bild2 from '../assets/bild2.png';
import Bild3 from '../assets/bild3.png';
import Bild4 from '../assets/bild4.jpg';
import Bild5 from '../assets/bild5.jpg';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [Bild1, Bild2, Bild3, Bild4, Bild5];

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;