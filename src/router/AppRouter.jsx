import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import MainLayout from "../components/layout/MainLayout";

// Public Pages
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Quotes = lazy(() => import("../pages/Quotes"));
const Financing = lazy(() => import("../pages/Financing"));
const GivingBack = lazy(() => import("../pages/GivingBack"));
const Login = lazy(() => import("../pages/Login"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

// Admin Pages
const AdminDashboard = lazy(() => import("../pages/admin/AdminDashboard"));
const ServiceCreate = lazy(() => import("../pages/admin/ServiceCreate"));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="financing" element={<Financing />} />
          <Route path="giving-back" element={<GivingBack />} />


          {/* Public Route */}
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />




          {/* Private Routes WITHOUT nested layout */}
          <Route
            path="/adminDashboard"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/serviceCreate"
            element={
              <PrivateRoute>
                <ServiceCreate />
              </PrivateRoute>
            }
          />
        </Route>


        {/* Catch All */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
