import React from "react";
import UserSideBarNav from "../../components/UserSideBarNav";

import UserTitlebar from "../../components/Usertitle bar/Usertitlebar";

import UserOrderHistoryTable from "../../components/Cards/UserOrderHistoryTable";
// import OrderHistoryCard from "../../components/Cards/OrderHistoryCard";

const UserHistories = () => {
  return (
    <React.Fragment>
      <div className=" px-4  sm:flex sm:pr-0 lg:px-0 lg:flex h-screen ">
        <UserSideBarNav />

        <main className="lg:flex lg:flex-col sm:w-[90%] sm:ml-[10%]  lg:px-0 lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] sm:px-8 ">
          <UserTitlebar title="Your Order History"></UserTitlebar>

          {/* <OrderHistoryCard></OrderHistoryCard> */}

          <UserOrderHistoryTable />

          <div className=" pt-[120px]"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default UserHistories;
