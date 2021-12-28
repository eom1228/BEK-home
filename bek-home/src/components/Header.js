import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ location, history }) => {
  return (
    <header className='header'>
      <ul>
        <li>
          <Link to='/'>Logo</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
