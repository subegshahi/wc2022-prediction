import React from "react";

export const TodaysMatch = ({
  matchPrize,
  countryFlag1,
  countryName1,
  countryFlag2,
  countryName2,
}) => {
  return (
    <div>
      <p className="bg-red-300 text-red-700 text-sm px-2 py-2  font-semibold tracking-wider rounded-md mt-5 w-full">
        Match Prize: {matchPrize}
      </p>

      <div className="flex gap-5 mt-5">
        <div className="border border-gray-300  rounded-md p-5 flex flex-col gap-5 items-center w-1/2">
          <img
            className="w-14 h-14 object-cover object-center rounded-full"
            src={countryFlag1}
            alt=""
          />

          <p className="text-lg font-semibold">{countryName1}</p>

          {/* <button className="bg-red-300 text-red-700 font-semibold tracking-wider px-3 py-1 rounded-full text-center flex justify-center items-center hover:bg-red-400 hover:text-red-900">
            Netherlands
          </button> */}
        </div>

        <div className="border border-gray-300 rounded-md p-5 flex flex-col gap-5 items-center w-1/2">
          <img
            className="w-14 h-14 object-cover object-center rounded-full"
            src={countryFlag2}
            alt=""
          />

          <p className="text-lg font-semibold">{countryName2}</p>

          {/* <button className="bg-red-300 text-red-700 font-semibold tracking-wider px-3 py-1 rounded-full text-center flex justify-center items-center hover:bg-red-400 hover:text-red-900">
            USA
          </button> */}
        </div>
      </div>
    </div>
  );
};
