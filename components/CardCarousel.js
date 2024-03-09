"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

const SliderComponent = ({ child }) => {
  const containerRef = useRef(null);

  const [startX, setstartX] = useState(0);
  const [scrollLeft, setscrollLeft] = useState(0);

  const handleRightButtonClick = () => {
    const container = containerRef.current;
    const scrollAmount = 500;
    container.scrollTo({
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };
  const handleLeftButtonClick = () => {
    const container = containerRef.current;
    const scrollAmount = 500;
    container.scrollTo({
      left: container.scrollLeft - scrollAmount,
      behavior: "smooth",
    });
  };

  const handleTouchStart = (e) => {
    setstartX(e.touches[0].pageX);
    setscrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 1;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <div className="relative">
        <div
          className="contain flex mt-5 overflow-x-auto relative"
          ref={containerRef}
          style={{ overflow: "hidden" }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="mr-8 flex space-x-5">{child}</div>
        </div>
        <Image
          src="/logo/backarrowright.svg"
          height={40}
          width={40}
          onClick={handleRightButtonClick}
          alt="Next arrow"
          className="absolute top-1/2 right-0 z-10 cursor-pointer bg-gray-300 rounded-full p-2 sm:block hidden"
        />
        <Image
          src="/logo/backarrowright.svg"
          height={40}
          width={40}
          onClick={handleLeftButtonClick}
          alt="Previous arrow"
          className="absolute top-1/2 left-0 z-10 cursor-pointer bg-gray-300 rounded-full p-2 rotate-180 sm:block hidden"
        />
      </div>
    </>
  );
};

export default SliderComponent;
