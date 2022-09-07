import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Features from '../Components/Features';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Home from './Home';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

       
    </Routes>
    </>
  );
}

export default App;
