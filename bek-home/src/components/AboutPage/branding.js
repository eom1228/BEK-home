import React from 'react';
import { Outlet } from 'react-router-dom';

const Branding = ({ isOpen }) => {
  return (
    <>{isOpen && <Outlet />}</>
  )
  
};

export default Branding;
