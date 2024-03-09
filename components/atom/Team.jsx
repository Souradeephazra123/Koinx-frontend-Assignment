import Image from "next/image";
import React from "react";

const Team = ({ img, Name, designation, organization, about }) => {
  return (
    <div className=" bg-blue-100 rounded-md flex sm:flex-row flex-col gap-5 py-2 px-5 items-center font-sans">
      <div className=" flex flex-col text-center">
        <Image
          src={img}
          width={200}
          height={200}
          alt="man"
          className=" rounded-xl sm:w-[120px] w-[100px] sm:h-[120px] h-[100px] "
        />
        <p className=" whitespace-nowrap font-semibold sm:text-base text-sm">
          {Name}
        </p>
        <p className=" sm:text-base text-sm">
          {designation} <br /> {organization}
        </p>
      </div>
      <div className="sm:text-base text-[13px] text-justify">{about}</div>
    </div>
  );
};

export default Team;
