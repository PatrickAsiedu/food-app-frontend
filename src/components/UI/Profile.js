import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const name = useSelector((state) => state.user.user.name);
  let initials = name[0];

  return (
    <div className="hidden sm:flex lg:flex bg-checkbox h-[40px] w-[40px] rounded-full  justify-center items-center">
      <span className=" font-semibold text-xl text-primary">{initials}</span>
    </div>
  );
};

export default Profile;
