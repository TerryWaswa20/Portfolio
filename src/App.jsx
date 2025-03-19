import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home'; // Import Home component
import About from './components/About'; // Import About component
import Navbar from './components/NavBar'; // Import Navbar component
import Projects from './components/project'; // Import Projects component
import Contact from './components/Contact'; // Import Contact component
import Portfolio from './components/Portfolio'; // Import Portfolio component
import Footer from './components/Footer'; // Import Footer component

function App() {
  return (
    <Router>
      <Navbar /> {/* Your Navbar goes here */}
      <Routes>
        {/* Define the routes */}
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/about" element={<About />} /> {/* About page */}
        <Route path="/projects" element={<Projects />} /> {/* Projects page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        <Route path="/portfolio" element={<Portfolio />} /> {/* Portfolio page */}
      </Routes>
      <Footer /> {/* Footer goes here, outside of Routes so it appears on all pages */}
    </Router>
  );
}

export default App;
