import React from "react"

function Home()
{
return <div>
<div className=" flex flex-col  items-center md:flex-row md:justify-around ">
     <div className="w-96    text-center md:text-start ml-20 ">
<p className=" font-s text-2xl text-slate-300" >SO, YOU WANT TO TRAVEL TO</p>
<h1 className=" text-8xl  font-ss text-white hover:underline">SPACE</h1>
<p className="font-s text-2xl text-slate-300 ">Let's face it; if you want to go to space, you might as well 
genuinely go to outer space and not hover kind of on 
the edge of it. Well sit back, and relax because we'll give you a 
truly out of this world experience!</p>

</div>

<button className="font-ss text-black text-5xl bg-white rounded-full h-64 w-64  mt-44 lg:mx-44  hover:text-white hover:scale-105	 hover:tracking-wider hover:drop-shadow-2xl hover:bg-[#ffffff0a] duration-200"> <a href="/destination"  >EXPLORE</a></button>
</div>
<section className="hidden md:block text-transparent w-screen h-40 "> d
</section>
</div>
}

export default Home;