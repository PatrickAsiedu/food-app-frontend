import React, { useState } from "react";
import Input from "../UI/Input";
import ToggleSwitch from "../UI/ToggleSwitch";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logInUser } from "../../redux/userSlice";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [logInError, setLogInError] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLogInError("");
    const response = await dispatch(
      logInUser({ phone_number, password })
    ).unwrap();
    // console.log(response)
    if (response.status === 202) {
      console.log(response);
      setIsLoggingIn(false);
      if (response.user.type === "user") {
        window.location.href = "/me";
      } else if (response.user.type === "chef") {
        window.location.href = "/chef";
      } else if (response.user.type === "admin") {
        window.location.href = "/admin";
      }
      // navigate('/me/order')   //remember to change to /me
    } else {
      // theres an error, diplay the message
      setLogInError(response.errorMessage);
      setIsLoggingIn(false);
    }
  };

  return (
    <form
      className="  flex flex-col mt-[22px] singup-form-shadow text-primary px-[22px] md:px-12  lg:px-[22px] 2xl:w-[516px] lg:mx-auto "
      onSubmit={onSubmitHandler}
    >
      <h1 className=" text-2xl font-semibold text-center mt-[40px] mb-[27px]">
        Nice to see you here
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
        value={phone_number}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Input
        styling={"w-full border mt-[22px]  h-[61px] pl-6 outline-links "}
        label="Password"
        placeholder="Enter Password"
        id="Pasword"
        type="password"
        title="Enter password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        ss
      />
      <div className="flex justify-between mt-[38px] text-sm ">
        <div className="flex  items-center">
          <ToggleSwitch />

          <label className=" ml-2" htmlFor="rememberme">
            Remember me
          </label>
        </div>
        <Link className="text-links hover:underline" to="/resetpassword">
          Forgot Password ?
        </Link>
      </div>

      {/* jon added this to display error messages */}
      <div>
        <p className="text-notification font-normal text-center mt-8 ">
          {logInError}
        </p>
      </div>
      {/* jon added this to display error messages */}
      <button className="bg-primary h-[63px] w-full mt-6 text-white font-bold rounded-lg">
        {isLoggingIn ? "Logging you in..." : "Continue"}
      </button>
      <div className=" w-full border border-black/10 h-[0px] mt-10"></div>
      <div className="self-center mt-[38px] text-center pb-20 text-sm ">
        <span className=" font-normal text-forgotpassword ">
          Don't Have an account?
        </span>
        <span>
          <Link
            to="/register"
            className="hover:underline font-normal text-links ml-4  "
          >
            Sign up now
          </Link>
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
