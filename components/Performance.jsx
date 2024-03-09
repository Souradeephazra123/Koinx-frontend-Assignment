"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCircleExclamation } from "react-icons/fa6";
import { IoTriangleSharp } from "react-icons/io5";

const Performance = () => {
  const [active, setactive] = useState("Overview");
  const arr = [
    "Overview",
    "Fundamentals",
    "New Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];

  const [BitcoinData, setBitcoinData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v3/coins/bitcoin`,
          {
            params: {
              "x-cg-demo-api-key": process.env.NEXT_PUBLIC_API_KEY,
            },
          }
        );
        const data = response.data;
        setBitcoinData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  let sum = 0;
  if (BitcoinData.market_data && BitcoinData.market_data.market_cap) {
    sum = Object.values(BitcoinData.market_data.market_cap).reduce(
      (a, b) => a + b,
      0
    );
  }

  let Market_cap_dominance = 0;
  if (BitcoinData.market_data && BitcoinData.market_data.market_cap.usd !== 0) {
    Market_cap_dominance =
      parseFloat(BitcoinData.market_data.market_cap.usd / sum) * 100;
  }

  const leftValue = ((48637.83 - 46930.22) / (49343.83 - 46930.22)) * 100;
  console.log(leftValue);

  return (
    <div>
      <div className="flex overflow-x-auto mb-5" style={{ scrollbarWidth: 0 }}>
        <ul className="border-b-[0.5px] w-fit border-gray-300 flex gap-4 mb-5">
          {arr.map((ar, idx) => (
            <li
              key={idx}
              className={`  font-semibold cursor-pointer whitespace-nowrap ${
                active === ar
                  ? " text-blue-500 border-b-2 border-blue-500"
                  : " text-gray-500"
              }`}
              onClick={() => setactive(ar)}
            >
              {ar}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-md sm:p-5 p-1 flex flex-col gap-8">
        <div className=" sm:text-2xl text-lg font-semibold">Performance</div>
        <div className=" flex flex-col gap-5 sm:text-base text-xs">
          <div className=" flex justify-between items-center">
            <div className=" flex flex-col gap-2">
              <span className=" whitespace-nowrap">Today's Low</span>
              <span>46,930.22</span>
            </div>
            <div className="line sm:w-[500px] w-[100px] h-1 rounded-full relative ">
              <div
                className=" flex flex-col gap-1"
                style={{ position: "absolute", top: 0, left: `${leftValue}%` }}
              >
                <IoTriangleSharp
                  color="black"
                  size={10}
                  // className={` absolute top-0 left-[${leftValue}%]`}
                />
                <span>$48637.83</span>
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <span className=" whitespace-nowrap">Today's High</span>
              <span>49,343.83</span>
            </div>
          </div>
          <div className=" flex justify-between items-center">
            <div className=" flex flex-col gap-2">
              <span className=" whitespace-nowrap">52w Low</span>
              <span>16,930.22</span>
            </div>
            <div className="line sm:w-[500px] w-[100px]  h-1 rounded-full "></div>
            <div className=" flex flex-col gap-2">
              <span className=" whitespace-nowrap">52w High</span>
              <span>49,743.83</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className=" font-medium text-gray-400">Fundamentals</span>{" "}
          <FaCircleExclamation color="gray" className=" rotate-180" />
        </div>
        <div className=" fundamentals  w-full flex sm:flex-row flex-col sm:gap-20 gap-0 text-xs sm:text-sm ">
          <div className=" w-full sm:w-1/2 space-y-4 ">
            {/* Bitcoin Price */}
            <div className=" flex justify-between">
              <span>Bitcoin Price</span>$
              {BitcoinData.market_data &&
                BitcoinData.market_data.current_price.usd}
            </div>
            <hr />
            {/* 24h Low / 24h High */}
            <div className=" flex justify-between">
              <span>24h Low / 24h High</span>$
              {BitcoinData.market_data && BitcoinData.market_data.low_24h.usd}
              &nbsp;/&nbsp; $
              {BitcoinData.market_data && BitcoinData.market_data.high_24h.usd}
            </div>
            <hr />
            {/* 7d Low / 7d High */}
            <div className=" flex justify-between">
              <span>7d Low / 7d High</span>$
              {BitcoinData.market_data && BitcoinData.market_data.low_24h.usd}
              &nbsp;/&nbsp; $
              {BitcoinData.market_data && BitcoinData.market_data.high_24h.usd}
            </div>
            <hr />
            {/* Trading volume */}
            <div className=" flex justify-between">
              <span>Trading volume</span>$
              {BitcoinData.market_data &&
                BitcoinData.market_data.fully_diluted_valuation.usd}
            </div>
            <hr />
            {/* Market Cap Rank */}
            <div className=" flex justify-between">
              <span>Market Cap Rank</span>#{BitcoinData.market_cap_rank}
            </div>
            <hr />
          </div>
          <div className=" w-full sm:w-1/2 space-y-4">
            <div className="flex justify-between">
              {/* Market Cap */}
              <span>Market Cap</span>$
              {BitcoinData.market_data &&
                BitcoinData.market_data.market_cap.usd.toLocaleString()}
            </div>
            <hr />
            {/* Market Cap Dominance */}
            <div className="flex justify-between">
              <span>Market Cap Dominance</span>
              {Market_cap_dominance.toFixed(3)}%
            </div>
            <hr />
            {/* Volume / market cap */}
            <div className="flex justify-between">
              <span>Volume / market cap</span>
              {(
                (BitcoinData.market_data &&
                  BitcoinData.market_data.total_volume.usd) /
                (BitcoinData.market_data &&
                  BitcoinData.market_data.market_cap.usd)
              ).toFixed(4)}
            </div>
            <hr />
            {/* All-Time High */}
            <div className="flex justify-between items-center">
              <span>All-Time High</span>
              <div className=" flex flex-col gap-0">
                <div className=" flex gap-1">
                  <p>
                    {" "}
                    $
                    {BitcoinData.market_data &&
                      BitcoinData.market_data.ath.usd}{" "}
                  </p>

                  <p
                    className={`${
                      BitcoinData.market_data &&
                      BitcoinData.market_data.ath_change_percentage.usd < 0
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {" "}
                    {BitcoinData.market_data &&
                      BitcoinData.market_data.ath_change_percentage.usd.toFixed(
                        1
                      )}{" "}
                    %
                  </p>
                </div>
                <div className=" flex justify-end">
                  {BitcoinData.market_data &&
                    new Date(
                      BitcoinData.market_data.ath_date.usd
                    ).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                </div>
              </div>
            </div>
            <hr />
            {/* All-Time Low */}
            <div className="flex justify-between items-center">
              <span>All-Time Low</span>
              <div className=" flex flex-col gap-0">
                <div className=" flex gap-1">
                  <p>
                    {" "}
                    $
                    {BitcoinData.market_data &&
                      BitcoinData.market_data.atl.usd}{" "}
                  </p>

                  <p
                    className={`${
                      BitcoinData.market_data &&
                      BitcoinData.market_data.atl_change_percentage.usd < 0
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {" "}
                    {BitcoinData.market_data &&
                      BitcoinData.market_data.atl_change_percentage.usd.toFixed(
                        1
                      )}{" "}
                    %
                  </p>
                </div>
                <div className=" flex justify-end">
                  {BitcoinData.market_data &&
                    new Date(
                      BitcoinData.market_data.atl_date.usd
                    ).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
