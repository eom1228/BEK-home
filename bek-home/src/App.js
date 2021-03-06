import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import GalleryBrandingList from './components/Gallery/GalleryBrandingList';
import GalleryMarketingList from './components/Gallery/GalleryMarketingList';
import GalleryDesignList from './components/Gallery/GalleryDesignList';
import GalleryPhotographyList from './components/Gallery/GalleryPhotographyList';
import GalleryDevelopmentList from './components/Gallery/GalleryDevelopmentList';
import {
  GalleryItemList,
  GalleryItems,
  GalleryItemsTwo,
  GalleryItemsThree,
  GalleryItemsFour,
  GalleryItemsFive,
} from '../src/components/Gallery/Gallery';
import GalleryBrandingItem from './components/Gallery/GalleryBrandingItem';
import GalleryDesignItem from './components/Gallery/GalleryDesignItem';
import GalleryMarketingItem from './components/Gallery/GalleryMarketingItem';
import GalleryPhotographyItem from './components/Gallery/GalleryPhotographyItem';
import GalleryDevelopmentItem from './components/Gallery/GalleryDevelopmentItem';
import Layout from './pages/Layout';
import AboutPage3 from './pages/AboutPage3';
import AboutPage from './pages/AboutPage';

function App() {
  const [projects, setProjects] = useState([...GalleryItemList]);
  // const [projects, setProjects] = useState({
  //   name: 'All',
  //   clicked: false,
  //   projects: [...GalleryItemList]
  // })
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'All',
      clicked: false,
      projects: [...GalleryItemList],
    },
    {
      id: 2,
      name: 'Branding',
      clicked: false,
      projects: [...GalleryItems],
    },
    {
      id: 3,
      name: 'Marketing',
      clicked: false,
      projects: [...GalleryItemsTwo],
    },
    {
      id: 4,
      name: 'Design',
      clicked: false,
      projects: [...GalleryItemsThree],
    },
    {
      id: 5,
      name: 'Photography',
      clicked: false,
      projects: [...GalleryItemsFour],
    },
    {
      id: 6,
      name: 'Development',
      clicked: false,
      projects: [...GalleryItemsFive],
    },
  ]);

  const handleClick = (id, value) => {
    setCategories(
      categories.map((category) => {
        if (value === 'projects') {
          return { ...category, clicked: false };
        } else if (category.id === id) {
          return { ...category, clicked: true };
        } else {
          return { ...category, clicked: false };
        }
        console.log(categories);
      })
    );
  };
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Layout
              handleClick={handleClick}
              categories={categories}
              exact={true}
            />
          }
        >
          <Route index element={<LandingPage />} />
          <Route
            path='/projects'
            element={
              <ProjectsPage handleClick={handleClick} categories={categories} />
            }
          >
            <Route
              path='/projects/Branding/*'
              element={<GalleryBrandingList categories={categories} />}
            ></Route>

            <Route path='Marketing/*' element={<GalleryMarketingList />} />
            <Route path='Design' element={<GalleryDesignList />} />
            <Route path='Photography' element={<GalleryPhotographyList />} />
            <Route path='Development' element={<GalleryDevelopmentList />} />
          </Route>
          <Route
            path='/projects/Branding/:id'
            element={
              <GalleryBrandingItem
                handleClick={handleClick}
                projects={projects}
                categories={categories}
              />
            }
          />
          <Route
            path='/projects/Marketing/:id'
            element={
              <GalleryMarketingItem
                handleClick={handleClick}
                projects={projects}
                categories={categories}
              />
            }
          />
          <Route
            path='/projects/Design/:id'
            element={
              <GalleryDesignItem
                handleClick={handleClick}
                projects={projects}
                categories={categories}
              />
            }
          />
          <Route
            path='/projects/Photography/:id'
            element={
              <GalleryPhotographyItem
                handleClick={handleClick}
                projects={projects}
                categories={categories}
              />
            }
          />
          <Route
            path='/projects/Development/:id'
            element={
              <GalleryDevelopmentItem
                handleClick={handleClick}
                projects={projects}
                categories={categories}
              />
            }
          />
          <Route path='about3' element={<AboutPage3 />}></Route>
          <Route path='about' element={<AboutPage />}></Route>
          <Route path='contact' element={<ContactPage />} />
          <Route path='notfound' element={<NotFoundPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
