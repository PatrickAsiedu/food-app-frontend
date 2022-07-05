import React from "react";
import { useSelector } from "react-redux";
import { sortByDate } from "../../utils/util-functions";

const ShowAllUsersTable = () => {
  const userListunSorted = useSelector((state) => state.admin.allUsers);
  const userList = sortByDate([...userListunSorted])
  // console.log(userList);


  return (
    <div className="hidden sm:grid w-full  box-outer-shadow  rounded-3xl px-5 ">
      <div className="w-full pt-9  h-[72px] py-7  grid grid-cols-5 gap-3   ">
        <h1 className="font-semibold pl-3">Name</h1>
        <h1 className="font-semibold ">Number</h1>
        <h1 className="font-semibold ">Account Type</h1>
        <h1 className="font-semibold ">Account Status</h1>
        <h1 className="font-semibold ">Date Joined</h1>
      </div>

      <div className="mt-6 pb-24">
        {userList &&
          userList.map((user) => (
            <div
              key={user.id}
              className="w-full mt-6 bg-tablehighligh/50 grid grid-cols-5 text-sm gap-3 "
            >
              <h1 className="py-4 font-medium break-words pl-3 ">
                {user.name}
              </h1>
              <h1 className="py-4 font-medium break-words   ">
                {user.phone_number}
              </h1>
              <h1 className="py-4 font-medium break-words   ">{user.type}</h1>
              <h1 className="py-4 font-medium break-words   ">{user.status}</h1>
              <h1 className="py-4 font-medium break-words   ">
                {user.created_at.slice(0, -5).replace("T", " ")}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShowAllUsersTable;
