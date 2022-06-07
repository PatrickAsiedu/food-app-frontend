import React, { useState } from "react";
import Notificationtile from "../../components/UI/Noficationtile";

import AdminSideBarNav from "../../components/AdminSideBarNav";
import AddUserForm from "../../components/AddUserForm/AddUserForm";
// import { Link } from "react-router-dom";
import AdminTopNavBar from "../../components/AdminTopNavBar";
// import SignupApprovaltile from "../../components/SignupApprovaltile/SignupApprovaltile";
// import ResetPasswordApprovaltile from "../../components/ResetPassApprovaltile/ResetPasswordApprovaltile";
import ShowAllUsersTable from "../../components/AllusersTable/ShowAllUsers";
import SignupApprovalTable from "../../components/Approval Tables/SignupApprovalTable";
import ResetPasswordApprovalTable from "../../components/Approval Tables/ResetPasswordApprovalTable";
import EnterNewPasswordModalForm from "../../components/Modals/EnterNewPasswordModal";
import { useDispatch, useSelector } from "react-redux";

const AdminUserManagement = () => {
  const [currentTab, setCurrentTab] = useState(4);
  const showChangePasswordModal = useSelector(
    (state) => state.admin.showChangePasswordModal
  );
  // console.log(currentTab)

  return (
    <React.Fragment>
      {showChangePasswordModal && (
        <EnterNewPasswordModalForm></EnterNewPasswordModalForm>
      )}
      <div className=" px-4  sm:flex sm:pr-0 lg:px-0 lg:flex h-screen">
        <AdminSideBarNav />

        <main className=" lg:flex lg:flex-col sm:w-[90%] sm:ml-[10%]   lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] sm:px-8    lg:px-[50px] 2xl:px-[250px] text-base text-primary ">
          <AdminTopNavBar setCurrentTab={setCurrentTab} />

          {currentTab === 1 && <AddUserForm />}
          {currentTab === 2 && <SignupApprovalTable />}
          {currentTab === 3 && <ResetPasswordApprovalTable />}
          {currentTab === 4 && <ShowAllUsersTable />}

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
