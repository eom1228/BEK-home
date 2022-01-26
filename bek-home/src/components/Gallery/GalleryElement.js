import React, { useState, useEffect } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import {
  Link,
  Routes,
  Route,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import {
  GalleryItemList,
  GalleryItems,
  GalleryItemsTwo,
  GalleryItemsThree,
  GalleryItemsFour,
  GalleryItemsFive,
} from './Gallery';
import GalleryBrandingList from './GalleryBrandingList';
import GalleryDesignList from './GalleryDesignList';
import GalleryDevelopmentList from './GalleryDevelopmentList';
import GalleryMarketingList from './GalleryMarketingList';
import GalleryPhotographyList from './GalleryPhotographyList';
import GalleryBrandingItem from './GalleryBrandingItem';
import GalleryTest from './GalleryTest';

const GalleryElement = ({ categories, projects }) => {
  const location = useLocation();
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className='gallery'>
        {console.log(GalleryItemList)}

        {location.pathname === '/projects' &&
          projects.map((item, index) => (
            <div className='gallery__card' key={index}>
              <Link
                to={`${item.link}/${item.id}`}
                className='gallery__link'
                data-aos='fade-up'
              >
                <div className='gallery__link--image'>
                  <div className='overlay'></div>
                  <img src={item.imageURL[0]} alt='Gallery' />
                </div>
                <div className='gallery__link-title'>
                  <span>{item.title}</span>
                </div>
              </Link>
            </div>
          ))}

        {categories[1].clicked &&
          // !projectClicked &&
          categories[1].projects.map((project, index) => (
            <GalleryBrandingList
              categories={categories}
              project={project}
              key={project.id}
            />

            // <div class='gallery__card'>
            //   <Link to='{project.link}' class='gallery__link'>
            //     <div class='gallery__link--image'>
            //       <div class='overlay'></div>
            //       <img src={project.imageURL} alt='Gallery' />
            //     </div>
            //     <div class='gallery__link-title'>
            //       <span>{project.title}</span>
            //     </div>
            //   </Link>
            // </div>
          ))}

        {/* {projectClicked &&
          categories[0].projects.filter((project, index) => (
            <GalleryBrandingItem
              categories={categories}
              project={project}
              key={project.id}
              handleClickBrand={handleClickBrand}
            />
            //filter 해야지
          ))} */}
        {/* {categories[0].clicked && categories[0].projects} */}
        {categories[2].clicked &&
          categories[2].projects.map((project, index) => (
            <GalleryMarketingList project={project} key={project.id} />

            // <div class='gallery__card'>
            //   <Link to='{project.link}' class='gallery__link'>
            //     <div class='gallery__link--image'>
            //       <div class='overlay'></div>
            //       <img src={project.imageURL} alt='Gallery' />
            //     </div>
            //     <div class='gallery__link-title'>
            //       <span>{project.title}</span>
            //     </div>
            //   </Link>
            // </div>
          ))}

        {categories[3].clicked &&
          categories[3].projects.map((project, index) => (
            <GalleryDesignList project={project} key={project.id} />
            // <div class='gallery__card'>
            //   <Link to='{project.link}' class='gallery__link'>
            //     <div class='gallery__link--image'>
            //       <div class='overlay'></div>
            //       <img src={project.imageURL} alt='Gallery' />
            //     </div>
            //     <div class='gallery__link-title'>
            //       <span>{project.title}</span>
            //     </div>
            //   </Link>
            // </div>
          ))}
        {categories[4].clicked &&
          categories[4].projects.map((project, index) => (
            <GalleryPhotographyList project={project} key={project.id} />
          ))}

        {categories[5].clicked &&
          categories[5].projects.map((project, index) => (
            <GalleryDevelopmentList project={project} key={project.id} />
          ))}
      </div>
    </>
  );
};

export default GalleryElement;
