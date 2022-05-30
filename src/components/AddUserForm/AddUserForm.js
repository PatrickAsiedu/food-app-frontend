import React from "react";
import Input from "../UI/Input";
import Select from "../UI/Select";

const AddUserForm = () => {
  return (
    <form
      className="w-[728px] mx-auto box-outer-shadow px-12 rounded-3xl mt-14 text-primary"
      action=""
    >
      <h1 className="mt-[74px] font-semibold text-2xl text-center mb-8">
        Add User Account
      </h1>
      <Select></Select>

      <Input
        styling={
          "w-full border mt-8 mb-[21px] h-[61px] pl-6 rounded-lg outline-links "
        }
        label="Name"
        placeholder="Enter Name"
        id="Name"
        type="text"
      ></Input>
      <Input
        styling={
          "w-full border mt-[22px] mb-[21px] h-[61px] pl-6  rounded-lg outline-links"
        }
        label="Phone Number"
        placeholder="Enter Phone Number"
        id="Phone Number"
        type="text"
      ></Input>
      <Input
        forgotpasswordlink={"hidden"}
        styling={
          "w-full border mt-[22px]  h-[61px] pl-6  rounded-lg outline-links"
        }
        label="Password"
        placeholder="Enter Password"
        id="Password"
        type="password"
      ></Input>
      <div className="flex justify-center">
        <button className="bg-primary h-[63px] w-[238px] mt-[38px] mb-12 text-white font-bold rounded-lg outline-links">
          Add User
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;
