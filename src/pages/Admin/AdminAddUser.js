import React from "react";
import AdminSideBarNav from "../../components/AdminSideBarNav";
import AddUserForm from "../../components/AddUserForm/AddUserForm";
import AdminTopNavBar from "../../components/AdminTopNavBar";

const AdminAddUser = () => {
  return (
    <React.Fragment>
      <div className=" lg:flex h-screen mb-5">
        <AdminSideBarNav></AdminSideBarNav>

        <main className=" lg:flex flex-col lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] px-8  lg:px-[90px] 2xl:px-[300px] text-base text-primary ">
          <AdminTopNavBar></AdminTopNavBar>
          <AddUserForm></AddUserForm>
          <div className=" pt-[120px]"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default AdminAddUser;
