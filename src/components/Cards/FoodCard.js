import React from "react";

const FoodCard = ({ value }) => {
  return (
    <div className="lg:w-[247px] 2xl:w-[320px] h-[180px] box-outer-shadow rounded-3xl flex flex-col pl-9  justify-evenly  ">
      <h1 className=" ">Currie Rice</h1>
      <h1 className="text-2xl font-bold">6</h1>
    </div>
  );
};

export default FoodCard;
