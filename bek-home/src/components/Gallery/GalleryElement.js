import React from 'react';
import { Link } from 'react-router-dom';
import { GalleryItems } from './Gallery';

const GalleryElement = () => {
    return (
        <div class="gallery">

            {GalleryItems.map((item, index) => {
                return (
                    <div class="gallery__card">
                        <Link to="{item.link}" class="gallery__link">
                            <div class="gallery__link--image" >
                                <div class="overlay"></div>
                                <img src={item.imageURL} alt="Gallery" />
                            </div>
                            <div class="gallery__link-title">

                                <span>{item.title}</span>

                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
};

export default GalleryElement;