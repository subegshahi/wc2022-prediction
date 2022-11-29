import React from "react";
import worldCup from "../assets/icons/world-cup.svg";

export const Login = () => {
  return (
    <section className="text-gray-800 ">
      <div className="container mx-auto px-5">
        <div className="border rounded-lg p-10 mt-24">
          <div className="flex flex-col items-center">
            <img className="w-40" src={worldCup} alt="" />

            <div className="mt-5">
              <h1 className="font-semibold text-4xl text-center">
                Welcome back
              </h1>
              <h2 className="text-lg text-gray-400 mt-2">
                Welcome back! Please enter your details
              </h2>
            </div>
          </div>

          <form className="mt-10" action="">
            <div>
              <label className="block" htmlFor="">
                Email
              </label>

              <input
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                type="Email"
                placeholder="Enter your email"
              />
            </div>

            <div className="mt-5">
              <label className="block" htmlFor="">
                Password
              </label>

              <input
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                type="Password"
                placeholder="Enter your password"
              />
            </div>

            <button className="bg-primary-500 text-white inline-block mt-5 w-full py-3 rounded-lg font-medium tracking-wide hover:bg-primary-400">
              Log in
            </button>
          </form>

          <p className="mt-2">
            Don't have account?{" "}
            <span className="text-primary-500">Sign up</span>
          </p>
        </div>
      </div>
    </section>
  );
};
