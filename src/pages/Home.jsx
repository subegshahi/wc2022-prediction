import React from "react";
import worldCup from "../assets/icons/world-cup.svg";
import wc2022Logo from "../assets/icons/wc2022-logo.svg";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/predict");
  };

  return (
    <section>
      <div className="container mx-auto px-5 mt-20 items-center lg:flex lg:px-32">
        <div className="border rounded-lg p-10 mt-20 lg:w-1/2">
          <div className="flex flex-col items-center">
            <img className="w-40" src={worldCup} alt="" />

            <div className="mt-5">
              <h1 className="font-semibold text-4xl text-center">Welcome</h1>
              <h2 className="text-lg text-gray-400 mt-2 text-center">
                Welcome! Please sign in with google account to continue.
              </h2>
            </div>
          </div>

          <button
            onClick={signInWithGoogle}
            className="bg-primary-500 text-white inline-block mt-5 w-full py-3 rounded-lg font-medium tracking-wide hover:bg-primary-400"
          >
            Sign in with Google
          </button>
        </div>

        <img
          className="w-full aspect-auto mt-10 lg:w-1/2 lg:-mt-5"
          src={wc2022Logo}
          alt=""
        />
      </div>
    </section>
  );
};
