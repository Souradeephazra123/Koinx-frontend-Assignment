"use client";
import React, { useEffect, useState } from "react";

const Progressbar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const calculateScrollPercentage = () => {
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const totalDocScrollLength = docHeight - windowHeight;
      const scrollPosition = scrollTop / totalDocScrollLength;

      setScrollPercentage(scrollPosition * 100);
    };

    window.addEventListener("scroll", calculateScrollPercentage);

    return () => {
      window.removeEventListener("scroll", calculateScrollPercentage);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${scrollPercentage}%`,
        height: "5px",
        backgroundColor: "blue",
        zIndex: 1000,
      }}
    ></div>
  );
};

export default Progressbar;
