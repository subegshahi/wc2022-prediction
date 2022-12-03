import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { LogIn } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import { Predict } from "./pages/Predict";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

export const App = () => {
  return (
    <div className="text-gray-800 bg-gray-100">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<LogIn />} /> */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/predict" element={<Predict />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};
