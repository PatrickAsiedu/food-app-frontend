import React from "react";

const ShowAllUsersCard = (props) => {
  return (
    <div className="sm:hidden w-full  box-outer-shadow rounded-3xl px-6 flex-col pt-6 text-primary mb-4 pb-4 ">
      <h1 className="font-medium text-base text-primary break-words ">
        {props.name} ,
        <span className=" ml-4 text-sm font-normal text-primary/30 ">Name</span>
      </h1>
      <h1 className="mt-2 font-medium text-base text-primary break-words ">
        {props.number} ,
        <span className=" ml-4 text-sm font-normal text-primary/30 ">
          Number
        </span>
      </h1>
      <h1 className="mt-2 font-medium text-base text-primary break-words ">
        {props.type} ,
        <span className=" ml-4 text-sm font-normal text-primary/30 ">
          Account Type
        </span>
      </h1>
      <h1 className="mt-2 font-medium text-base text-primary break-words ">
        {props.status} ,
        <span className=" ml-4 text-sm font-normal text-primary/30 ">
          Status
        </span>
      </h1>
      <h1 className="mt-2 font-medium text-base text-primary break-words ">
        {props.date} ,
        <span className=" ml-4 text-sm font-normal text-primary/30 ">
          Date Registered
        </span>
      </h1>
    </div>
  );
};

export default ShowAllUsersCard;
