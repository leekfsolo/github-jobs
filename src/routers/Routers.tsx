import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../app/home";
import Posts from "../app/posts";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/:id" element={<Posts />} />
      </Routes>
    </Router>
  );
};

export default Routers;
