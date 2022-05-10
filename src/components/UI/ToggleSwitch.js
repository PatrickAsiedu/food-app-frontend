import React from "react";

const ToggleSwitch = (props) => {
  return (
    <label
      className={`${
        props.devicestatus
      } ${"relative inline-block bg-switch w-10 h-5 rounded-full cursor-pointer  "}`}
    >
      <input className="peer sr-only" type="checkbox"  />
      <span
        className=" absolute w-10 h-5 peer-checked:bg-primary duration-500 rounded-full
              before:absolute before:content-[''] before:w-4 before:h-4 before:bg-white 
              before:rounded-full  before:top-[2px] before:left-[2px]
            before:switchshadow before:peer-checked:left-[22px] before:duration-500
            "
      ></span>
    </label>
  );
};

export default ToggleSwitch;
