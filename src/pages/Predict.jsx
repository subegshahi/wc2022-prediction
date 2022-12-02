import React from "react";
import { FormFields } from "../components/FormFields";
import portugal from "../assets/images/portugal-flag.png";
import argentina from "../assets/images/argentina-flag.png";
import netherlands from "../assets/images/netherlands-flag.jpg";
import usa from "../assets/images/usa-flag.jpg";
import cup from "../assets/icons/world-cup.svg";
import calendar from "../assets/icons/calendar.svg";
import stadium from "../assets/icons/stadium.svg";
import wc2022Logo from "../assets/icons/wc2022-logo.svg";
import { auth } from "../config/firebase";

export const Predict = () => {
  return (
    <main className="text-gray-800">
      <div className="bg-gray-100 border-b border-gray-300 p-5">
        <div className="container mx-auto lg:px-32">
          <p className="font-semibold text-2xl">Welcome</p>

          <div className="flex items-center gap-2 mt-5">
            <img
              src={auth.currentUser?.photoURL}
              className="w-14 rounded-full"
            />
            <p className="font-bold"> {auth.currentUser?.displayName} </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 mt-5 lg:flex lg:px-32">
        <form
          className="border border-gray-300 rounded-md p-10 mt-10 lg:w-1/2"
          action=""
        >
          <div>
            <div>
              <div className="flex items-center ">
                <img className="w-10" src={cup} alt="" />
                <p className="font-bold text-lg text-gray-800">
                  World Cup 2022 - Round of 16
                </p>
              </div>
              <hr className="mt-3 border-gray-300" />
            </div>

            <p className="mt-10 text-center text-3xl font-bold tracking-wide text-gray-800">
              Who will win?
            </p>

            <div className="flex gap-5 mt-10">
              <div className="border border-gray-300  rounded-md p-5 flex flex-col gap-5 items-center w-1/2">
                <img
                  className="w-20 h-20 object-cover object-center rounded-full"
                  src={netherlands}
                  alt=""
                />

                {/* <p className="text-lg font-semibold">Netherlands</p> */}

                <button className="bg-red-300 text-red-700 font-semibold tracking-wider px-3 py-1 rounded-full text-center flex justify-center items-center hover:bg-red-400 hover:text-red-900">
                  Netherlands
                </button>
              </div>

              {/* <div className="w-20 h-20 rounded-full flex justify-center items-center font-semibold text-xl border shadow-sm">
                X
              </div> */}

              <div className="border border-gray-300 rounded-md p-5 flex flex-col gap-5 items-center w-1/2">
                <img
                  className="w-20 h-20 object-cover object-center rounded-full"
                  src={usa}
                  alt=""
                />

                {/* <p className="text-lg font-semibold">USA</p> */}

                <button className="bg-red-300 text-red-700 font-semibold tracking-wider px-3 py-1 rounded-full text-center flex justify-center items-center hover:bg-red-400 hover:text-red-900">
                  USA
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-2">
              <img className="w-8" src={calendar} alt="" />
              <p className="font-semibold text-gray-500">
                Sat, 3-Dec-2022, 8:45 PM
              </p>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <img className="w-8" src={stadium} alt="" />
              <p className="font-semibold text-gray-500">
                Khalifa International Stadium
              </p>
            </div>
          </div>

          <button className="bg-primary-500 text-white inline-block mt-5 w-full py-3 rounded-lg font-medium tracking-wide hover:bg-primary-400">
            Predict
          </button>

          {/* <FormFields /> */}
        </form>

        <img
          className="w-full aspect-auto  mt-10 lg:w-1/2 lg:-mt-5"
          src={wc2022Logo}
          alt=""
        />
      </div>
    </main>
  );
};
