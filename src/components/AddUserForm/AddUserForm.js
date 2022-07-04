import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/adminSlice";
import { displayError, displaySuccess } from "../../utils/util-functions";
import Input from "../UI/Input";
import Select from "../UI/Select";

const AddUserForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [type, setType] = useState("user");

  const [error, setError] = useState("");
  const [addingUser, setAddingUser] = useState(false);

  const onFormSubmitHandler = async (e) => {
    e.preventDefault();
    setAddingUser(true);
    setError("");
    // TODO; add validation to the varoius fields
    const newUser = {
      name,
      password,
      phone_number,
      type,
    };

    const response = await dispatch(addUser(newUser)).unwrap();
    console.log(response);
    if (response.status === 422) {
      setError(response.errorMessage);
      displayError(response.errorMessage);
      setAddingUser(false);
    } else if (response.status === 201) {
      setError("");
      displaySuccess("User Added successfully");
      setAddingUser(false);
    }

    console.log(newUser);
    setAddingUser(false);
  };

  return (
    <form
      className="w-full mx-auto box-outer-shadow px-6 sm:px-12 rounded-3xl sm:w-full xl:w-[728px]  text-primary pt-12"
      onSubmit={onFormSubmitHandler}
    >
      <h1 className=" font-semibold text-2xl text-center mb-8">
        Add User Account
      </h1>
      <Select setType={setType}></Select>

      <Input
        styling={
          "w-full border mt-8 mb-[21px] h-[61px] pl-6 rounded-lg outline-links "
        }
        label="Name"
        placeholder="Enter Name"
        id="Name"
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        styling={
          "w-full border mt-[22px] mb-[21px] h-[61px] pl-6  rounded-lg outline-links"
        }
        label="Phone Number"
        placeholder="Enter Phone Number"
        id="Phone Number"
        type="text"
        name="phone_number"
        pattern="[0]{1}[0-9]{9}"
        title="Please enter a valid phone number starting with 0 and of length 10 digits"
        onChange={(e) => setPhone_number(e.target.value)}
      />

      <Input
        forgotpasswordlink={"hidden"}
        styling={
          "w-full border mt-[22px]  h-[61px] pl-6  rounded-lg outline-links"
        }
        label="Password"
        placeholder="Enter Password"
        id="Password"
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && (
        <p className="text-notification font-normal text-center mt-8">
          {error}
        </p>
      )}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-primary h-[63px] w-[238px] mt-[38px] mb-12 text-white font-bold rounded-lg outline-links"
        >
          {addingUser ? "Adding User..." : "Add User"}
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;
