import React, { useState } from 'react';
import {
  Link,
  Routes,
  Route,
  useParams,
  Outlet,
  useLocation,
} from 'react-router-dom';
import GalleryBrandingItem from './GalleryBrandingItem';
import GalleryTest from './GalleryTest';

const GalleryBrandingList = ({ project, categories }) => {
  // const { id } = useParams();
  // const { id } = useParams();
  // const projectItem = projects.find((el) => el.id === id);
  const [projectClicked, setProjectClicked] = useState(false);

  const location = useLocation();
  const handleClickBrand = () => {
    setProjectClicked(true);
  };
  return (
    <>
      {/* {location.pathname === '/projects/Branding' && ( */}
      {console.log(projectClicked)}

      <div className='gallery__card' onClick={handleClickBrand}>
        <Link to={`/projects/Branding/${project.id}`} className='gallery__link'>
          <div className='gallery__link--image'>
            <div className='overlay'></div>
            <img src={project.imageURL} alt='Gallery' />
          </div>
          <div className='gallery__link-title'>
            <span>{project.title}</span>
          </div>
        </Link>
        <Link to={'/projects/Branding/hi'}>hi</Link>
      </div>

      {/* )} */}

      {/* <div className='gallery__card'> */}
    </>
  );
};

export default GalleryBrandingList;
