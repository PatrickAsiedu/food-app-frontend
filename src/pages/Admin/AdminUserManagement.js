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
import EnterNewPasswordModalForm from "../../components/Modals/EnterNewPasswordModal";
import { useSelector } from "react-redux";
import ShowAllUsersCard from "../../components/Cards/ShowAllUsersCard";
import ResetPasswordCard from "../../components/Cards/ResetPasswordCard";
import {
  displayError,
  displaySuccess,
  formatDateToDateString,
} from "../../utils/util-functions";
import SignupApprovalCard from "../../components/Cards/SignupApprovalCard";
const AdminUserManagement = () => {
  const [currentTab, setCurrentTab] = useState(4);
  const showChangePasswordModal = useSelector(
    (state) => state.admin.showChangePasswordModal
  );

  const userList = useSelector((state) =>
    state.admin.allUsers.filter((user) => user.status === "PENDING")
  );
  const alluserList = useSelector((state) => state.admin.allUsers);
  const resetuserList = useSelector((state) =>
    state.admin.allUsers.filter((user) => user.status === "RESET_REQUIRED")
  );
  // console.log(currentTab)

  return (
    <React.Fragment>
      {showChangePasswordModal && (
        <EnterNewPasswordModalForm></EnterNewPasswordModalForm>
      )}
      <div className=" px-4  sm:flex sm:pr-0 lg:px-0 lg:flex h-screen">
        <AdminSideBarNav />

        <main className=" lg:flex lg:flex-col sm:w-[90%] sm:ml-[10%]   lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] sm:px-8     2xl:px-[250px] text-base text-primary ">
          <AdminTopNavBar setCurrentTab={setCurrentTab} />
          {currentTab === 2 &&
            userList &&
            userList.map((user) => (
              <SignupApprovalCard
                key={user.id}
                id={user.id}
                name={user.name}
                number={user.phone_number}
                type={user.type}
                status={user.status}
                date={formatDateToDateString(user.created_at)}
              ></SignupApprovalCard>
            ))}
          {currentTab === 4 &&
            alluserList &&
            alluserList.map((user) => (
              <ShowAllUsersCard
                key={user.id}
                id={user.id}
                name={user.name}
                number={user.phone_number}
                type={user.type}
                status={user.status}
                date={formatDateToDateString(user.created_at)}
              ></ShowAllUsersCard>
            ))}
          {currentTab === 3 &&
            resetuserList &&
            resetuserList.map((user) => (
              <ResetPasswordCard
                key={user.id}
                id={user.id}
                name={user.name}
                number={user.phone_number}
                type={user.type}
                status={user.status}
                user={user}
                date={formatDateToDateString(user.created_at)}
              ></ResetPasswordCard>
            ))}

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
