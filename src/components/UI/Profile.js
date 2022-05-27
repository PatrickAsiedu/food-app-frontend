import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const name = useSelector((state) => state.user.user.name);
  let initials = name[0];

  return (
    <div className="bg-checkbox h-[54px] w-[54px] rounded-full absolute right-8 flex justify-center items-center">
      <span className=" font-semibold text-2xl text-primary">{initials}</span>
    </div>
  );
};

export default Profile;
