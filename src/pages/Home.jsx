import React from "react";
import portugal from "../assets/images/portugal-flag.png";
import argentina from "../assets/images/argentina-flag.png";

export const Home = () => {
  return (
    <main>
      <div className="container mx-auto px-5 mt-10 lg:px-32">
        <div className="border border-gray-300 rounded-md p-5">
          <form className="mt-10" action="">
            <div className="px-10">
              <div className="flex justify-around p-5 mt-5">
                <img
                  className="w-16 h-16bg-gray-300 rounded-full object-cover object-center shadow-md"
                  src={portugal}
                  alt=""
                />

                <div className="w-16 h-16 rounded-full flex justify-center items-center font-semibold border shadow-md">
                  X
                </div>

                <img
                  className="w-16 h-16 bg-gray-300 rounded-full object-cover object-center shadow-md"
                  src={argentina}
                  alt=""
                />
              </div>

              <hr className="mt-5 border-gray-300" />

              <div className="flex justify-around p-5 mt-5">
                <button className="bg-red-300 text-red-700 font-semibold tracking-wider px-3 py-1 rounded-full text-center flex justify-center items-center  hover:bg-red-400 hover:text-red-900">
                  Portugal
                </button>

                <button className="bg-red-300 text-red-700 font-semibold tracking-wider px-3 py-1 rounded-full text-center flex justify-center items-center  hover:bg-red-400 hover:text-red-900">
                  Draw
                </button>

                <button className="bg-red-300 text-red-700 font-semibold tracking-wider px-3 py-1 rounded-full text-center flex justify-center items-center  hover:bg-red-400 hover:text-red-900">
                  Argentina
                </button>
              </div>
            </div>

            <div className="mt-10">
              <label className="block" htmlFor="">
                First Name
              </label>

              <input
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                type="text"
                placeholder="Enter your first name"
              />
            </div>

            <div
              className="mt-5
            "
            >
              <label className="block" htmlFor="">
                Last Name
              </label>

              <input
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                type="text"
                placeholder="Enter your last name"
              />
            </div>

            <div className="mt-5">
              <label className="block" htmlFor="">
                Email
              </label>

              <input
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="mt-5">
              <label className="block" htmlFor="">
                Academic Qualification
              </label>

              <input
                className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                type="email"
                placeholder="Enter your academic qualification"
              />
            </div>

            <button className="bg-primary-500 text-white inline-block mt-5 w-full py-3 rounded-lg font-medium tracking-wide hover:bg-primary-400">
              Predict
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
