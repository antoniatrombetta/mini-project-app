import { useState } from 'react';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import './App.css';

function App() {
 return (
  <Router>
  <div className='App'>
    <Navbar />
    <Sidebar />
    <main className='main-content'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Roote path='/about' element={<About />} />
    </Routes>
    </main>
    <footer />
  </div>
  </Router>
 )
}

export default App
