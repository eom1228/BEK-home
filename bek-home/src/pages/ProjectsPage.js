import React from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
// import GalleryNavbar from '../components/Gallery/GalleryNavbar';
import Gallery from '../components/Gallery';
import GalleryBrandingList from '../components/Gallery/GalleryBrandingList';
import GalleryMarketingList from '../components/Gallery/GalleryMarketingList';
import GalleryPhotographyList from '../components/Gallery/GalleryPhotographyList';
import GalleryDesignList from '../components/Gallery/GalleryDesignList';
import GalleryDevelopmentList from '../components/Gallery/GalleryDevelopmentList';
import GalleryElement from '../components/Gallery/GalleryElement';

const ProjectsPage = ({ handleClick, categories }) => {
  return (
    <>
      {/* <GalleryNavbar /> */}
      <Gallery handleClick={handleClick} categories={categories}></Gallery>
      {/* <Routes>
        <Route
          path='/'
          element={
            <Gallery
              handleClick={handleClick}
              categories={categories}
            ></Gallery>
          }
        >
          <Route index element={<GalleryElement categories={categories} />} />
          <Route
            path='Branding/*'
            element={<GalleryBrandingList categories={categories} />}
          />

          <Route path='Marketing' element={<GalleryMarketingList />} />
          <Route path='Design' element={<GalleryDesignList />} />
          <Route path='Photography' element={<GalleryPhotographyList />} />
          <Route path='Development' element={<GalleryDevelopmentList />} />
        </Route>
      </Routes> */}
    </>
  );
};

export default ProjectsPage;
