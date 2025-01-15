import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 bg-white border-b border-neutral-200/80 px-4 py-4 flex items-center justify-between z-50">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-16">
          {/* Logo and Main Nav */}
          <div className="flex justify-center items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold">
                <NavLink to="/">Logo</NavLink>
              </span>
            </div>

            <div className="hidden lg:ml-16 lg:mr-4 lg:flex lg:space-x-6 lg:justify-center lg:items-center">
              <ul className="flex space-x-6">
                <li className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                  <NavLink to="/web">Website Templates</NavLink>
                </li>
                <li className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                  <NavLink to="/code">Code</NavLink>
                </li>
                <li className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                  <NavLink to="/video">Video</NavLink>
                </li>
                <li className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                  <NavLink to="/music">Audio</NavLink>
                </li>
                <li className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                  <NavLink to="/graphics">Graphics</NavLink>
                </li>
                <li className="flex items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                  <NavLink to="/photos">Photos</NavLink>
                </li>
                <li className="flex items-center px-3 text-gray-700 hover:text-gray-900 cursor-pointer">
                  <NavLink to="/dimension">3D</NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Search and Right Nav */}
          <div className="flex items-center">
            {/* Search Bar */}
            <div className="flex-shrink-0 w-full sm:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full sm:w-64 rounded-lg border border-gray-300 pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
              </div>
            </div>

            {/* Right Nav */}
            <div className="hidden lg:ml-4 lg:flex lg:items-center lg:space-x-4">
              <ul className="flex space-x-4">
                <li className="flex justify-center items-center text-gray-700 hover:text-gray-900 cursor-pointer">
                  Get Unlimited Download
                </li>
                <li className="p-2 text-gray-700 hover:text-gray-900 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </li>
                <li className="p-2 text-gray-700 hover:text-gray-900 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <ul className="flex flex-col space-y-4">
              <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
                <NavLink to="/website-templates">Website Templates</NavLink>
              </li>
              <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
                <NavLink to="/code">Code</NavLink>
              </li>
              <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
                <NavLink to="/video">Video</NavLink>
              </li>
              <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
                <NavLink to="/audio">Audio</NavLink>
              </li>
              <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
                <NavLink to="/graphics">Graphics</NavLink>
              </li>
              <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
                <NavLink to="/photos">Photos</NavLink>
              </li>
              <li className="text-gray-700 hover:text-gray-900 cursor-pointer">
                <NavLink to="/3d">3D</NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
