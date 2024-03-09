import Image from "next/image";
import React from "react";

const Box = ({ img, header, Text, color }) => {
  return (
    <div
      className={` flex items-start sm:w-[450px] w-[250px] rounded-md p-2 ${color} `}
    >
      <Image
        src={img}
        width={60}
        height={60}
        alt="Icon"
        className={` rounded-full sm:w-[60px] w-[30px] sm:h-[60px] h-[30px]  }`}
      />
      <div className=" flex flex-col sm:text-base text-[10px]">
        <div className=" font-medium">{header}</div>
        <div className=" text-slate-600">{Text}</div>
      </div>
    </div>
  );
};

export default Box;
