import React from "react";

export const PredictCard = () => {
  return (
    <div className="container mx-auto px-5 mt-5 lg:flex lg:px-32 lg:gap-5">
      <form
        className="bg-white shadow-sm border border-gray-300 rounded-md p-10 mt-10 lg:w-1/2"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div>
          <div>
            <div className="flex items-center justify-center ">
              <img className="w-10" src={cup} alt="" />
              <p className="font-bold text-lg text-gray-800">
                World Cup 2022 - Bronze Final and Final
              </p>
            </div>

            <hr className="mt-3 border-gray-300" />

            <p className="mt-10 text-2xl font-bold tracking-wide text-center text-gray-800 ">
              Who will win?
            </p>

            {/* Match 1  */}
            <TodaysMatch
              matchPrize={"Rs. 1,500"}
              countryFlag1={croatia}
              countryName1={"croatia"}
              countryFlag2={morocco}
              countryName2={"Morocco"}
            />

            {/* Match 2  */}

            <TodaysMatch
              matchPrize={"Rs. 1,500"}
              countryFlag1={argentina}
              countryName1={"Argentina"}
              countryFlag2={france}
              countryName2={"France"}
            />
          </div>
        </div>

        <div className="mt-5">
          <label className="block">Country</label>

          <input
            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
            type="text"
            placeholder="Enter match 1 and match 2 country names"
            {...register("country")}
          />

          <p className="mt-2 text-red-700">{errors.country?.message}</p>
        </div>

        <div className="mt-5">
          <label className="block">Academic Qualification</label>

          <input
            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
            type="text"
            placeholder="Enter your academic qualification"
            {...register("academicQualification")}
          />

          <p className="mt-2 text-red-700">
            {errors.academicQualification?.message}
          </p>
        </div>

        {/* <select
            id="countries"
            className="w-full py-3 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 mt-5 font-semibold"
          >
            <option selected>Choose a country</option>
            <option>Netherlands</option>
            <option>USA</option>
          </select> */}

        {/* <select
            id="academicQualification"
            className="w-full py-3 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 mt-5 font-semibold"
          >
            <option selected>Choose your academic qualification</option>
            <option>SEE</option>
            <option>+2</option>
            <option>Bachelor's Degree</option>
            <option>Master's Degree</option>
            <option>Doctorate</option>
          </select> */}

        {/* <FormFields /> */}

        <div className="mt-10">
          {/* <div className="flex items-center gap-2">
              <img className="w-8" src={calendar} alt="" />
              <p className="font-semibold text-gray-500">
                Sat, 3-Dec-2022, 8:45 PM
              </p>
            </div> */}

          <div className="flex items-center gap-2 mt-3">
            <img className="w-8" src={stadium} alt="" />
            <p className="font-semibold text-gray-500">
              Match 1: Khalifa International Stadium
            </p>
          </div>

          <div className="flex items-center gap-2 mt-3">
            <img className="w-8" src={stadium} alt="" />
            <p className="font-semibold text-gray-500">
              Match 2: Lusail Stadium
            </p>
          </div>
        </div>

        <button
          className="bg-primary-500 text-white inline-block mt-5 w-full py-3 rounded-lg font-medium tracking-wide hover:bg-primary-400"
          type="submit"
        >
          Predict
        </button>
      </form>

      <img
        className="w-full h-1/2 mt-10 object-cover lg:w-1/2 "
        src={gifts}
        alt="gift"
      />
    </div>
  );
};
