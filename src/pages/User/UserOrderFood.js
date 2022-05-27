import React from "react";
import Profile from "../../components/UI/Profile";
import { useState, useEffect } from "react";
import OrderLunchForm from "../../components/OrderFoodForm/OrderlunchForm";
import UserSideBarNav from "../../components/UserSideBarNav";
import AlreadyOrderedModal from "../../components/UI/Modals/AlreadyOrderedModal";

const UserOrderFood = () => {
  // const menuDate = '2022-05-26';
  const [menuQueryDate, setMenuQueryDate] = useState("");

  // TODO: get menu
  // if time is before 7 am get todays menu; else get tommorrow's menu
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

      <div className=" lg:flex h-screen ">
        <UserSideBarNav />

        <main className="hidden lg:flex flex-col md:ml-[30%] 2xl:ml-[20%]  w-[70%]  2xl:w-[80%]  ">
          <div className="relative mt-6 w-full h-16 mb-[50px] ">
            <Profile></Profile>
          </div>
          <OrderLunchForm devicestatus={"flex"} menuDate={menuQueryDate} />
          <div className=" pt-[120px]"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default UserOrderFood;
