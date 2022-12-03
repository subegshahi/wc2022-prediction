import React from "react";

export const R16Schedule = ({
  time,
  countryFlag1,
  countryName1,
  countryFlag2,
  countryName2,
}) => {
  return (
    <div className=" bg-white shadow-sm w-full mt-10 px-5 py-4 rounded-md">
      <div className="flex flex-col ">
        <h1 className="font-semibold text-sm text-gray-500">{time}</h1>

        <div className="flex items-center gap-2 mt-2">
          <img className="w-10 rounded-md" src={countryFlag1} alt="" />
          <p className="text-lg">{countryName1}</p>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <img className="w-10 rounded-md" src={countryFlag2} alt="" />
          <p className="text-lg">{countryName2}</p>
        </div>
      </div>
    </div>
  );
};
