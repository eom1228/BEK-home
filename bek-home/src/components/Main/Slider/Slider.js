import React from "react";




import {SliderData} from './SliderData';
import './Slider.scss';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';




const Slider = () => {
 

    return (
        <Carousel showThumbs={false}
        showStatus={false}
        infiniteLoop
        transitionTime={5} autoPlay>
            {SliderData.map((slide, index) => {
                
                return (
                  
                  
                     
                        <img src={slide.imgPath} alt={slide.label} />
                  
                );

            })
            }
       </Carousel>
    );
};
  
export default Slider;