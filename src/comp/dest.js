import React, { useState } from "react";
import Data from "./data.json";

function Dest() {
  var [destindex, Setdestindex] = useState(0);

  return (
    <div>
      <div className=" flex flex-col md:flex-row md:justify-between  items-center text-left  text-slate-300 font-s">
        <div className="md:ml-20 ">
          <h1 className="text-2xl  text-white mb-10 md:mb-20">
            PICK YOUR DESTINATION
          </h1>
          <img src={Data.destinations[destindex].images.png} alt="" />
        </div>
        <div className="flex flex-col  max-w-sm  mx-20 mt-10 lg:mr-60">
          <ul className="flex justify-between ">
            <li
              className=" cursor-pointer "
              onClick={() => {
                Setdestindex(0);
              }}
            >
              Moon
            </li>
            <li
              className=" cursor-pointer "
              onClick={() => {
                Setdestindex(1);
              }}
            >
              Mars
            </li>
            <li
              className=" cursor-pointer "
              onClick={() => {
                Setdestindex(2);
              }}
            >
              Europa
            </li>
            <li
              className=" cursor-pointer "
              onClick={() => {
                Setdestindex(3);
              }}
            >
              Titan
            </li>
          </ul>

          <div className="">
            <h1 className=" my-5 text-8xl text-white font-ss">
              {Data.destinations[destindex].name}
            </h1>
            <p>{Data.destinations[destindex].description}</p>
            <ul className="mt-10 flex justify-between w-72">
              <li>
                AVG. DISTANCE
                <p className="text-3xl font-ss">
                  {Data.destinations[destindex].distance}
                </p>
              </li>
              <li>
                EST. TRAVEL TIME
                <p className="text-3xl font-ss">
                  {Data.destinations[destindex].travel}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="  text-transparent w-screen md:h-40 "> d</section>
    </div>
  );
}

export default Dest;
