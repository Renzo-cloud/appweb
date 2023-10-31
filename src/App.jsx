import { useState } from "react";
import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import Home from "./pages/Home/Home";
import Analytics from "./pages/Analytics/Analytics";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact";
import Login from "./pages/LoginPage/Login";

function App() {
  return (
    <div className="bg-gradient-to-r from-slate-700 to-violet-950 min-h-screen">
      <Router>
        <div className="App">
          <Navbar />
          <Login />
          <Analytics/>
          <div className="content">
            <Routes>
              <Route path="/Login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
