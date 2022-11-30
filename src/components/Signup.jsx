import React from "react";
import football from "../assets/icons/football.svg";

export const Signup = () => {
  return (
    <section className="text-gray-800 ">
      <div className="container mx-auto px-5 lg:px-32">
        <div className="border rounded-lg p-10 mt-20">
          <div className="flex flex-col items-center">
            {/* <img className="w-40" src={football} alt="" /> */}

            <div className="mt-5">
              <h1 className="font-semibold text-4xl text-center">
                Create your account
              </h1>
              <h2 className="text-lg text-gray-400 mt-2">
                Predict and win amazing prizes!
              </h2>
            </div>
          </div>

          <form className="mt-10" action="">
            <div>
              <label className="block" htmlFor="">
                First Name
              </label>

              <input
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                type="text"
                placeholder="Enter your first name"
              />
            </div>

            <div className="mt-5">
              <label className="block" htmlFor="">
                Last Name
              </label>

              <input
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                type="Email"
                placeholder="Enter your last name"
              />
            </div>

            <div className="mt-5">
              <label className="block" htmlFor="">
                Phone Number
              </label>

              <input
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                type="number"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mt-5">
              <label className="block" htmlFor="">
                Academic Qualification
              </label>

              <input
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                type="text"
                placeholder="Enter your academic qualification"
              />
            </div>

            <div className="mt-5">
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
                placeholder="Create a password"
              />
            </div>

            <div className="mt-5">
              <label className="block" htmlFor="">
                Confirm Password
              </label>

              <input
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                type="Password"
                placeholder="Re-enter password"
              />
            </div>

            <button className="bg-primary-500 text-white inline-block mt-5 w-full py-3 rounded-lg font-medium tracking-wide hover:bg-primary-400">
              Sign up
            </button>
          </form>

          <p className="mt-2">
            Already have an account?{" "}
            <span className="text-primary-500">Log in</span>
          </p>
        </div>
      </div>
    </section>
  );
};
