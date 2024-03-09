"use client";
import React, { useEffect, useRef, useState } from "react";

const TradingViewWidget = ({ time }) => {
  const containerRef = useRef();
  const [widgetWidth, setWidgetWidth] = useState("100%");
  const [widgetHeight, setWidgetHeight] = useState("auto");

  useEffect(() => {
    const updateDimensions = () => {
      const viewportWidth =
        typeof window !== "undefined" &&
        (window.innerWidth || document.documentElement.clientWidth);

      const newWidgetWidth = viewportWidth < 768 ? "80%" : "100%";
      const newWidgetHeight = viewportWidth < 768 ? "300px" : "450px";

      setWidgetWidth(newWidgetWidth);
      setWidgetHeight(newWidgetHeight);
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;

    script.innerHTML = `
      {
        "width": "auto",
        "symbol": "BINANCE:BTCUSDT",
        "interval": "${time}",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "3",
        "locale": "en",
        "enable_publishing": false,
        "hide_top_toolbar": true,
        "hide_legend": true,
        "save_image": false,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      }
    `;
    if (containerRef.current) {
      containerRef.current.innerHTML = ""; // Clear existing content
      containerRef.current.appendChild(script);
    }


    return () => {
      if (containerRef.current && script.parentNode === containerRef.current) {
        containerRef.current.removeChild(script);
      }
    };
  }, [time]);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TradingViewWidget;
