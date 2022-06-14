import React, { useState } from "react";

const AddNewDrinkForm = () => {
  return (
    <form
      action=""
      className="w-full  box-outer-shadow mt-[5%] px-6 rounded-3xl 2xl:px-[86px] pt-9 lg:pt-16 text-base font-medium text-primary"
    >
      <label htmlFor="">Add Drink</label>
      <input
        className="w-full border-b h-12 outline-0  focus:border-links "
        type="text"
      />
      <button className="mt-8 bg-primary text-white font-bold h-11 w-40 lg:w-[186px]  lg:h-[50px] rounded-lg  mb-12">
        Add to Drinks List
      </button>
    </form>
  );
};

export default AddNewDrinkForm;
