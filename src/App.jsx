import React from "react";
import { Home } from "./pages/Home";
import { LogIn } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import { Predict } from "./pages/Predict";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <LogIn />
      <SignUp />
      <Predict />
    </div>
  );
};
