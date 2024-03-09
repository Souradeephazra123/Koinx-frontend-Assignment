import React from "react";
import CardCarousel from "./CardCarousel";
import Image from "next/image";
import { SentimentData } from "./data.jsx";
import { FaCircleExclamation } from "react-icons/fa6";
import Box from "./Box";
const Sentiment = () => {
  return (
    <div className=" flex flex-col sm:gap-5 gap-2 sm:p-5 p-1 bg-white rounded-md">
      <p className="sm:text-2xl text-lg font-semibold">Sentiment</p>
      <div className="flex items-center gap-2">
        <span className="font-semibold text-slate-700">Key Events</span>
        <FaCircleExclamation color="gray" className=" rotate-180" />
      </div>

      <CardCarousel
        child={
          SentimentData &&
          SentimentData.map((data) => (
            <Box
              img={data.img}
              header={data.heading}
              Text={data.text}
              color={data.style}
              color2={data.style1}
            />
          ))
        }
      />
      <div className="flex items-center gap-2">
        <span className=" font-semibold text-gray-700">Analyst Estimates</span>
        <FaCircleExclamation color="gray" className=" rotate-180" />
      </div>
      <div className="flex gap-8 items-center pb-7">
        <div className=" p-10 bg-green-200 flex items-center justify-center rounded-full">
          76%
        </div>
        <div className=" w-[100%] text-gray-500 font-medium sm:text-base text-[10px]">
          <div className=" flex sm:gap-5 gap-2 items-center">
            <span>Buy</span>
            <div className=" w-[76%] h-2 bg-green-600 rounded"></div>
            <span>76%</span>
          </div>
          <div className=" flex sm:gap-5 gap-2 items-center">
            <span>Hold</span>
            <div className=" w-[8%] h-2 bg-slate-600 rounded"></div>
            <span>8%</span>
          </div>
          <div className=" flex sm:gap-5 gap-2 items-center">
            <span>Sell</span>
            <div className=" w-[16%] h-2 bg-red-600 rounded"></div>
            <span>16%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
