import React from "react";
import { FormFields } from "../components/FormFields";
import netherlands from "../assets/images/netherlands.png";
import usa from "../assets/images/usa.png";
import cup from "../assets/icons/world-cup.svg";
import calendar from "../assets/icons/calendar.svg";
import stadium from "../assets/icons/stadium.svg";
import wc2022Logo from "../assets/icons/wc2022-logo.svg";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
// import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";

export const Predict = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    country: yup.string().required("Country is required"),
    academicQualification: yup
      .string()
      .required("Academic Qualification is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitRef = collection(db, "predict");

  const onSubmitForm = async (data) => {
    console.log(data);
    await addDoc(submitRef, {
      ...data,
      username: user?.displayName,
      id: user?.uid,
    });

    navigate("/");
  };

  return (
    <main className="text-gray-800">
      <div className="bg-white border-b border-gray-300 px-5 py-3 ">
        <div className="container mx-auto lg:px-32">
          <h1 className="font-semibold text-xl">Welcome</h1>

          <div className="flex items-center gap-2 mt-5">
            {user && (
              <>
                <img src={user?.photoURL} className="w-10 rounded-full" />
                <p className="font-bold"> {user?.displayName} </p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 mt-5  lg:flex lg:px-32">
        <form
          className="bg-white shadow-sm border border-gray-300 rounded-md p-10 mt-10 lg:w-1/2"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <div>
            <div>
              <div className="flex items-center justify-center ">
                <img className="w-10" src={cup} alt="" />
                <p className="font-bold text-lg text-gray-800">
                  World Cup 2022 - Round of 16
                </p>
              </div>

              <hr className="mt-3 border-gray-300" />
            </div>

            <div className="flex">
              <p className="mt-10 text-2xl font-bold tracking-wide text-gray-800 w-1/2">
                Who will win?
              </p>

              <p className="bg-red-300 text-red-700 text-center font-semibold tracking-wider px-3 py-2 rounded-md  flex justify-center items-center mt-5 w-1/2 ">
                Today's Prize: Rs. 1500
              </p>
            </div>

            <div className="flex gap-5 mt-10">
              <div className="border border-gray-300  rounded-md p-5 flex flex-col gap-5 items-center w-1/2">
                <img
                  className="w-20 h-20 object-cover object-center rounded-full"
                  src={netherlands}
                  alt=""
                />

                <p className="text-lg font-semibold">Netherlands</p>

                {/* <button className="bg-red-300 text-red-700 font-semibold tracking-wider px-3 py-1 rounded-full text-center flex justify-center items-center hover:bg-red-400 hover:text-red-900">
                  Netherlands
                </button> */}
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

                <p className="text-lg font-semibold">USA</p>

                {/* <button className="bg-red-300 text-red-700 font-semibold tracking-wider px-3 py-1 rounded-full text-center flex justify-center items-center hover:bg-red-400 hover:text-red-900">
                  USA
                </button> */}
              </div>
            </div>
          </div>

          <div className="mt-5">
            <label className="block">Country</label>

            <input
              className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
              type="text"
              placeholder="Enter country name"
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

          <button
            className="bg-primary-500 text-white inline-block mt-5 w-full py-3 rounded-lg font-medium tracking-wide hover:bg-primary-400"
            type="submit"
          >
            Predict
          </button>
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
