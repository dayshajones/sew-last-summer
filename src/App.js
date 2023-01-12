import './App.css';
import React from "react";
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductContainer from './components/ProductContainer';

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/donations" element={<ProductContainer/>} />
      </Routes>
    </>
  );
}

export default App;
