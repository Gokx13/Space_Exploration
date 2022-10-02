import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function Nav(p){


function showitems()
{
document.getElementById("sidear").classList.remove("hidden");
document.getElementById("hamurger").classList.add("hidden");
}

function closeitems()
{
document.getElementById("sidear").classList.add("hidden");
document.getElementById("hamurger").classList.remove("hidden");
}


return <div >

 <div className="flex justify-between" >
        <div className="py-4 pl-11 md:my-10 cursor-pointer">
         
          <a href="/"  > <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fillRule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" />
            </g>
          </svg></a>
        </div>


        <div className="absolute my-20 ml-28 hidden h-0.5 w-1/3 bg-slate-50/20 lg:block"></div>


        <div id="hamurger" className="py-5 pr-5 md:hidden cursor-pointer " onClick={showitems}  >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
            <g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g>
          </svg>
        </div>


        <div id="sidear" className=" md:hidden hidden">
  <ul className="backdrop-blur-md  absolute  py-32  top-0 h-full right-0 w-72 px-10 text-slate-300 font-s text-2xl  ">
  <li className="  ml-40 cursor-pointer  " onClick={closeitems}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg></li>
    <li className="py-10 "><p className=" hover:border-b-4  cursor-pointer " > <a href="/"  >01 HOME</a></p></li>
    <li className="py-10"><p className=" hover:border-b-4 cursor-pointer" > <a href="/destination"  >02 DESTINATION</a></p></li>
    <li className="py-10"><p className=" hover:border-b-4 cursor-pointer" > <a href="/crew"  >03 CREW</a></p></li>
    <li className="py-10"><p className=" hover:border-b-4 cursor-pointer" ><a href="/technology"  >04 TECHNOLOGY</a></p></li>
  </ul>
  </div>



        <div id="ar" className="m-10 mt-5 hidden w-7/12 px-10 backdrop-blur-sm md:block">
          <ul className="py- flex justify-between font-s font-light text-slate-300">
            <li  value="1">
              <a href="/" className="flex justify-between py-10 hover:border-b-4 cursor-pointer"><p className="hidden pr-1 lg:block" >01</p>
              HOME</a>
            </li>
            <li  value="2"  >
            <a href="/destination" className="flex justify-between py-10 hover:border-b-4 cursor-pointer"><p className="hidden pr-1 lg:block" >02</p>
              DESTINATION</a>
            </li>
            <li  value="3"  >
            <a href="/crew" className="flex justify-between py-10 hover:border-b-4 cursor-pointer"><p className="hidden pr-1 lg:block" >03</p>
              CREW</a>
            </li>
            <li  value="4"  >
            <a href="/technology" className="flex justify-between py-10 hover:border-b-4 cursor-pointer"><p className="hidden pr-1 lg:block" >04</p>
              TECHNOLOGY</a>
            </li>
          </ul>
        </div>
      </div>
</div>
}

export default Nav;
//npx tailwindcss -i ./public/styles.css -o ./public/output.css --watch
