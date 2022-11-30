import React from "react";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Predict from "./pages/Predict";
import Footer from "./pages/Footer";

export const App = () => {
  return (
    <>
      <Navbar />
      <Login />
      <Signup />
      <Predict />
      {/* <Footer /> */};
    </>
  );
};
