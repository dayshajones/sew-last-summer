import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/faq">FAQ</Link>
        </div>
    )
}

export default Navbar