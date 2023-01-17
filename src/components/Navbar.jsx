import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <ul className="topnav">
            <li><Link to="/">Home</Link></li>

            <li><Link to="/products">Products</Link></li>
            
            <li><Link to="/about">About</Link></li>

            <li><Link to="/contact">Contact</Link></li>

            <li><Link to="/faq">FAQ</Link></li>

            <li className="right"><Link to="/cart">Cart</Link></li>
        </ul>
    )
}

export default Navbar