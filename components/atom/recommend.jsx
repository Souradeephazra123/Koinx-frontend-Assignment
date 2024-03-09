import Image from "next/image";
import React from "react";

const recommend = ({ logo, text1, increase, price, line }) => {
  return (
    <div
      className=" rounded-md bg-white sm:w-[250px] w-[150px] h-auto sm:p-3 p-1 border-[1px] border-gray-400"
      style={{ paddingRight: "50px" }}
    >
      <div className=" flex items-center gap-2">
        <Image
          src={logo}
          width={20}
          height={20}
          alt="logo"
          className=" rounded-full sm:w-[20px] w-[10px] sm:h-[20px] h-[10px]"
        />
        <div className=" flex">
          <span className=" sm:text-sm text-[10px]">{text1}</span>
          <div
            className={`  py-[1px] px-[4px] h-fit w-fit  flex gap-2 items-center rounded
      ${
        increase > 0 ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"
      }
          `}
          >
            <span
              className={`sm:text-sm text-[10px]
            
            `}
            >
              {increase}
            </span>
          </div>
        </div>
      </div>
      <p className=" sm:text-2xl text-[14px] ">{price}</p>
      <div className=" flex justify-center items-center">
        <Image
          src={line}
          width={150}
          height={40}
          alt="line"
          className=" sm:w-[150px] w-[75px] h-auto"
        />
      </div>
    </div>
  );
};

export default recommend;
