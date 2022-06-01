import React from "react";

const Notificationtile = ({value}) => {

  return (
    <div className=" w-[31px] h-[26px] ml-3 bg-notification rounded-full text-primary flex justify-center align-center">
      <span className=" ">{value || 0}</span>
    </div>
  );
};

export default Notificationtile;
