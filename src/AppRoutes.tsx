import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './app/pages/Home'; 
import Contact from './app/pages/Contact';
import Blog from './app/pages/Blog';
import About from './app/pages/About';
import SingleBlogPost from './components/blog/SingleBlogPost'; 

const AppRoutes: React.FC = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:id" element={<SingleBlogPost posts={[]} />} /> {/* Pass posts as prop */}
        </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
