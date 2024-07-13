import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import BookDetails from './pages/BookDetails';

const App = () => {
  const getbook = async ()=>{
    const url = "https://openlibrary.org/search.json?title=hello";
    const response = await fetch(url);
    const resJson = await response.json();
    console.log(resJson);
  }
  getbook();
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/book/:id' element={<BookDetails />} />
      </Routes>
    </div>
  )
}

export default App
