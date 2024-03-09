import React from "react";
import Team from "./atom/Team";
import YouMayAlsoLike from "./YouMayAlsoLike";
import TrendingCoin from "./TrendingCoin";
const TeamDetails = () => {
  const text =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque laudantium doloremque placeat pariatur iusto maiores hic rem inventore, minima deserunt eius, eligendi modi dignissimos saepe magni magnam error totam reiciendis tempora repellendus! Error, pariatur at dicta esse et tempore commodi sapiente consectetur maxime ipsum, praesentium porro repellat recusandae asperiores distinctio";
  return (
    <div className=" bg-white rounded-md flex flex-col gap-3 sm:p-4 p-1">
      <p className=" text-2xl">Team</p>
      <p className="sm:text-base text-[13px] text-justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum hic
        tempora deserunt quo, assumenda ducimus.
      </p>
      <div className=" flex flex-col gap-3">
        <Team
          img={"/image 1.webp"}
          Name={"Sandeep Nailwal"}
          designation={"Co-Founder"}
          organization={"Polygon"}
          about={text}
        />
        <Team
          img={"/image 2.webp"}
          Name={"Siddharth Malik"}
          designation={"Global CEO"}
          organization={"CleverTap"}
          about={text}
        />
        <Team
          img={"/image 3.webp"}
          Name={"Navin Gupta"}
          designation={"Managing Director"}
          organization={"Ripple"}
          about={text}
        />
      </div>
      <div className=" sm:hidden block">
        <YouMayAlsoLike />
        <TrendingCoin />
      </div>
    </div>
  );
};

export default TeamDetails;
