import React from 'react';
import { useParams } from 'react-router-dom';
import GalleryNavbar from './GalleryNavbar';

const GalleryDevelopmentItem = ({ categories, handleClick }) => {
  let { id } = useParams();

  const matchedItem = categories[5].projects.find(
    (project) => String(project.id) === id
  );

  console.log(matchedItem);
  console.log(
    categories[5].projects.find((project) => String(project.id) === id)
  );

  return (
    <>
      {matchedItem ? (
        <div class='container' style={{ marginTop: '50px' }}>
          <GalleryNavbar categories={categories} handleClick={handleClick} />
          <div className='galleryItem__card'>
            {/* <Outlet /> */}
            <div className='galleryItem__title'>
              <h2>{matchedItem.title}</h2>
            </div>
            <div className='galleryItem__description'>
              <p>{matchedItem.description}</p>
            </div>
            <div className='galleryItem__image'>
              <div className='overlay'></div>
              <img src={matchedItem.imageURL} alt='GalleryItem' />
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default GalleryDevelopmentItem;
