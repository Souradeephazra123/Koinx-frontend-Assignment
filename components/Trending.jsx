"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoTriangleSharp } from "react-icons/io5";
import axios from "axios";

const Trending = () => {
  const [TrendingData, setTrendingData] = useState([]);
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v3/search/trending`,
          {
            params: {
              "x-cg-demo-api-key": process.env.NEXT_PUBLIC_API_KEY,
            },
          }
        );
        // console.log("data", data);
        const data = response.data;
        const positiveTrendingData = data.coins.filter(
          (coin) => coin.item.data.price_change_percentage_24h.usd > 0
        );
        const sortedPositiveData = positiveTrendingData.sort(
          (a, b) =>
            b.item.data.price_change_percentage_24h.usd -
            a.item.data.price_change_percentage_24h.usd
        );

        const top3TrendingData = sortedPositiveData.slice(0, 3);

        setTrendingData(top3TrendingData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchedData();
  }, []);

  useEffect(() => {
    console.log("TrendingData", TrendingData);
  }, [TrendingData]);

  return (
    <div className=" p-5 bg-white rounded-md flex flex-col gap-7">
      <div className=" sm:text-2xl text-xl">Trending Coins(24h)</div>
      <div className="flex flex-col gap-4">
        {TrendingData.map((coin, index) => (
          <div key={index} className=" flex justify-between">
            <div className=" flex gap-2 items-center">
              <Image
                src={coin.item.large}
                width={25}
                height={25}
                alt="coin image"
                className=" rounded-full sm:w-[25px] w-[15px] sm:h-[25px] h-[15px]"
              />
              <span className=" sm:text-base text-[14px]">
                {coin.item.name}
              </span>
            </div>
            <div className=" bg-green-100 text-green-500 sm:text-base text-[13px]  flex gap-2 items-center px-2 rounded">
              {" "}
              <IoTriangleSharp color="green" size={10} />
              {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
