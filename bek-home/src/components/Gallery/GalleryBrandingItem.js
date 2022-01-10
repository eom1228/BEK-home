import React from 'react';
import { useParams } from 'react-router-dom';
import GalleryNavbar from './GalleryNavbar';

const GalleryBrandingItem = ({ categories, handleClick }) => {
  let { id } = useParams();

  const matchedItem = categories[1].projects.find(
    (project) => String(project.id) === id
  );

  console.log(matchedItem);
  console.log(
    categories[1].projects.find((project) => String(project.id) === id)
  );

  return (
    <>
      {matchedItem ? (
        <>
          <div class='container'>
            <GalleryNavbar categories={categories} handleClick={handleClick} />
            <div className='galleryItem'>
              <div className='galleryItem__title' style={{ width: '100%' }}>
                <h2>{matchedItem.title}</h2>
              </div>
              <div className='galleryItem__description'>
                <p>{matchedItem.description}</p>
              </div>
              <div className='galleryItem__card'>
                {/* <Outlet /> */}

                <div
                  className='galleryItem__image'
                  style={{ columnCount: '1', width: '100%' }}
                >
                  <div className='overlay'></div>
                  <img src={matchedItem.imageURL[0]} alt='GalleryItem' />
                  {/* <img src={matchedItem.imageURL[1]} alt='GalleryItem' /> */}
                </div>
                <div
                  className='galleryItem__image'
                  style={{ columnCount: '1', width: '100%' }}
                >
                  <div className='overlay'></div>

                  <img src={matchedItem.imageURL[1]} alt='GalleryItem' />
                </div>
              </div>
            </div>
          </div>
          {/* <div className='galleryItem2Col__card'>
            <div className='galleryItem2Col__image'>
              <div className='overlay'></div>
              <img src={matchedItem.imageURL} alt='GalleryItem2Col' />
            </div>
          </div> */}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default GalleryBrandingItem;
