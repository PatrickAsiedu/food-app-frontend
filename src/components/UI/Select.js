import React from "react";

const Select = () => {
  return (
    <div className="flex justify-center text-primary">
      <div className="mb-3 xl:w-96 text-primary">
        {/* <select name="" id=""></select> */}
        <select
          name="usertype"
          id="usertype"
          className="form-select appearance-none text-primary
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
          //   aria-label="Default select example"
        >
          <option value="" className="hover:bg-primary">
            Choose User Type
          </option>
          <option value="user">User</option>
          <option value="chef">Chef</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </div>
  );
};

export default Select;
