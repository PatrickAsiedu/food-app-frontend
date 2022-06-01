import React, { useState } from "react";
import BSLlogo from "../assets/logo-stack-dark 1 1.png";
import LoginForm from "../components/LoginForm/LoginForm";
import LunchIllustration from "../assets/undraw_eating_together_re_ux62 1.png";

const Login = () => {
  return (
    <React.Fragment>
      <div className="lg:flex">
        <div className="px-6 md:px-24 lmd:px-40  lg:w-[50%]">
          <div className="flex justify-center mt-9 text-primary">
            <div className="flex items-center mx-">
              <img src={BSLlogo} alt="" />
              <span className="  ml-3 font-bold text-[20px] text-black ">
                BSL <span className="text-primary">ORDERS</span>{" "}
              </span>
            </div>
          </div>
          <LoginForm />
          <div className=" pt-[120px]"></div>
        </div>
        <div className=" hidden fixed ml-[50%] h-screen  lg:flex lg:w-[50%]">
          <div className="bg-primary rounded-[62px] mx-auto w-[75%] h-[90%] mt-[5%] flex justify-center items-center">
            <img className="" src={LunchIllustration} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
