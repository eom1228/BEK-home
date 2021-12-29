import React from 'react';
import image1 from '../../images/sample.jpeg';

const GalleryElement = () => {
return (
    <div class="gallery__card">
            <a href="#" class="gallery__link">
                <div class="gallery__link--image" >
                    <div class="overlay"></div>
                    <img src={image1} alt="Gallery" />
                </div>
                <div class="gallery__link-title">
                 
                        <span>Numbers of Sample</span>
                
                </div>
            </a>
        </div>
)
} ;

export default GalleryElement;