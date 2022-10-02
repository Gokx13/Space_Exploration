import React, { useState } from "react";
import Data from "./data.json";

function Tech() {
  var [destindex,Setdestindex]= useState(0)
  

  return (
    <div>
    <div className=" text-center md:text-left md:mx-20  text-slate-300 font-s">
       <h1 className="text-2xl  text-white mb-10 md:mb-20">
        SPACE LAUNCH 101
        </h1>
        <div className=" flex flex-col md:flex-row md:justify-between  h-60 items-center text-center md:text-left ">
      <ul className="flex justify-between md:absolute md:top-52 lg:flex-col lg:left-3">
           <li><button class="my-4 mx-4  text-white bg-transparent rounded-full h-16 w-16 border-2 border-gray-600      hover:border-gray-400 text-2xl" onClick={()=>{Setdestindex(0)}}>1</button></li>
           <li><button class="my-4 mx-4  text-white bg-transparent rounded-full h-16 w-16 border-2 border-gray-600      hover:border-gray-400 text-2xl" onClick={()=>{Setdestindex(1)}}>2</button></li>
           <li><button class="my-4 mx-4  text-white bg-transparent rounded-full h-16 w-16 border-2 border-gray-600      hover:border-gray-400 text-2xl" onClick={()=>{Setdestindex(2)}}>3</button></li>

          </ul>
      <div className="flex flex-col  max-w-sm  mt-10 lg:mr-60">
       

        <div className="mb-30 md:sticky lg:w-96 md:mr-10 lg:ml-20 ">
          <h1 className=" my-5  text-xl text-slate-300 font-ss">
            {Data.technology[destindex].role}The Terminology
          </h1>

          <h1 className=" my-5 text-5xl text-white font-ss">
            {Data.technology[destindex].name}
          </h1>
          <p className="   text-center md:text-start ">{Data.technology[destindex].description}</p>

        </div>
      </div>

      <div className="w-96 ">
        <img src={Data.technology[destindex].images.portrait} className="hidden md:block" />
        <img src={Data.technology[destindex].images.landscape} className="md:hidden"/>

      </div>
      </div>
    </div>
    
<section className="  text-transparent w-screen md:h-52 h-80"> d
</section>
    </div>


  );
}

export default Tech;
