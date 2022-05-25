import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const name = useSelector((state) => state.user.user.name);
  const initial = name[0];
  return (
    <div className="w-[62px] h-[62px] bg-checkbox rounded-full absolute right-8">
      <span className=" font-semibold text-2xl text-primary absolute top-4 left-6">
        {initial}
      </span>
    </div>
  );
};

export default Profile;
