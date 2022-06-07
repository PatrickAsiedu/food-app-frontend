import React from "react";
import ResetPasswordForm from "../components/ResetPassowrdForm/ResetPasswordForm";
import BSLlogo from "../assets/logo-stack-dark 1 1.png";
const ResetPassword = () => {

  return (
    <React.Fragment>
      <div className="px-6 md:px-24 lmd:px-40  ">
        <div className="flex justify-center mt-9 text-primary">
          <div className="flex items-center mx-">
            <img src={BSLlogo} alt="" />
            <span className="  ml-3 font-bold text-[20px] text-black ">
              BSL <span className="text-primary">ORDERS</span>{" "}
            </span>
          </div>
        </div>
        <ResetPasswordForm />
      </div>
    </React.Fragment>
  );
};

export default ResetPassword;
