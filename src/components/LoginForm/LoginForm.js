import React from "react";
import Input from "../UI/Input";
import ToggleSwitch from "../UI/ToggleSwitch";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form className=" flex flex-col mt-[22px] singup-form-shadow text-primary px-[22px] md:px-12  lg:px-[22px] 2xl:w-[516px] lg:mx-auto  ">
      <h1 className=" text-2xl font-semibold text-center mt-[40px] mb-[27px]">
        Nice to see you here
      </h1>

      <Input
        style={"w-full border mt-[22px] mb-[21px] h-[61px] pl-6 "}
        label="Phone Number"
        placeholder="Enter Phone Number"
        id="Phone Number"
        type="text"
      ></Input>
      <Input
        style={"w-full border mt-[22px]  h-[61px] pl-6 "}
        label="Password"
        placeholder="Enter Password"
        id="Password"
        type="password"
      ></Input>

      <div className="flex  items-center mt-[38px]">
        <ToggleSwitch></ToggleSwitch>

        <label className=" ml-2" htmlFor="rememberme">
          Remember me
        </label>
      </div>

      <button className="bg-primary h-[63px] w-full mt-[51px] text-white font-bold rounded-lg">
        Continue
      </button>

      <div className=" w-full border border-black/10 h-[0px] mt-10"></div>
      <div className="self-center mt-[38px] text-center pb-20">
        <span className=" font-normal text-forgotpassword ">
          Don't Have an account?
        </span>
        <span>
          <Link
            to="/Signup"
            className="text-primary font-normal text-links ml-4  "
          >
            Sign up now
          </Link>
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
