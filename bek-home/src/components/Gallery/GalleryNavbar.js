import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './GalleryNavbar.scss';

const GalleryNavbar = ({ categories, handleClick }) => {
  const location = useLocation();
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
          {console.log(category.name)}
          <NavLink
            end
            to={
              category.name === 'All'
                ? `/projects`
                : `/projects/${category.name}`
            }
            className='list_item_links'
            style={({ isActive }) => ({
              textDecoration:
                isActive || location.pathname.indexOf(`${category.name}`) > -1
                  ? 'underline'
                  : 'none',
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
