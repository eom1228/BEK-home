import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Branding from './components/AboutPage/branding';
import Marketing from './components/AboutPage/marketing';
import Media from './components/AboutPage/media';
import Photography from './components/AboutPage/photography';
import Development from './components/AboutPage/development';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/about' element={<AboutPage />}>
          <Route path='/about/branding' element={<Branding />} />
          <Route path='/about/marketing' element={<Marketing />} />
          <Route path='/about/media' element={<Media />} />
          <Route path='/about/photography' element={<Photography />} />
          <Route path='/about/development' element={<Development />} />
        </Route>
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
