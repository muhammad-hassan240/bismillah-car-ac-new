import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import ServiceDetails from "./ServiceDetails";
import NavigationHeader from "../components/NavigationHeader";
import EmailModal from "../components/EmailModal";

const Containers = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <BrowserRouter>
        <NavigationHeader setShowModal={setShowModal} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" element={<ServiceDetails />} />
        </Routes>
        <EmailModal showModal={showModal} setShowModal={setShowModal} />
      </BrowserRouter>
    </>
  );
};

export default Containers;
