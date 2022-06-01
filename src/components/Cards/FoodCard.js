import React from "react";

const FoodCard = (props) => {
  return (
    <div className=" lg:w-[230px] 2xl:w-[320px] h-[140px] box-outer-shadow rounded-3xl flex flex-col pl-9  justify-evenly  ">
      <h1 className=" ">{props.foodName}</h1>
      <h1 className="text-2xl font-bold">{props.total}</h1>
    </div>
  );
};

export default FoodCard;
