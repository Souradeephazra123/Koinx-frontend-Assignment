import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const AboutBitCoin = () => {
  return (
    <div className=" bg-white sm:p-5 p-1 rounded-md sm:space-y-4 space-y-1">
      <p className="sm:text-2xl text-xl font-medium">About Bitcoin</p>
      <div className=" flex flex-col sm:gap-3 gap-1">
        <p className=" sm:text-xl text-base font-medium">What is Bitcoin</p>
        <p className=" sm:text-base text-[13px] text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ipsam
          nam autem, ut excepturi alias blanditiis inventore maiores
          dignissimos! Eius possimus quasi cumque illum officia accusantium
          placeat dicta error ipsam laboriosam, maxime consequuntur optio amet
          natus esse reiciendis tempora vero animi quis qui repudiandae rem
          blanditiis cupiditate at. Voluptates atque debitis est soluta ea
          deleniti corrupti totam officia, ex officiis non ipsum distinctio
          cupiditate, facere cum delectus inventore nostrum, nobis quos illum
          sint? Qui, illo?
        </p>
      </div>
      <hr />
      <div className=" flex flex-col sm:gap-3 gap-1">
        <p className=" sm:text-xl text-base font-medium">
          Lorem ipsum dolor sit amet.
        </p>
        <p className="sm:text-base text-[13px] text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ipsam
          nam autem, ut excepturi alias blanditiis inventore maiores
          dignissimos! Eius possimus quasi cumque illum officia accusantium
          placeat dicta error ipsam laboriosam, maxime consequuntur optio amet
          natus esse reiciendis tempora vero animi quis qui repudiandae rem
          blanditiis cupiditate at. Voluptates atque debitis est soluta ea
          deleniti corrupti totam officia, ex officiis non ipsum distinctio
          cupiditate, facere cum delectus inventore nostrum, nobis quos illum
          sint? Qui, illo?
        </p>
        <p className="sm:text-base text-[13px] text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil ipsam
          nam autem, ut excepturi alias blanditiis inventore maiores
          dignissimos! Eius possimus quasi cumque illum officia accusantium
          placeat dicta error ipsam laboriosam, maxime consequuntur optio amet
          natus esse reiciendis tempora vero animi quis qui repudiandae rem
          blanditiis cupiditate at. Voluptates atque debitis est soluta ea
          deleniti corrupti totam officia, ex officiis non ipsum distinctio
          cupiditate, facere cum delectus inventore nostrum, nobis quos illum
          sint? Qui, illo?
        </p>
        <p className=" sm:text-base text-[13px] text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          perferendis sunt illum. Reiciendis natus vel beatae ipsum molestiae
          provident maiores ullam quidem dolore dignissimos eum ipsam, illum
          dolorem excepturi explicabo earum, officiis culpa eaque veniam
          voluptatibus voluptates non aperiam quaerat. Quo fugit nam ipsum
          quibusdam. Nihil fugiat autem perspiciatis nesciunt?
        </p>
      </div>
      <hr />
      <div className=" flex flex-col sm:gap-3 gap-1">
        <p className="sm:text-xl text-base font-medium">
          Alredy Holding Bitcoin
        </p>
        <div className=" w-full flex sm:flex-row flex-col gap-5">
          <div className=" sm:w-1/2 w-full card rounded-md flex gap-4 p-2">
            <Image
              src="/forex.jpg"
              width={200}
              height={200}
              alt="forex"
              className=" w-[100px] h-[100px] rounded"
            />
            <div className=" flex flex-col justify-between">
              <p className=" sm:text-xl text-base text-white font-bold">
                Calculte your Profits
              </p>
              <button className="sm:text-base text-sm bg-white rounded-md py-1 px-3 flex gap-3 w-fit items-center">
                Check now
                <GoArrowRight color="black" size={20} />
              </button>
            </div>
          </div>
          <div className=" sm:w-1/2 w-full card1 rounded-md flex gap-4 p-2">
            <Image
              src="/checkBalance.jpg"
              width={200}
              height={200}
              alt="tax-liability"
              className=" w-[100px] h-[100px] rounded"
            />
            <div className=" flex flex-col justify-between">
              <p className=" sm:text-xl text-base font-bold text-white">
                Calculte your Tax liability
              </p>
              <button className=" sm:text-base text-sm bg-white py-1 px-3 rounded-md flex gap-2 w-fit items-center">
                Check now
                <GoArrowRight color="black" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="sm:text-base text-[13px] text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nulla,
        quaerat quis corporis ullam et facere possimus, qui quisquam ducimus
        itaque. Deserunt perspiciatis assumenda vel ipsam architecto dolorem. A
        explicabo voluptatibus numquam error facere magni fugit. Eum,
        consequatur quo odit eveniet culpa atque ea incidunt ad dolorem. Quo,
        commodi eveniet.
      </div>
    </div>
  );
};

export default AboutBitCoin;
