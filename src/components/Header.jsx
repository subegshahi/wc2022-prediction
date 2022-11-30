import React from "react";
import navLogo from "../assets/images/chitrawan-khabar-logo.png";

export const Header = () => {
  return (
    <header className=" text-gray-800 border-b border-gray-200">
      <div className="container mx-auto px-5 py-6 flex justify-between items-center lg:px-32">
        <img className="w-44" src={navLogo} alt="" />

        <nav className="space-x-10">
          <a className="font-semibold tracking-wide" href="#">
            Home
          </a>

          <a className="font-semibold tracking-wide" href="#">
            Fixtures
          </a>

          <a className="font-semibold tracking-wide" href="#">
            News
          </a>
        </nav>
      </div>
    </header>
  );
};
