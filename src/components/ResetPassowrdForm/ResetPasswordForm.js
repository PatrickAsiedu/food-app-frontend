import React, {useState} from "react";
import Input from "../UI/Input";
import { Link } from "react-router-dom";

import API from '../../network/api';

const ResetPasswordForm = () => {
  const [phone_number, setPhone_number] = useState();
  const [result, setResult] = useState('')

  const onSubmitHandler = async(e) => {
    e.preventDefault()
    console.log(phone_number)

    API.post('/forgot-password', {phone_number: phone_number})
    .then(result=>{
      console.log(result)
      setResult(result.data.message)
    })
    .catch(error=>{
      console.log(error)
    })



  }


  return (
    <form onSubmit={onSubmitHandler} className="  flex flex-col mt-[22px] singup-form-shadow text-primary px-[22px] md:px-12   lg:mx-auto lg:w-[516px]  ">
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
        onChange={(e)=>setPhone_number(e.target.value)}
        value={phone_number}
        required='required'
        

      />
      <p className="text-notification font-normal text-center mt-8 ">
          {result}
        </p>
      <button  type='submit' className="bg-primary h-[63px] w-full mt-6 text-white font-bold rounded-lg ">
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
