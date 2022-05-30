import React from "react";

const ShowAllUsersTable = () => {
  return (
    <div className=" w-full  box-outer-shadow  rounded-3xl px-5 ">
      <div className="w-full pt-9  h-[72px] py-7  grid grid-cols-3 gap-3   ">
        <h1 className="font-semibold pl-3">Name</h1>
        <h1 className="font-semibold ">Number</h1>
        <h1 className="font-semibold ">Account Type</h1>
      </div>

      <div className="mt-6 pb-24">
        <div className="w-full mt-6 bg-tablehighligh/50 grid grid-cols-3 text-sm gap-3 ">
          <h1 className="py-4 font-medium break-words pl-3 ">Kwaku Ntim</h1>

          <h1 className="py-4 font-medium break-words   ">0548798787899</h1>
          <h1 className="py-4 font-medium break-words   ">User</h1>
        </div>
      </div>
    </div>
  );
};

export default ShowAllUsersTable;
