import React from "react";
import navLogo from "../assets/images/chitrawan-khabar-logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 mt-10">
      <div className="container mx-auto px-5 py-6 mt-5  lg:px-32">
        <div className="space-y-2">
          <img className="w-44" src={navLogo} alt="" />
          <p>P.L. Multimedia Services Pvt. Ltd. (chitrawankhabar.com)</p>
          <p>Head Office: Bharatpur-20, Bhimnagar</p>
          <p>Liaison Office: Bharatpur-10, Syaulibazzar</p>
          <p>Contact Number: 056-537276</p>
          <p>Email: contact@chitrawankhabar.com</p>
        </div>

        <hr className="mt-10 border-gray-300" />

        <div className="mt-5 text-center">
          <p>© Copyright P.L. Multimedia Services Pvt. Ltd.</p>

          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
