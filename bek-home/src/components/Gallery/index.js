import React from 'react';
// import {ReactComponent as sample} from 'sample.jpeg';

function Gallery() {
    return (
        <div class="gallery-card">
            <a href="#" class="gallery-link">
                <div class="gallery-image" >
                    <img src="hi.jpg" alt="Gallery" />
                </div>
                <div class="gallery-image-title">
                    <div class="gallery-title">
                        <span>Numbers of Sample</span>
                    </div>
                </div>
            </a>
        </div>
    )
};


export default Gallery;