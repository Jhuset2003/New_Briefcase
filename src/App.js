import React from 'react'
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Nav from './components/Nav/Nav';
import AboutMe from './Pages/AboutMe';
import Works from './Pages/Works';


function App() {
  return (
    <>
      <Nav/>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/AboutMe' element={<AboutMe/>} />
            <Route path='/Works' element={<Works/>} />
          </Routes>

          <Footer/>
        
      </BrowserRouter>
      
    </>
  );
}

export default App;
