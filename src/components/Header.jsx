import React from "react";
import navLogo from "../assets/images/chitrawan-khabar-logo.png";

export const Header = () => {
  return (
    <header className=" text-gray-800 border-b border-gray-200">
      <div className="container mx-auto px-32 py-6 flex justify-between items-center">
        <a href="#">
          <img className="w-44" src={navLogo} alt="" />
        </a>

        <div className="space-x-10">
          <a className="font-semibold " href="#">
            Home
          </a>
          <a className="font-semibold " href="#">
            Fixtures
          </a>
          <a className="font-semibold " href="#">
            News
          </a>
        </div>
      </div>
    </header>
  );
};
