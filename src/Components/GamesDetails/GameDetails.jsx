import React from "react";
import image from "../../assets/Ep8a1_Defiance_Youtube Cover_.png";
import imageTwo from "../../assets/Valorant_EP8_Teaser_Sova the Specialist.png";
import imageThree from "../../assets/Valorant_EP-8-Teaser_The-arrival.jpg";
import { DiAtlassian } from "react-icons/di";
import { DiDotnet } from "react-icons/di";
import { DiClojure } from "react-icons/di";
import { Helmet } from "react-helmet-async";

const GameDetails = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* First Row */}
      <div>
        <Helmet><title>SOA_AGENTS | JOIN US</title></Helmet>
      </div>
      <div className="flex w-full h-1/2">
        <div
          className="w-1/3 bg-cover bg-center border-2"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div
          className="w-1/3 bg-cover bg-center border-2"
          style={{ backgroundImage: `url(${imageTwo})` }}
        ></div>
        <div
          className="w-1/3 bg-cover bg-center border-2"
          style={{ backgroundImage: `url(${imageThree})` }}
        ></div>
      </div>

      {/* Second Row */}
      <div className=" flex w-full h-1/2">
        <div className="w-1/3  bg-cover bg-center bg-[#23123F] text-white  p-5 ">
          <div className="flex items-center justify-between space-x-1.5">
            <h1 className="text-5xl  font-semibold">
              THE GAME <br /> WITH <br /> HIGH PREFERENCE
            </h1>
            <DiAtlassian className="text-7xl text-white" />
          </div>
          <h1 className="text-9xl font-bold">89%</h1>
          <div className="flex items-center justify-between mt-50">
            <div>
              <h1 className="font-semibold">SOA AGENTS</h1>
              <h1 className="font-semibold">DON'T LURK AND SPAM</h1>
            </div>
            <h1 className="font-semibold">(WILL BE BACK)</h1>
          </div>
        </div>

        <div className="w-1/3  bg-cover bg-center bg-[#2D2636] text-white  p-5 ">
          <div className="flex items-center justify-between space-x-1.5">
            <h1 className="text-5xl  font-semibold">
              ROAD TO <br /> CONQUER{" "}
            </h1>
            <DiDotnet className="text-7xl text-white" />
          </div>
          <h1 className=" mt-5 text-lg">
            {" "}
            The journey to greatness is never easy—it demands resilience,
            strategy, and an unbreakable will. Road to Conquer is about pushing
            limits, overcoming obstacles, and claiming victory against all odds.
            Whether on the battlefield, in competition, or in personal growth,
            the path to dominance is paved with challenges. Only those who dare
            to rise, adapt, and fight will stand at the top. Are you ready to
            conquer? 🚀🔥
          </h1>
          <progress className="progress text-white w-56"></progress>
          <div className="flex items-center justify-between mt-50">
            <div>
              <h1 className="font-semibold">SOA AGENTS</h1>
              <h1 className="font-semibold">DON'T LURK AND SPAM</h1>
            </div>
            <h1 className="font-semibold">(WILL BE BACK)</h1>
          </div>
        </div>

        <div className="w-2/3 bg-cover bg-center  bg-[#3E2031]  justify-between text-white p-5 ">
         <div className="flex items-center justify-between">
         <div>
            <h1 className="font-semibold text-5xl "> AGENTS HOSTED</h1>
            <h1 className="text-9xl font-bold">84.3K</h1>
          </div>
          <DiClojure className="text-9xl" />
          <div>
            <div className="avatar-group -space-x-6">
              <div className="avatar">
                <div className="w-12">
                  <img src={imageThree} />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src={imageTwo}/>
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                <img src={imageThree}/>
                </div>
              </div>
              <div className="avatar">
                <div className="w-12 border-none ">
                <img src={imageTwo}/>
                </div>
              </div>
            </div>
            <h1 className=" text-2xl font-semibold mt-5">Globally * <br /> POPULAR AGENTS</h1>
            <h1 className=" text-xl mt-5 font-semibold">#SOA_AGENTS</h1>
          </div>
         </div>
         <h1 className=" mt-5 text-lg">
            {" "}
            The journey to greatness is never easy—it demands resilience,
            strategy, and an unbreakable will. Road to Conquer is about pushing
            limits, overcoming obstacles, and claiming victory against all odds.
            Whether on the battlefield, in competition, or in personal growth,
            the path to dominance is paved with challenges. Only those who dare
            to rise, adapt, and fight will stand at the top. Are you ready to
            conquer? 🚀🔥
          </h1>
          <progress className="progress text-white w-56"></progress>
          <div className="flex items-center justify-between mt-50">
            <div>
              <h1 className="font-semibold">SOA AGENTS</h1>
              <h1 className="font-semibold">DON'T LURK AND SPAM</h1>
            </div>
            <h1 className="font-semibold">(WILL BE BACK)</h1>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
