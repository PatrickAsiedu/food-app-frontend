import React from "react";

import { useState, useEffect } from "react";
import OrderLunchForm from "../../components/OrderFoodForm/OrderlunchForm";
import UserSideBarNav from "../../components/UserSideBarNav";
import UserTitlebar from "../../components/Usertitle bar/Usertitlebar";

const UserEditOrder = () => {
  const [menuQueryDate, setMenuQueryDate] = useState("");
  useEffect(() => {
    const dateNow = new Date();
    // console.log(dateNow.getHours())
    if (dateNow.getHours() < 7) {
      setMenuQueryDate(dateNow.toISOString().split("T")[0]);
      // console.log(dateNow.toISOString().split('T')[0])
      console.log(
        "current time before 07:00AM.... so we are getting today's menu ie. ",
        menuQueryDate
      );
    } else {
      let tomorrow = new Date();
      tomorrow.setDate(dateNow.getDate() + 1);
      setMenuQueryDate(tomorrow.toISOString().split("T")[0]);
      // console.log(tomorrow.toISOString().split('T')[0])
      console.log(
        "Current time after 07:00AM .... so we are getting tommorow's menu ie. ",
        menuQueryDate
      );
    }
  }, [menuQueryDate]);

  return (
    <React.Fragment>
      {/* <AlreadyOrderedModal></AlreadyOrderedModal> */}

      <div className=" px-4  sm:flex sm:pr-0 lg:px-0 lg:flex h-screen ">
        <UserSideBarNav />

        <main className=" lg:flex lg:flex-col sm:w-[90%] sm:ml-[10%]  lg:px-0 lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] sm:px-8  ">
          <UserTitlebar title="Place Your Order"></UserTitlebar>
          <OrderLunchForm devicestatus={"flex"} menuDate={menuQueryDate} />
          <div className=" pt-[120px]"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default UserEditOrder;