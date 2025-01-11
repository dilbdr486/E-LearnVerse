import React from "react";
import { NavLink } from "react-router-dom";

function header() {
  return (
    <header className="py-4 bg-slate-600 shadow">
      <div className="mx-auto max-w-screen-xl">
        <ul className="flex gap-9 justify-start">
          <li className="group">
            <NavLink
              to="/web"
              className={({ isActive }) =>
                `${
                  isActive ? "text-white" : ""
                } border-gray-300 hover:text-gray-200 rounded-lg`
              }
            >
              Web themes & Templates
            </NavLink>
            {/* Hover content */}
            {/* <div className="hidden group-hover:block absolute bg-gray-800 text-white p-2 mt-2 rounded">
              
            </div> */}
          </li>
          <li className="group relative">
            <NavLink
              to="/code"
              className={({ isActive }) =>
                `${
                  isActive ? "text-white" : ""
                } border-gray-300 hover:text-gray-200 rounded-lg`
              }
            >
              Code
            </NavLink>
            {/* Hover content */}
            <div className="hidden group-hover:block absolute bg-gray-800 text-white p-4 mt-0 rounded">
              <div className="flex justify-between gap-4">
                <div>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">PHP</li>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">JavaScript</li>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">CSS</li>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">C++</li>
                </div>
                <div>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">C</li>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">Java</li>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">TailwindCSS</li>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">HTML</li>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <NavLink
              to="/video"
              className={({ isActive }) =>
                `${
                  isActive ? "text-white" : ""
                } border-gray-300 hover:text-gray-200 rounded-lg`
              }
            >
              Video
            </NavLink>
            {/* Hover content */}
            <div className="hidden group-hover:block absolute bg-gray-800 text-white p-2 mt-0 rounded">
              <div className="flex justify-between gap-4">
                <div>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">After Effect</li>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">Primier Pro</li>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">Apple Motion</li>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">Final Cut Pro</li>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <NavLink
              to="/music"
              className={({ isActive }) =>
                `${
                  isActive ? "text-white" : ""
                } border-gray-300 hover:text-gray-200 rounded-lg`
              }
            >
              Audio
            </NavLink>
            {/* Hover content */}
            <div className="hidden group-hover:block absolute bg-gray-800 text-white p-2 mt-0 rounded">
              <div className="flex justify-between gap-4">
                <div>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">Sound Effect</li>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">Logos & Idents</li>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">Music</li>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <NavLink
              to="/graphics"
              className={({ isActive }) =>
                `${
                  isActive ? "text-white" : ""
                } border-gray-300 hover:text-gray-200 rounded-lg`
              }
            >
              Graphics
            </NavLink>
            {/* Hover content */}
            <div className="hidden group-hover:block absolute bg-gray-800 text-white p-2 mt-0 rounded">
              <div className="flex justify-between gap-4">
                <div>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">Icons</li>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">Fonts</li>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">Logos</li>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">Presentations</li>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <NavLink
              to="/photos"
              className={({ isActive }) =>
                `${
                  isActive ? "text-white" : ""
                } border-gray-300 hover:text-gray-200 rounded-lg`
              }
            >
              Photos
            </NavLink>
            {/* Hover content */}
            <div className="hidden group-hover:block absolute bg-gray-800 text-white p-2 mt-0 rounded">
              <div className="flex justify-between gap-4">
                <div>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">Animal</li>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">Architectures</li>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">Bussiness</li>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">Food</li>
                </div>
                <div>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">Healths</li>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">People</li>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">Travel</li>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">Mountain</li>
                </div>
              </div>
            </div>
          </li>
          <li className="group">
            <NavLink
              to="/dimension"
              className={({ isActive }) =>
                `${
                  isActive ? "text-white" : ""
                } border-gray-300 hover:text-gray-200 rounded-lg`
              }
            >
              3D
            </NavLink>
            {/* Hover content */}
            <div className="hidden group-hover:block absolute bg-gray-800 text-white p-2 mt-0 rounded">
              <div className="flex justify-between gap-4">
                <div>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">3D Models</li>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">Cars</li>
                  <li className="py-1 hover:text-gray-500 cursor-pointer">Materials & Shaders</li>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default header;
