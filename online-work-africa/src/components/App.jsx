import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Pages/Layout";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import AboutUs from "../Pages/About us";
import "../styles/App.css";
import Blog from "../Pages/Blog";
import Trainers from "../Pages/Trainers";
import Sponsors from "../Pages/Sponsors";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About us" element={<AboutUs/>} />
          <Route path="Trainers" element={<Trainers/>} />
          <Route path="Sponsors" element={<Sponsors/>} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}