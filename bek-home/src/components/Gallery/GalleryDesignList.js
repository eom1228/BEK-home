import React from 'react';
import { Link } from 'react-router-dom';

const GalleryDesignList = ({ project }) => {
  return (
    <div className='gallery__card'>
      <Link to={`${project.link}/${project.id}`} className='gallery__link'>
        <div className='gallery__link--image'>
          <div className='overlay'></div>
          <img src={project.imageURL[0]} alt='Gallery' />
        </div>
        <div className='gallery__link-title'>
          <span>{project.title}</span>
        </div>
      </Link>
    </div>
  );
};

export default GalleryDesignList;
