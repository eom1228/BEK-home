import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {
  GalleryItemList,
  GalleryItems,
  GalleryItemsTwo,
  GalleryItemsThree,
  GalleryItemsFour,
  GalleryItemsFive,
} from './Gallery';
const GalleryBrandingItem = ({
  categories,
  project,
  handleClickBrand,
  projectClicked,
}) => {
  const location = useLocation();
  // const [categories, setCategories] = useState([
  //   {
  //     id: 1,
  //     name: 'Branding',
  //     clicked: false,
  //     projects: [...GalleryItems],
  //   },
  //   {
  //     id: 2,
  //     name: 'Marketing',
  //     clicked: false,
  //     projects: [...GalleryItemsTwo],
  //   },
  //   {
  //     id: 3,
  //     name: 'Design',
  //     clicked: false,
  //     projects: [...GalleryItemsThree],
  //   },
  //   {
  //     id: 4,
  //     name: 'Photography',
  //     clicked: false,
  //     projects: [...GalleryItemsFour],
  //   },
  //   {
  //     id: 5,
  //     name: 'Development',
  //     clicked: false,
  //     projects: [...GalleryItemsFive],
  //   },
  // ]);
  let { id } = useParams();
  // id = project.id;

  const projectItem = categories[0].projects.find((el) => el.id === id);
  console.log(id);
  // useEffect(() => {
  //   handleClickBrand();
  // }, [branding_id]);
  let matchedItems = categories[0].projects.find((matchedItem) => {
    if (matchedItem.id === id) return true;
  });
  // console.log(matchedItems);

  return (
    <>
      {/* <div className='gallery'>
        <div
          className='brand_item_section'
          style={{ background: 'blue', height: '500px' }}
        >
          {console.log(matchedItems.title)}
          <div className='brand_item_title'>{matchedItems.title}</div>
          <div className='brand_item_image'>
            <img src={matchedItems.imageURL} alt='Brand_item_img' />
          </div>
          <div>hi</div>
        </div>
      </div> */}

      {console.log(matchedItems)}
      {projectItem && (
        <div className='gallery__card'>
          {/* <Outlet /> */}
          <div className='gallery__link'>
            <div className='gallery__link--image'>
              <div className='overlay'></div>
              <img src={projectItem.imageURL} alt='Gallery' />
            </div>
            <div className='gallery__link-title'>
              <span>{projectItem.title}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );

  // else {
  //   return <div>{console.log(branding_id)}Loading3...</div>;
  // }
  // } else {
  //   return <div>Loading...</div>;
  // }
};

export default GalleryBrandingItem;
