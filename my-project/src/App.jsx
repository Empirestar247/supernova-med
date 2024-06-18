import React, { useEffect } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews'; // Corrected the import to use the correct casing
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/reviews' element={<Reviews />} /> {/* Corrected the casing here */}
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
