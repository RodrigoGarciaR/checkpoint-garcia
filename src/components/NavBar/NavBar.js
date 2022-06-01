import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="flex items-center justify-between bg-black">
            <Link to="/">
                <img src="/logo.png" className="max-h-24" />
            </Link>
            <div>
                <ul className="flex items-center text-white">
                    <Link to="/">
                        <li className="px-5">Home</li>
                    </Link>
                    <div className="dropdownContainer">
                        <Link to="/category/productos">
                            <li className="px-5">Productos</li>
                        </Link>
                        <ul>
                            <Link to="/category/Nintendo">
                                <li>Nintendo</li>
                            </Link>
                            <Link to="/category/PlayStation">
                                <li>PlayStation</li>
                            </Link>
                            <Link to="/category/Xbox">
                                <li>Xbox</li>
                            </Link>
                        </ul>
                    </div>
                    <CartWidget />
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
