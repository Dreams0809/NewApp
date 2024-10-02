import React from "react";
import "./css/App.css";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Create from './pages/Create'
import Profile from './pages/Profile'
import { Routes, Route, Link } from "react-router-dom";
import Signin from "./Components/Signin";

export default function App() {
  return (
    <>
      <Header />
      {/* You can add Link button here or below the Routes group, not inside the Routes */}
      <Link to="/login" style={{textDecoration: 'none'}}><h4>To Login</h4></Link>
      <Routes>
        {/* Home component is displayed when the /home path is visited *  */}
        <Route path="/home" element={<Home />} />

        {/* Add more routes here */}
        <Route path="/login" element={<Signin />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}
