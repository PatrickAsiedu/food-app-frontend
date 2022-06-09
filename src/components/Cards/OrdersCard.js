import React from "react";

const OrdersCard = (props) => {
  return (
    <div className="sm:hidden lg:hidden w-full  box-outer-shadow rounded-3xl px-6 flex-col pt-6 text-primary mb-4  ">
      <h1 className="font-medium text-base text-primary break-words mb-2 ">
        {props.name} ,
        <span className=" ml-4 text-sm font-normal text-primary/30 ">Name</span>
      </h1>
      <h1 className="font-medium text-base text-primary break-words ">
        {props.foodname} ,
        <span className=" ml-4 text-sm font-normal text-primary/30 ">Food</span>
      </h1>
      <h1 className="mt-2 font-medium text-base text-primary break-words ">
        {props.drinkname} ,
        <span className=" ml-4 text-sm font-normal text-primary/30 ">
          Drinks
        </span>
      </h1>
      <h1 className="mt-2 font-normal text-sm text-primary/30 break-words ">
        Comments
      </h1>
      <div className="mt-2 font-normal text-primary">{props.comment}</div>

      <div className="flex justify-end mt-4 pb-4 font-medium">{props.date}</div>
    </div>
  );
};

export default OrdersCard;
