import React from "react";
import Profile from "../../components/UI/Profile";

const UserTitlebar = (props) => {
  return (
    <div className=" mt-8 w-full h-16  flex justify-between px-8   ">
      <h1 className="font-semibold text-xl text-primary">{props.title}</h1>
      <Profile></Profile>
    </div>
  );
};

export default UserTitlebar;
