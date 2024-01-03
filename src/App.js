// src/App.js

import React from 'react';
import './App.css';
import CustomNavbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Footers from './components/Footer';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Service from './components/Service';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <div className="App bg-white overflow-hidden max-w-screen-2xl m-auto">
      <CustomNavbar />
      <Hero />
      <Categories />
      <Service/>
      <Section1/>
      <Section2/>
      <Footers />
    </div>
  );
}

export default App;
