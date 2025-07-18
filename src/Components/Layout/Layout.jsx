import React from "react";
import NavBar from "../Organisms/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Organisms/Footer";

function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
