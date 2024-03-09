"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoTriangleSharp } from "react-icons/io5";
import Trading from "@/components/atom/Trading";
import Loading from "@/components/loading";

const TradingDetails = () => {
  const [values, setvalues] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v3/simple/price`,
          {
            params: {
              "x-cg-demo-api-key": process.env.NEXT_PUBLIC_API_KEY,
              ids: "bitcoin",
              vs_currencies: "inr,usd",
              include_24hr_change: true,
            },
          }
        );
        const data = [response.data];
        setvalues(data);
      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("values", values);
  }, [values]);

  const [Time, setTime] = useState("60");
  return (
    <div className=" flex flex-col gap-5 bg-white p-5 rounded-md">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className=" flex gap-2 items-center">
            <Image
              src="/logo/Bitcoin BTC Icon.svg"
              width={60}
              height={60}
              className=" rounded-full rotate-12  "
            />
            <p className=" text-lg sm:text-2xl font-semibold">Bitcoin</p>
            <p className=" text-gray-400 sm:text-base text-xs">BTC</p>
            <button className=" bg-gray-500 rounded-md p-1 sm:text-base text-sm sm:p-2 text-white">
              Rank #1
            </button>
          </div>

          <div className=" flex flex-col gap-3">
            <div className=" flex gap-4">
              <div className=" sm:text-2xl text-lg font-semibold">
                ${values[0] && values[0].bitcoin && values[0].bitcoin.usd}
              </div>
              <div className=" bg-green-200 py-0 sm:px-2 px-1 sm:text-base text-xs font-medium text-green-600 flex gap-1 rounded-md items-center">
                <IoTriangleSharp color="green" size={10} />
                {values[0] &&
                  values[0].bitcoin &&
                  values[0].bitcoin.usd_24h_change.toFixed(2)}
                %
              </div>
              <div className=" sm:text-base text-xs">(24H)</div>
            </div>
            <div className=" flex gap-2 text-xl">
              ₹{values[0] && values[0].bitcoin && values[0].bitcoin.inr}
            </div>
          </div>
          <hr />
          <div className=" flex sm:flex-row flex-col sm:justify-between gap-1">
            <p>Bitcoin Price Chart(USD)</p>
            <div className=" flex gap-2 cursor-pointer">
              <div
                onClick={() => setTime("60")}
                className={`${Time === "60" ? "bg-blue-400" : ""}`}
              >
                1H
              </div>
              <div
                onClick={() => setTime("D")}
                className={`${Time === "D" ? "bg-blue-400" : ""}`}
              >
                24H
              </div>
              <div
                onClick={() => setTime("W")}
                className={`${Time === "W" ? "bg-blue-400" : ""}`}
              >
                7D
              </div>
              <div
                onClick={() => setTime("M")}
                className={`${Time === "M" ? "bg-blue-400" : ""}`}
              >
                1M
              </div>
              <div
                onClick={() => setTime("3M")}
                className={`${Time === "3M" ? "bg-blue-400" : ""}`}
              >
                3M
              </div>
              <div
                onClick={() => setTime("6M")}
                className={`${Time === "6M" ? "bg-blue-400" : ""}`}
              >
                6M
              </div>
              <div
                onClick={() => setTime("12M")}
                className={`${Time === "12M" ? "bg-blue-400" : ""}`}
              >
                1Y
              </div>
              <div>ALL</div>
            </div>
          </div>
          <div className=" w-full sm:h-[450px] h-[200px]">
            <Trading time={Time} />
          </div>
        </>
      )}
    </div>
  );
};

export default TradingDetails;
