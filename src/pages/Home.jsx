import React from "react";
import worldCup from "../assets/icons/world-cup.svg";
import wc2022Logo from "../assets/icons/wc2022-logo.svg";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { R16Schedule } from "../components/R16Schedule";
import argentina from "../assets/images/argentina.png";
import australia from "../assets/images/australia.png";
import brazil from "../assets/images/brazil.png";
import croatia from "../assets/images/croatia.png";
import england from "../assets/images/england.png";
import france from "../assets/images/france.png";
import japan from "../assets/images/japan.png";
import morocco from "../assets/images/morocco.png";
import netherlands from "../assets/images/netherlands.png";
import poland from "../assets/images/poland.png";
import portugal from "../assets/images/portugal.png";
import senegal from "../assets/images/senegal.png";
import southKorea from "../assets/images/south-korea.png";
import spain from "../assets/images/spain.png";
import swiss from "../assets/images/swiss.png";
import usa from "../assets/images/usa.png";
import calendar from "../assets/icons/calendar.svg";
import wcSchedule from "../assets/images/wc-schedule.png";
import mbappe from "../assets/images/mbappe.png";
import griezmann from "../assets/images/griezmann.png";
import martinez from "../assets/images/martinez.png";

export const Home = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/predict");
  };

  const navigateToNews = () => {
    window.location.replace("https://chitrawankhabar.com/");
  };

  return (
    <section>
      <div className="container mx-auto px-5  items-center lg:flex lg:px-32 lg:gap-10">
        <div
          className="bg-white shadow-sm border rounded-lg p-10 mt-20 lg:w-1/3"
          style={{ maxWidth: 600 }}
        >
          <div className="flex flex-col items-center">
            <img className="w-40" src={worldCup} alt="" />
            <div className="mt-5">
              <h1 className="font-semibold text-4xl text-center">Thank you!</h1>
              <h2 className="text-lg text-gray-400 mt-2 text-center">
                Thank you for participting in FIFA World Cup 2022 prediction game.
              </h2>
            </div>
          </div>

          {/* <button
            onClick={signInWithGoogle}
            className="bg-primary-500 text-white inline-block mt-5   w-full py-3 rounded-lg font-medium tracking-wide hover:bg-primary-400"
          >
            Sign in with Google
          </button> */}
        </div>

        <div className="bg-white shadow-sm border rounded-lg p-10 mt-10 ">
          <div className="flex flex-col mt-5">
            <h1 className="font-semibold text-4xl ">Facts about FIFA World Cup</h1>
            <h2 className="text-lg text-gray-400 mt-2 ">
              - Almost 50% of the world's population watches the competition
              <br></br>- England did not take part in the first three tournaments
              <br></br>- The First Women's World Cup was in 1991
              <br></br>- There have been a total of 22 World Cups: the first was in 1930
              and the most recent in 2022
              <br></br>- Brazil has one the most World Cups with five. Italy and Germany
              are close behind with four each.
              <br></br>- A total of 211 teams began the qualification process for the 2022
              World Cup
            </h2>
          </div>

          <button
            onClick={navigateToNews}
            className="bg-primary-500 text-white inline-block mt-5   w-full py-3 rounded-lg font-medium tracking-wide hover:bg-primary-400"
          >
            Back to News
          </button>
        </div>
      </div>

      <div className="container mx-auto px-5 mt-10 lg:flex justify-between items-center lg:px-32 lg:gap-5">
        <div className=" justify-between bg-white p-5 rounded-xl shadow-md lg:mt-5">
          <h1 className="font-semibold text-2xl">Winner</h1>
          <hr className="mt-5" />

          <div className="flex justify-between items-center gap-10">
            <div>
              <p className="mt-2 font-semibold text-xl">Argentina</p>
            </div>

            <img
              className="w-24 h-24 object-cover rounded-full mt-5"
              src={argentina}
              alt=""
            />
          </div>
        </div>

        <div className=" justify-between bg-white p-5 rounded-xl shadow-md mt-5">
          <h1 className="font-semibold text-2xl">Top Scorer</h1>
          <hr className="mt-5" />

          <div className="flex justify-between items-center gap-10">
            <div>
              <p className="mt-2 font-semibold text-xl">Kylian Mbappé</p>
              <p className="mt-2 text-lg text-gray-400 font-semibold">France</p>
            </div>

            <img
              className="w-24 h-24 object-cover rounded-full mt-5"
              src={mbappe}
              alt=""
            />
          </div>
        </div>

        <div className=" justify-between bg-white p-5 rounded-xl shadow-md mt-5">
          <h1 className="font-semibold text-2xl">Assists</h1>
          <hr className="mt-5" />

          <div className="flex justify-between items-center gap-10">
            <div>
              <p className="mt-2 font-semibold text-xl">Antoine Griezmann</p>
              <p className="mt-2 text-lg text-gray-400 font-semibold">France</p>
            </div>

            <img
              className="w-24 h-24 object-cover rounded-full mt-5"
              src={griezmann}
              alt=""
            />
          </div>
        </div>

        <div className=" justify-between bg-white p-5 rounded-xl shadow-md mt-5">
          <h1 className="font-semibold text-2xl">Clean sheets</h1>
          <hr className="mt-5" />

          <div className="flex justify-between items-center">
            <div>
              <p className="mt-2 font-semibold text-xl">Emiliano Martinez</p>
              <p className="mt-2 text-lg text-gray-400 font-semibold">Argentina</p>
            </div>

            <img
              className="w-24 h-24 object-cover rounded-full mt-5"
              src={martinez}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-20 px-5 lg:px-32 ">
        <img
          className="rounded-xl shadow-sm border border-gray-300"
          src={wcSchedule}
          alt=""
        />
      </div>

      <div className="container mx-auto px-5 mt-10 items-center lg:flex lg:px-32 lg:gap-10">
        {/* <img className="w-full aspect-auto lg:w-1/2 " src={wc2022Logo} alt="" /> */}

        <div className="mt-10">
          <div className="flex items-center gap-3">
            {/* <img src={calendar} alt="" /> */}

            <div>
              {/* <h1 className="font-bold text-2xl">Round of 16 Match Schedule</h1> */}
              {/* <h1 className="font-bold text-2xl">
                Bronze Final and Final Match Schedule
              </h1> */}

              {/* <h2 className="font-semibold text-gray-500">
                All times are in Nepal Time
              </h2> */}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {/* Quatrer Final Matches */}

            {/* <R16Schedule
              time={"Dec 17, 2022, 8:45 PM"}
              countryFlag1={croatia}
              countryName1={"Croatia"}
              countryFlag2={morocco}
              countryName2={"Morocco"}
            />

            <R16Schedule
              time={"Dec 18, 2022, 8:45 PM"}
              countryFlag1={argentina}
              countryName1={"Argentian"}
              countryFlag2={france}
              countryName2={"France"}
            /> */}

            {/* <R16Schedule
              time={"Fri, Dec 9 2022, 20:45"}
              countryFlag1={croatia}
              countryName1={"Croatia"}
              countryFlag2={brazil}
              countryName2={"Brazil"}
            /> */}

            {/* <R16Schedule
              time={"Sat, Dec 10 2022, 00:45"}
              countryFlag1={netherlands}
              countryName1={"Netherlands"}
              countryFlag2={argentina}
              countryName2={"Argentina"}
            /> */}

            {/* /Quatrer Final Matches */}

            {/* <R16Schedule
              time={"20:45, Today"}
              countryFlag1={netherlands}
              countryName1={"Netherlands"}
              countryFlag2={usa}
              countryName2={"USA"}
            /> */}

            {/* <R16Schedule
              time={"00:45, Tomorrow"}
              countryFlag1={argentina}
              countryName1={"Argentina"}
              countryFlag2={australia}
              countryName2={"Australia"}
            /> */}

            {/* <R16Schedule
              time={"20:45, 5th Dec"}
              countryFlag1={japan}
              countryName1={"Japan"}
              countryFlag2={croatia}
              countryName2={"Croatia"}
            /> */}

            {/* <R16Schedule
              time={"00:45, 6th Dec"}
              countryFlag1={brazil}
              countryName1={"Brazil"}
              countryFlag2={southKorea}
              countryName2={"South-Korea"}
            /> */}

            {/* <R16Schedule
              time={"20:45, 4th Dec"}
              countryFlag1={france}
              countryName1={"France"}
              countryFlag2={poland}
              countryName2={"Poland"}
            /> */}

            {/* <R16Schedule
              time={"00:45, 5th Dec"}
              countryFlag1={england}
              countryName1={"England"}
              countryFlag2={senegal}
              countryName2={"Senegl"}
            /> */}

            {/* <R16Schedule
              time={"20:45, 6th Dec"}
              countryFlag1={morocco}
              countryName1={"Morocco"}
              countryFlag2={spain}
              countryName2={"Spain"}
            /> */}

            {/* <R16Schedule
              time={"00:45, 7th Dec"}
              countryFlag1={portugal}
              countryName1={"Portugal"}
              countryFlag2={swiss}
              countryName2={"Switzerland"}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
