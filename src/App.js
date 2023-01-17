import './App.css';
import React from "react";
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductContainer from './components/ProductContainer';
import About from './components/About';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Cart from './components/Cart'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<ProductContainer/>} />
        <Route path="/about" element={<About/> } />
        <Route path="/contact" element={<Contact/> } />
        <Route path="/faq" element={<Faq/> } />
        <Route path="/cart" element={<Cart/> } />
      </Routes>
    </>
  );
}

export default App;
