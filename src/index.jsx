import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./pages/Header";
import { Predict } from "./pages/Predict";
import { Footer } from "./pages/Footer";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Login />
    <Signup />
    <Predict />
    {/* <Footer /> */}
  </React.StrictMode>
);
