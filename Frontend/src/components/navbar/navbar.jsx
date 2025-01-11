import React from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function navbar() {
  return (
    <nav className="bg-slate-600 py-4 shadow-md">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <ul className="flex items-center">
            <NavLink to="/">
              <li>logo</li>
            </NavLink>
          </ul>

          {/* Search Section */}
          <div className="flex">
            <span className="flex items-center">
              <input
                type="text"
                className="px-3 bg-slate-500 w-[400px]  py-2 rounded-l-lg  focus:outline-none focus:ring-1 focus:ring-white"
              />
              <button className="px-4 py-3 bg-green-400 rounded-r-lg hover:bg-green-600 transition-colors  border-l-0">
                <FaSearch width={20} color="white"/>
              </button>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center">
            <ul className="flex gap-10 items-center">
              <NavLink to="/license">
                <li className=" hover:text-white cursor-pointer transition-colors">
                  License
                </li>
              </NavLink>
              <NavLink to="/pricing">
                <li className=" hover:text-white cursor-pointer transition-colors">
                  Pricing
                </li>
              </NavLink>
              <NavLink to="/download">
                <li className=" hover:text-white cursor-pointer transition-colors bg-green-400 px-2 rounded-xl  py-1">
                  Get unlimited download
                </li>
              </NavLink>
              <NavLink to="/sign-in">
                <li className=" hover:text-white cursor-pointer transition-colors">
                  Sign in
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
