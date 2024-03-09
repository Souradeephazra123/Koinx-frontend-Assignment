import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Breadcrumbs = () => {
  return (
    <div className=" sm:text-base text-xs flex gap-2 items-center h-fit bg-gray-200 sm:px-[50px] px-[10px] sm:py-[20px] py-[5px]">
      <span className=" cursor-pointer hover:underline text-slate-500">
        Cryptocurrencies
      </span>
      <MdKeyboardDoubleArrowRight color="black" size={20} />
      <span className=" cursor-pointer hover:underline">Bitcoin</span>
    </div>
  );
};

export default Breadcrumbs;
