import React from "react";

const Select = ({ setType }) => {
  return (
    // <div className="px-20">
    //   <select
    //     id="countries"
    //     className="bg-white border border-gray-300 text-primary text-sm rounded-lg focus:ring-links focus:border-links block w-full p-2.5
    //     dark:bg-links dark:border-links dark:placeholder-primary dark:text-white dark:focus:ring-links dark:focus:border-links outline-links"
    //   >
    //     <option selected>Choose a country</option>
    //     <option value="US" className="focus:bg-primary">
    //       United States
    //     </option>
    //     <option value="CA">Canada</option>
    //     <option value="FR">France</option>
    //     <option value="DE">Germany</option>
    //   </select>
    // </div>

    <div className="flex justify-center text-primary">
      {/* <div className="w-[100px] h-12 border">
        <select name="usertype" id="usertype" class></select>
      </div> */}
      <div className="mb-3 xl:w-96 text-primary">
        <select
          name="usertype"
          id="usertype"
          onChange={(e) => setType(e.target.value)}
          className="  text-primary
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal

      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-primary focus:bg-white focus:border-links focus:outline-links"
        >
          <option value="" className="hover:bg-primary w-[100px]">
            Choose User Type
          </option>
          <option value="user" className="hover:bg-primary w-[100px]">
            User
          </option>
          <option value="chef" className="hover:bg-primary w-[100px]">
            Chef
          </option>
          <option value="admin" className="hover:bg-primary w-[100px]">
            Admin
          </option>
        </select>
      </div>
    </div>
  );
};

export default Select;
