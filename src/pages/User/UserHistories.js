import React from "react";
import ProfilePic from "../../assets/unsplash_WNoLnJo7tS8.png";
import UserSideBarNav from "../../components/UserSideBarNav";

const UserHistories = () => {
  return (
    <React.Fragment>
      <div className=" lg:flex h-screen ">
      <UserSideBarNav />

        <main className="hidden lg:flex flex-col md:ml-[30%] 2xl:ml-[20%]  w-[70%]  2xl:w-[80%] ">
          <div className="relative mt-6 w-full h-16 ">
            <img className="absolute right-8" src={ProfilePic} alt="" />
          </div>

          <h3>User Order Histories</h3>
        </main>
      </div>
    </React.Fragment>
  );
};

export default UserHistories;
