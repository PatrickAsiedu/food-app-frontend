import React from "react";

const AddFoodForm = () => {

  return (
    <form action="">
      <label htmlFor="">Add Food</label>
      <input 
        className="w-full border-b h-12 outline-0 "
        type="text" 
      />

      
      <button className="mt-5 bg-primary text-white font-bold h-11 w-40 lg:w-[186px]  lg:h-[50px] rounded-lg ">
        Add Food
      </button>
    </form>
  );
};

export default AddFoodForm;
