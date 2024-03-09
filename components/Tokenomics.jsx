import React from "react";

const Tokenomics = () => {
  return (
    <div className="  flex-col gap-5 bg-white p-3 rounded-md pb-20 sm:flex hidden">
      <p className=" text-2xl font-sans">Tokenomics</p>
      <p className=" text-xl font-sans">Initial distribution</p>
      <div className=" flex gap-5 items-center">
        <div>
          <div className="loader"></div>
        </div>

        <div className=" flex flex-col gap-4">
          <div className=" flex gap-2 items-center">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <p>Crowdsale Investors : 80%</p>
          </div>
          <div className=" flex gap-2 items-center">
            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
            <p>Foundation : 20%</p>
          </div>
        </div>
      </div>
      <p className=" font-sans">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quis magni
        iure libero veritatis! Nihil dicta saepe delectus atque voluptatibus
        ullam eligendi magnam, hic aspernatur odit minus. Fuga eveniet iste,
        quos earum dolores quidem molestias distinctio quisquam natus pariatur
        et qui expedita praesentium voluptate hic nesciunt atque doloribus!
        Facilis repellat voluptate quas neque enim rem maxime ad soluta,
        voluptatem vel nisi quam. Molestiae fuga dignissimos laborum, fugit
        harum magni ut numquam nihil necessitatibus nam nostrum quas temporibus,
        velit odio possimus quidem pariatur repellat vel! Qui dolore, quos vel
        consequatur ducimus in asperiores esse autem nihil modi ut quidem aut
        culpa.
      </p>
    </div>
  );
};

export default Tokenomics;
