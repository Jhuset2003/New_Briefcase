import React from 'react'
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Nav from './components/Nav/Nav';


function App() {
  return (
    <>
      <Nav/>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
          </Routes>

          <Footer/>
        
      </BrowserRouter>
      
    </>
  );
}

export default App;
