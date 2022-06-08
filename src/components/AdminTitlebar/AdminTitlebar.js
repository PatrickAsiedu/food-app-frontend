import React from "react";

const AdminTitleBar = (props) => {
  return (
    <div className=" sm:flex sm:mt-10 lg:mt-8 w-full h-16  lg:flex justify-between    ">
      <h1 className="font-semibold lg:text-xl text-primary">{props.title}</h1>
      <h1 className="hidden lg:flex lg:text-lg text-primary">{props.date}</h1>
    </div>
  );
};

export default AdminTitleBar;
