import React from 'react'
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Nav from './components/Nav/Nav';
import AboutMe from './Pages/AboutMe';
import Works from './Pages/Works';
import CV from './Pages/CV';


function App() {
  return (
    <>
      <Nav/>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/AboutMe' element={<AboutMe/>} />
            <Route path='/Works' element={<Works/>} />
            <Route path='/CV' element={<CV/>} />
          </Routes>

          <Footer/>
        
      </BrowserRouter>
      
    </>
  );
}

export default App;
