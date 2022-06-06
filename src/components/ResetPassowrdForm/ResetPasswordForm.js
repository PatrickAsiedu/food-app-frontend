import React from "react";
import Input from "../UI/Input";
import { Link } from "react-router-dom";

const ResetPasswordForm = () => {
  return (
    <form className="  flex flex-col mt-[22px] singup-form-shadow text-primary px-[22px] md:px-12   lg:mx-auto lg:w-[516px]  ">
      <h1 className=" text-2xl font-semibold text-center mt-[40px] mb-6">
        Reset Your Password
      </h1>
      <h1 className="  text-center  mb-[27px]">
        Enter your phone number and we'll reset your password
      </h1>
      <Input
        styling={
          "w-full border mt-[22px] mb-[21px] h-[61px] pl-6 outline-links "
        }
        label="Phone Number"
        placeholder="Enter Phone Number"
        id="Phone Number"
        type="text"
        title="Enter a valid phone number starting with 0 and of length 10"
        pattern="[0]{1}[0-9]{9}"
        name="phone_number"
      />

      <button className="bg-primary h-[63px] w-full mt-6 text-white font-bold rounded-lg ">
        Reset Password
      </button>
      <div className=" w-full border border-black/10 h-[0px] mt-10"></div>
      <span className=" mt-6 text-center mb-20">
        <Link to="/" className="hover:underline font-normal text-links ml-4 ">
          Return to Login
        </Link>
      </span>
    </form>
  );
};

export default ResetPasswordForm;
