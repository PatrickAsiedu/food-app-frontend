import React from "react";
import UserSideBarNav from "../../components/UserSideBarNav";

import UserTitlebar from "../../components/Usertitle bar/Usertitlebar";

import UserOrderHistoryTable from "../../components/Cards/UserOrderHistoryTable";

const UserHistories = () => {
 



  

  

  return (
    <React.Fragment>
      <div className=" px-8 lg:px-0 lg:flex h-screen  ">
        <UserSideBarNav />

        <main className="lg:flex lg:flex-col   lg:px-0 lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] ">
          <UserTitlebar title="Your Order History"></UserTitlebar>
          
          <UserOrderHistoryTable />
        
          <div className=" pt-[120px]"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default UserHistories;
