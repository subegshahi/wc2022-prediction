import React from "react";
import navLogo from "../assets/images/chitrawan-khabar-logo.png";

export const Header = () => {
  return (
    <header className=" text-gray-800 border-b border-gray-200">
      <div className="container mx-auto px-5 py-6 flex justify-between items-center lg:px-32">
        {/* <img className="w-44" src={navLogo} alt="" /> */}
        <h1 className="font-bold text-2xl">Logo.</h1>

        <nav className="space-x-5">
          <button className="border border-gray-300 rounded-md inline-block px-4 py-2">
            Login
          </button>

          <button className="bg-primary-500 text-white rounded-md inline-block px-4 py-2 hover:bg-primary-400">
            Sign up
          </button>
        </nav>
      </div>
    </header>
  );
};
