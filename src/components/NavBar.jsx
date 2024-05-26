import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {

  const [menu, showMenu] = useState(false);

  const toggleMenu = () => {
    showMenu(!menu);
  }

  return (
    <>
        <nav className="bg-white text-black fixed top-0 w-full flex justify-between items-center px-4 py-2 z-50"> {/* Adjustments for responsiveness */}
          <a href="/" className="text-3xl font-bold pl-3">
            <span>TJ Consortium</span>
          </a>
          <ul className={menu ? "visible md:flex space-x-8" : "hidden md:flex space-x-8"}> {/* Hide on mobile, show on medium and larger screens */}
            <li>
              <Link to="/" className="hover:text-gray-400 text-lg">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400 text-lg">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400 text-lg">Blogs</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400 text-lg">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400 text-lg">Contact</Link>
            </li>
          </ul>
          {/* Optional: Hamburger menu for mobile */}
          <button className="md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-lg p-2" onClick={toggleMenu}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" clipRule="evenodd" />
            </svg>
          </button>
      </nav>
    </>

  );
};

export default NavBar;
