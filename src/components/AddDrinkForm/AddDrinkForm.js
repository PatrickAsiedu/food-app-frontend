import React from "react";

const AddDrinkForm = () => {
  return (
    <form className="mt-9" action="">
      <label htmlFor="">Add Drink</label>
      <input className="w-full border-b h-12 outline-0  " type="text" />
      <button className="mt-5 mb-7 lg:mb-11 bg-primary text-white font-bold h-11 w-40 lg:w-[186px] lg:h-[50px] rounded-lg ">
        Add Menu
      </button>
    </form>
  );
};

export default AddDrinkForm;
