import React from "react";

const Notificationtile = (props) => {
  return (
    <div
      className={`${
        props.status
      } ${" w-[24px] h-[24px] ml-3 bg-notification rounded-full text-primary flex justify-center items-center"}`}
    >
      <span className="text-white text-xs ">{props.value || 0}</span>
    </div>
  );
};

export default Notificationtile;
