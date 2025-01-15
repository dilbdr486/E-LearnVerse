import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow p-4"> {/* Content area with padding */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
