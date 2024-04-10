import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home'; 
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import About from './pages/About';
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
