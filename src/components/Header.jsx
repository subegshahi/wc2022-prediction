import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/images/chitrawan-khabar-logo.png";

export const Header = () => {
  return (
    <header className=" text-gray-800 border-b border-gray-200">
      <div className="container mx-auto px-5 py-6 flex justify-between items-center lg:px-32">
        <img className="w-44" src={navLogo} alt="" />

        <nav className="space-x-10">
          {/* <Link className="font-semibold tracking-wide" to="/">
            Home
          </Link> */}

          {/* <Link className="font-semibold tracking-wide" to="/login">
            Log in
          </Link> */}

          {/* <Link className="font-semibold tracking-wide" to="/signup">
            Sign up
          </Link> */}

          <Link className="font-semibold tracking-wide" to="/predict">
            Predict
          </Link>
        </nav>
      </div>
    </header>
  );
};
