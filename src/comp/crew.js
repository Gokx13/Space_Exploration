import React, { useState } from "react";
import Data from "./data.json";

function Crew() {
  var [destindex,Setdestindex]= useState(0)
  

  return (
    <div className=" flex flex-col md:flex-row md:justify-between  items-center text-center md:text-left  text-slate-300 font-s">
      <div className="flex flex-col  max-w-sm  mx-20 mt-10 lg:mr-60">
        <h1 className="text-2xl  text-white mb-10 md:mb-20">
        MEET YOUR CREW
        </h1>

        <div className="">
          <h1 className=" my-5  text-3xl text-slate-300 font-ss">
            {Data.crew[destindex].role}
          </h1>

          <h1 className=" my-5 text-5xl text-white font-ss">
            {Data.crew[destindex].name}
          </h1>
          <p className=" md:absolute md:w-1/3 text-center md:text-start ">{Data.crew[destindex].bio}</p>

          <ul className="flex justify-between my-10  md:my-40 lg:my-32">
            <li className=" cursor-pointer text-5xl  " onClick={(p)=>{
              if(destindex===0)
              {
                Setdestindex(Data.crew.length-1)
              }
              else{
                var y=destindex-1;
                Setdestindex(y)
              }
              }}
              >←</li>
            <li className=" cursor-pointer text-5xl " onClick={(p)=>{  if(destindex===Data.crew.length-1)
              {
                Setdestindex(0)
              }
              else{
                var y=destindex+1;
                Setdestindex(y)
              }}}>→</li>
           
          </ul>
        </div>
      </div>

      <div className="w-96 ">
        <img src={Data.crew[destindex].images.png} alt="" />
      </div>
    </div>
  );
}

export default Crew;
