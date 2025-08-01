import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] px-4 py-6 md:px-8 lg:px-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
