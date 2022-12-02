import React from "react";
import worldCup from "../assets/icons/world-cup.svg";

export const Home = () => {
  return (
    <section className="text-gray-800 ">
      <div className="container mx-auto px-5 lg:px-32">
        <div className="border rounded-lg p-10 mt-20 ">
          <div className="flex flex-col items-center">
            <img className="w-40" src={worldCup} alt="" />

            <div className="mt-5">
              <h1 className="font-semibold text-4xl text-center">Welcome</h1>
              <h2 className="text-lg text-gray-400 mt-2 text-center">
                Welcome! Please log in with your google account to proceed
              </h2>
            </div>
          </div>

          <form className="mt-2" action="">
            <button className="bg-primary-500 text-white inline-block mt-5 w-full py-3 rounded-lg font-medium tracking-wide hover:bg-primary-400">
              Log in with Google
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
