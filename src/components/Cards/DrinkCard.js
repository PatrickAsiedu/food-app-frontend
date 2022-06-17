import React from "react";

const DrinkCard = (props) => {
  return (
    <div className="lg:w-[200px] xl:w-[240px] 2xl:w-[320px] h-[140px] box-outer-shadow rounded-3xl flex flex-col pl-9  justify-evenly  ">
      <h1 className=" ">{props.drinkName}</h1>
      <h1 className="text-2xl font-bold">{props.total}</h1>
    </div>
  );
};

export default DrinkCard;
