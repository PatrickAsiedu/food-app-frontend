import React from "react";
import Profile from "../../components/UI/Profile";
import OrderLunchForm from "../../components/OrderFoodForm/OrderlunchForm";
import UserSideBarNav from "../../components/UserSideBarNav";

const UserOrderFood = () => {
  const menuDate = "2022-05-26";

  // TODO: get menu for only

  return (
    <React.Fragment>
      <div className=" lg:flex h-screen ">
        <UserSideBarNav />

        <main className="hidden lg:flex flex-col md:ml-[30%] 2xl:ml-[20%]  w-[70%]  2xl:w-[80%] ">
          <div className="relative mt-6 w-full h-16 ">
            <Profile></Profile>
          </div>
          <OrderLunchForm devicestatus={"flex"} menuDate={menuDate} />
        </main>
      </div>
    </React.Fragment>
  );
};

export default UserOrderFood;
