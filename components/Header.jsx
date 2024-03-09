"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [Show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!Show);
  };

  return (
    <div className=" flex items-center justify-between shadow-md font-semibold px-[20px] sm:px-[50px]">
      <Image
        src="/logo.svg"
        alt="logo"
        width={100}
        height={40}
        className=" cursor-pointer sm:w-[150px] w-[100px] sm:h-[60px] h-[40px]"
      />

      <div className=" items-center gap-3 hidden sm:flex">
        <p className=" cursor-pointer">Crypto taxes</p>
        <p className=" cursor-pointer">Free tools</p>
        <p className=" cursor-pointer">Resources center</p>
        <button className="text-white rounded-md bg-blue-500 whitespace-nowrap w-fit h-fit py-2 px-4">
          Get started
        </button>
      </div>
      <div className=" flex sm:hidden">
        <IoIosMenu onClick={handleClick} size={30} color="black" />
        {Show && (
          <div className=" z-10 bg-black transition-transform transform delay-150 duration-600 translate-x-0 p-6 fixed bg-opacity-100 right-0 h-[100vh] overflow-auto w-[100vw] top-0 flex justify-between">
            <ul className=" flex flex-col gap-2">
              <li className=" p-2 cursor-pointer text-white">Crypto taxes</li>
              <li className=" p-2 cursor-pointer text-white">Free tools</li>
              <li className=" p-2 cursor-pointer text-white">
                Resources center
              </li>
              <button className="text-white rounded-md bg-blue-500 whitespace-nowrap w-fit h-fit py-2 px-4">
                Get started
              </button>
            </ul>
            <IoMdClose onClick={handleClick} size={30} color="white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
