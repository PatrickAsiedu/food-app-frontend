import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const name = useSelector((state) => state.user.user.name);
  let initials = name[0];

  return (
    <div className="bg-checkbox h-[62px] w-[62px] rounded-full absolute right-8 ">
      <span className="absolute top-4 left-5 font-semibold text-2xl text-primary">
        {initials}
      </span>
    </div>
  );
};

export default Profile;
