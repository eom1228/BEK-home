import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import GalleryElement from './GalleryElement';
import GalleryNavbar from './GalleryNavbar';
import {
  GalleryItems,
  GalleryItemsTwo,
  GalleryItemsThree,
  GalleryItemsFour,
  GalleryItemsFive,
  GalleryItemList,
} from './Gallery';
import './gallery.scss';

import '.';

function Gallery({ handleClick, categories, projectsy }) {
  const [projects, setProjects] = useState([...GalleryItemList]);
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

  const location = useLocation();

  // const handleClick = (id, value) => {
  //   setCategories(
  //     categories.map((category) => {
  //       if (location.pathname === '/projects') {
  //         return { ...category, clicked: false };
  //       } else if (category.id === id) {
  //         return { ...category, clicked: true };
  //       } else {
  //         return { ...category, clicked: false };
  //       }
  //       console.log(categories);
  //     })
  //   );
  // };

  return (
    <div class='container' style={{marginTop: '50px'}}>
      <GalleryNavbar
        categories={categories}
        projects={projects}
        handleClick={handleClick}
      />
      {/* <Outlet /> */}
      <GalleryElement categories={categories} projects={projects} />
    </div>
  );
}

export default Gallery;
