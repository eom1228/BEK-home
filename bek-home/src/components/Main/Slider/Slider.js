import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SliderData } from './SliderData';
import './Slider.scss';
// import useWindowScrollPosition from '@rehooks/window-scroll-position';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      transitionTime={5}
      autoPlay
    >
      {SliderData.map((slide, index) => {
        return <img key={index} src={slide.imgPath} alt={slide.label} />;
      })}
    </Carousel>
  );
};

export default Slider;
