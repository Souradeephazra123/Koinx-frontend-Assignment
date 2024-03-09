"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Recommend from "./atom/recommend";
import CardCarousel from "@/components/CardCarousel";
const YouMayAlsoLike = () => {
  const [RecommendData, setRecommendData] = useState([]);

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

        const data = response.data;

        setRecommendData(data.coins);
      } catch (error) {
        console.error(error);
      }
    };
    fetchedData();
  }, []);

  useEffect(() => {
    console.log("RecommendData", RecommendData);
  }, [RecommendData]);
  return (
    <div className=" sm:px-[50px] px-0 sm:pt-[50px] pt-0">
      {RecommendData.length === 0 ? (
        <p>No items to display</p>
      ) : (
        <>
          <p className=" sm:text-2xl text-lg font-semibold">
            You may also like
          </p>
          <CardCarousel
            child={RecommendData.map((data) => (
              <Recommend
                logo={data.item.large}
                text1={data.item.symbol}
                increase={data.item.data.price_change_percentage_24h.usd.toFixed(
                  2
                )}
                price={data.item.data.price}
                line={data.item.data.sparkline}
              />
            ))}
          />
        </>
      )}
    </div>
  );
};

export default YouMayAlsoLike;
