import React, { useState } from "react";
import ChefSideBarNav from "../../components/ChefSideBarNav";

import ChefMenuTopNavBar from "../../components/ChefMenuTopNavBar";
import AddMenuForm from "../../components/Add Menu Form/AddMenuForm";
import AllMenuTable from "../../components/AllMenusTable/AllMenuTable";

const ChefAddMenu = () => {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <React.Fragment>
      <div className=" px-4  sm:flex sm:pr-0 lg:px-0 lg:flex h-screen">
        <ChefSideBarNav />

        <main className="lg:flex lg:flex-col sm:w-[90%] sm:ml-[10%]   lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] sm:px-8  2xl:px-[300px] text-base text-primary ">
          <ChefMenuTopNavBar setCurrentTab={setCurrentTab}></ChefMenuTopNavBar>
          {currentTab === 1 && <AddMenuForm></AddMenuForm>}
          {currentTab === 2 && <AllMenuTable></AllMenuTable>}

          <div className=" pt-[120px]"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default ChefAddMenu;
