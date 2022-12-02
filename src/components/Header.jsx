import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/images/chitrawan-khabar-logo.png";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/predict");
  };

  return (
    <header className=" text-gray-800 border-b border-gray-300">
      <div className="container mx-auto px-5 py-6 flex justify-between items-center lg:px-32">
        <img className="w-44" src={navLogo} alt="" />

        <nav className="space-x-10">
          <Link className="font-semibold tracking-wide" to="/">
            Home
          </Link>

          {/* <Link className="font-semibold tracking-wide" to="/login">
            Log in
          </Link> */}

          {/* <Link className="font-semibold tracking-wide" to="/signup">
            Sign up
          </Link> */}

          {/* <Link className="font-semibold tracking-wide" to="/predict">
            Log in
          </Link> */}

          <button
            onClick={signInWithGoogle}
            className="font-semibold tracking-wide"
          >
            Sign in
          </button>
        </nav>
      </div>
    </header>
  );
};
