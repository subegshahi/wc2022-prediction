import React from "react";

export const FormFields = () => {
  return (
    <div>
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
    </div>
  );
};
