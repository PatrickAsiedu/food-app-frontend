import React, { useState } from "react";

import AdminSideBarNav from "../../components/AdminSideBarNav";
import AddUserForm from "../../components/AddUserForm/AddUserForm";
// import { Link } from "react-router-dom";
import AdminTopNavBar from "../../components/AdminTopNavBar";
// import SignupApprovaltile from "../../components/SignupApprovaltile/SignupApprovaltile";
// import ResetPasswordApprovaltile from "../../components/ResetPassApprovaltile/ResetPasswordApprovaltile";
import ShowAllUsersTable from "../../components/AllusersTable/ShowAllUsers";
import SignupApprovalTable from "../../components/Approval Tables/SignupApprovalTable";
import ResetPasswordApprovalTable from "../../components/Approval Tables/ResetPasswordApprovalTable";


const AdminUserManagement = () => {
  const [currentTab, setCurrentTab] = useState(4);
  // console.log(currentTab)

 

  return (
    <React.Fragment>
      <div className=" lg:flex h-screen mb-5">
        <AdminSideBarNav  />

        <main className=" lg:flex flex-col lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] px-8  lg:px-[90px] 2xl:px-[300px] text-base text-primary ">
          <AdminTopNavBar 
            setCurrentTab={setCurrentTab}
          />

            {currentTab === 1 && <AddUserForm />}
            {currentTab === 2 && <SignupApprovalTable  /> }
            {currentTab === 3 && <ResetPasswordApprovalTable  />}
            {currentTab === 4 && <ShowAllUsersTable  /> } 

          {/* <AddUserForm></AddUserForm> */}
          {/* <SignupApprovalTable></SignupApprovalTable> */}
          {/* <ResetPasswordApprovalTable></ResetPasswordApprovalTable> */}
          {/* <ShowAllU sersTable /> */}

          <div className=" pt-[120px]"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default AdminUserManagement;
