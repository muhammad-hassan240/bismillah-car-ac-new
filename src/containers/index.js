import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import ServiceDetails from "./ServiceDetails";

const Containers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<ServiceDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Containers;
