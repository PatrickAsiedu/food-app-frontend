import React, { useState, useRef } from "react";
import AdminSideBarNav from "../../components/AdminSideBarNav";

import AddMenuFormAdmin from "../../components/Add Menu Form/AddMenuFormAdmin";
import AdminMenuTopNavBar from "../../components/AdminMenuTopNavBar";
import AllMenuTable from "../../components/AllMenusTable/AllMenuTable";
import AdminEditMenuForm from "../../components/AdminEditMenuForm/AdminEditMenuForm";

const AdminAddMenu = () => {
  const [currentTab, setCurrentTab] = useState(2);
  const currentEditableMenuRef = useRef()

  return (
    <React.Fragment>
      <div className="px-4  sm:flex sm:pr-0 lg:px-0 lg:flex h-screen ">
        <AdminSideBarNav />

        <main className=" lg:flex lg:flex-col sm:w-[90%] sm:ml-[10%]  lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] sm:px-8  lg:px-8 2xl:px-[300px] text-base text-primary ">
          <AdminMenuTopNavBar setCurrentTab={setCurrentTab} />
          {currentTab === 1 && <AddMenuFormAdmin />}
          {currentTab === 2 && <AllMenuTable setCurrentTab={setCurrentTab} currentEditableMenuRef={currentEditableMenuRef} />}
          {currentTab === 3 && <AdminEditMenuForm  currentEditableMenuRef={currentEditableMenuRef} />}

          <div className=" pt-[120px]"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default AdminAddMenu;
