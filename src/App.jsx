import React from "react";
import { Header } from "./pages/Header";
import { Predict } from "./pages/Predict";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Footer } from "./pages/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <Login />
      <Signup />
      <Predict />
      <Footer />;
    </>
  );
};
