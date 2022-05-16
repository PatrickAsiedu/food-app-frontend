import React, { useState } from "react";
import Input from "../UI/Input";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/userSlice";

const initialState = {
  name: "",
  phone_number : "",
  password: ""
}

const SignupForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const [isSigningUp, setIsSigningUp] = useState(false);

  const signupFormHanlder =(e) => {
    setForm( {...form, [e.target.name]: e.target.value} )
    // console.log(form)
  }

  const submitFormHanlder =async(e) => {
    e.preventDefault();
    setIsSigningUp(true);
    // make the api calls
    const response = await dispatch(signUpUser(form)).unwrap();
    console.log(form)
    console.log(response)
  }
  


  return (
    <form onSubmit={submitFormHanlder} className=" flex flex-col mt-[22px] singup-form-shadow text-primary px-[22px] md:px-12  lg:px-[22px] 2xl:w-[516px] lg:mx-auto  ">
      <h1 className=" text-2xl font-semibold text-center mt-[40px] mb-[27px]">
        Nice to see you here
      </h1>
      <Input
        style={"w-full border mt-[22px] mb-[21px] h-[61px] pl-6 "}
        label="Name"
        placeholder="Enter Name"
        id="Name"
        type="text"
        name="name"
        value={form.name}
        onChange={signupFormHanlder}
      />
      <Input
        style={"w-full border mt-[22px] mb-[21px] h-[61px] pl-6 "}
        label="Phone Number"
        placeholder="Enter Phone Number"
        id="Phone Number"
        type="text"
        name='phone_number'
        value={form.phone_number}
        onChange={signupFormHanlder}
      />
      <Input
        forgotpasswordlink={"hidden"}
        style={"w-full border mt-[22px]  h-[61px] pl-6 "}
        label="Password"
        placeholder="Enter Password"
        id="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={signupFormHanlder}
      />
      <button type="submit" className="bg-primary h-[63px] w-full mt-[38px] text-white font-bold rounded-lg">
        {isSigningUp ? 'Creating your account' : 'Continue'}
      </button>

      <div className=" w-full border border-black/10 h-[0px] mt-10"></div>
      <div className="self-center mt-[38px] text-center mb-10">
        <span className=" font-normal text-forgotpassword ">
          Have an account?
        </span>
        <span>
          <Link
            to="/"
            className="text-primary font-normal text-links ml-4  "
          >
            Sign in
          </Link>
        </span>
      </div>
    </form>
  );
};

export default SignupForm;
