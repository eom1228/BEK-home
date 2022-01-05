import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './GalleryNavbar.scss';

const GalleryNavbar = ({ categories, handleClick }) => {
  return (
    <ul className='categories_container'>
      {categories.map((category) => (
        <li className='categories_list_item' key={category.id}>
          {/* {category.clicked === true ? (
            <Link
              to={`/projects/${category.name}`}
              className='list_item_links'
              style={{ textDecoration: 'underline' }}
              onClick={() => handleClick(category.id)}
            >
              {category.name}
            </Link>
          ) :  */}
          <NavLink
            to={`${category.name}`}
            className='list_item_links'
            style={({ isActive }) => ({
              textDecoration: isActive ? 'underline' : 'none',
            })}
            onClick={() => handleClick(category.id)}
          >
            {category.name}
          </NavLink>

          {/* (
          <Link
            to={`/projects/${category.name}`}
            className='list_item_links'
            onClick={() => handleClick(category.id)}
          >
            {category.name}
          </Link>
          ) */}

          {/* } */}
        </li>
      ))}
    </ul>
  );
};

export default GalleryNavbar;
