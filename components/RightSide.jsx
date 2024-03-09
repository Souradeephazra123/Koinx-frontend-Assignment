import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const RightSide = () => {
  return (
    <div className=" flex flex-col justify-center items-center text-center text-white gap-5 rounded-2xl p-7 bg-blue-700">
      <p className=" sm:text-2xl text-lg font-bold sm:order-1 order-2">
        Get started with Koinx fror FREE
      </p>
      <p className=" sm:text-sm text-xs sm:order-2 order-3">
        with our range of features that you can equip for free, koinX allows you
        to be more educated and aware of your tax reports
      </p>
      <Image
        src="/touch.png"
        width={150}
        height={300}
        alt="touch image"
        className=" sm:h-[200px] h-[100px] sm:w-[150px] w-[100px] sm:order-3 order-1"
      />
      <button className=" sm:order-4 order-4 font-semibold text-black px-5 py-2 rounded-md sm:text-lg text-sm bg-white flex items-center">
        Get started for free &nbsp;{" "}
        <IoIosArrowRoundForward color="black" size={25} />
      </button>
    </div>
  );
};

export default RightSide;
