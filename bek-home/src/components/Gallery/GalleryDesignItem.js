import React from 'react';
import { useParams } from 'react-router-dom';
import GalleryNavbar from './GalleryNavbar';

const GalleryDesignItem = ({ categories, handleClick }) => {
  let { id } = useParams();

  const matchedItem = categories[3].projects.find(
    (project) => String(project.id) === id
  );

  console.log(matchedItem);
  console.log(
    categories[3].projects.find((project) => String(project.id) === id)
  );

  return (
    <>
    
      {matchedItem ? (
        <>
          <section className='spareSpace'></section>
          <div class='container'>
            <GalleryNavbar categories={categories} handleClick={handleClick} />
            {/* <div className='galleryItem__card'>
            
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
          </div> */}

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
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default GalleryDesignItem;
