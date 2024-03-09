import Performance from "@/components/Performance";
import RightSide from "@/components/RightSide";
import Trending from "@/components/Trending";
import Sentiment from "@/components/Sentiment";
import Tokenomics from "../components/Tokenomics";
import "./globals.css";
import TeamDetails from "@/components/TeamDetails";
import AboutBitCoin from "@/components/AboutBitCoin";
import TradingDetails from "@/components/TradingDetails";

export default function Home() {
  return (
    <main className=" w-full px-[10px] sm:px-[50px] pb-[50px] flex sm:flex-row flex-col justify-between gap-8 bg-gray-200 font-sans ">
      <div className=" sm:w-2/3 w-full flex flex-col gap-5">
        <TradingDetails />
        <Performance />
        <Sentiment />
        <AboutBitCoin />
        <Tokenomics />
        <TeamDetails />
      </div>
      <div className=" sm:w-1/3 w-full flex flex-col gap-5">
        <RightSide />
        <Trending />
      </div>
    </main>
  );
}
