import React, { useState } from "react";

const CustomRadioBox = (props) => {
  const onSelectHandler = () => {
    props.passfunc(props.id);
  };

  const RadioClickHandler = () => {
    props.passfunc(props.id);
  };
  return (
    <div
      className={
        props.selected
          ? "bg-primary relative  mt-[18px] flex  items-center  py-[18px]  rounded-lg pl-10 hover:cursor-pointer transition-all"
          : "relative  mt-[18px] flex  items-center  py-[18px]  rounded-lg pl-5 hover:cursor-pointer"
      }
      onClick={onSelectHandler}
    >
      <input
        className="check_me peer appearance-none h-5 w-5 rounded-full border  "
        type="radio"
        name={props.fieldset}
        checked={props.selected}
        onChange={RadioClickHandler}
        // onClick={(e) => setFood(e.target.id)}
      />
      <label
        className={props.selected ? "text-white ml-[14px]" : "ml-[14px]"}
        htmlFor="hey"
      >
        {props.children}
      </label>
    </div>
  );
};

export default CustomRadioBox;
