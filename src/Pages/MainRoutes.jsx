import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import Bookings from "./Bookings";
import Checkout from "./Checkout";
import Home from "./Home";
import LandingPage from "./LandingPage";
import ServicePage from "./ServicePage";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/city" element={<Home />} />
        <Route path="/city/:id" element={<ServicePage />} />
        <Route path="/city/:id/checkout" element={<Checkout />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
