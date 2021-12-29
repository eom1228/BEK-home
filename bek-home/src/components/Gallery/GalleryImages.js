import image1 from '../../images/sample.jpeg';
import image2 from '../../images/fnt_sampleImg.jpeg';

const GalleryImages = () => {
    var image;
    for (var i = 0; i < 20; i++) {
        if (i % 2 == 0 ) {
             image =  image2;
        }else{
            image = image1;
        }

    }
            return (

                <>
                    <img src={image} alt="Gallery" />
                </>

            )
        };

export default GalleryImages;