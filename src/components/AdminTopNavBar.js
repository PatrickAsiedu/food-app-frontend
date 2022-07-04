import React from "react";
import { useSelector } from "react-redux";
import Notificationtile from "./UI/Noficationtile";

const AdminTopNavBar = ({ setCurrentTab }) => {
  const totalSignUps = useSelector((state) =>
    state.admin.allUsers.filter((user) => user.status === "PENDING")
  );
  const totalResets = useSelector((state) =>
    state.admin.allUsers.filter((user) => user.status === "RESET_REQUIRED")
  );
  const totalUsers = useSelector((state) => state.admin.allUsers);

  return (
    <nav className="flex sm:flex w-full mx-auto py-3 bg-primary mt-6  justify-evenly  text-white px-8  rounded-2xl mb-14  ">
      <button className="flex  items-center" onClick={() => setCurrentTab(1)}>
        <div className="flex items-center">
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 4.51678C2.5 7.09134 4.005 9.03355 6 9.03355C7.995 9.03355 9.5 7.09134 9.5 4.51678C9.5 1.94221 7.995 0 6 0C4.005 0 2.5 1.94221 2.5 4.51678ZM17 3.80442H15V7.67594H12V10.257H15V14.1285H17V10.257H20V7.67594H17V3.80442ZM2 18H12V16.7095C12 13.1516 9.757 10.257 7 10.257H5C2.243 10.257 0 13.1516 0 16.7095V18H2Z"
              fill="white"
            />
          </svg>
          <span className="ml-2 hidden xl:flex lg:text-xs">Add User</span>
        </div>
      </button>

      <button className="flex" onClick={() => setCurrentTab(2)}>
        <div className="flex items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.579 0 0 4.579 0 10C0 15.421 4.579 20 10 20C15.421 20 20 15.421 20 10C20 4.579 15.421 0 10 0ZM10 5C11.727 5 13 6.272 13 8C13 9.728 11.727 11 10 11C8.274 11 7 9.728 7 8C7 6.272 8.274 5 10 5ZM4.894 14.772C5.791 13.452 7.287 12.572 9 12.572H11C12.714 12.572 14.209 13.452 15.106 14.772C13.828 16.14 12.015 17 10 17C7.985 17 6.172 16.14 4.894 14.772Z"
              fill="white"
            />
          </svg>

          <span className="ml-2 hidden xl:flex lg:text-xs">
            Signup Approval
          </span>
          <Notificationtile value={totalSignUps.length}></Notificationtile>
        </div>
      </button>

      <button className="flex " onClick={() => setCurrentTab(3)}>
        <div className="flex items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3514 0.000976562C11.9892 0.000976562 10.7195 0.537354 9.67309 1.55332C8.48458 2.70811 7.94067 4.12793 8.09978 5.64557C8.21912 6.77196 8.74843 7.90782 9.59678 8.92378L3.71109 14.6425L2.64517 13.6068C2.12561 13.0996 1.69453 13.5201 1.17416 14.0265L0.666771 14.5439C0.145584 15.048 -0.28468 15.4431 0.235695 15.9488L1.29999 16.9852L0.463816 17.7977C0.339985 17.9172 0.241707 18.0593 0.174642 18.2159C0.107578 18.3724 0.0730513 18.5403 0.0730513 18.7099C0.0730513 18.8795 0.107578 19.0474 0.174642 19.204C0.241707 19.3605 0.339985 19.5027 0.463816 19.6222C0.98338 20.1262 1.82037 20.1262 2.34155 19.6222L11.576 10.6497C12.5761 11.2586 13.6624 11.586 14.721 11.586C16.0824 11.586 17.3545 11.0496 18.4001 10.0328C19.5895 8.87882 20.1326 7.459 19.9726 5.94136C19.8297 4.57597 19.0837 3.20189 17.8927 2.04631C16.5435 0.733764 14.932 0.000976562 13.3514 0.000976562ZM13.4026 1.62746C14.5334 1.62746 15.7081 2.18987 16.7254 3.18059C17.6297 4.05615 18.1939 5.07527 18.2987 6.06442C18.4066 7.093 18.034 8.07268 17.2076 8.87488C16.4672 9.59268 15.6042 9.95868 14.6706 9.95868C13.539 9.95868 12.3667 9.39548 11.3471 8.40634C10.4435 7.52841 9.87929 6.51166 9.77456 5.52252C9.6674 4.49393 10.0384 3.51504 10.8656 2.71205C11.606 1.99425 12.4698 1.62746 13.4026 1.62746Z"
              fill="white"
            />
          </svg>
          <span className="ml-2 whitespace-nowrap hidden xl:flex lg:text-xs">
            Reset Password Approval
          </span>
          <Notificationtile value={totalResets.length}></Notificationtile>
        </div>
      </button>

      <button className="flex  items-center" onClick={() => setCurrentTab(4)}>
        <div className="flex items-center">
          <svg
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3C12 3.79565 11.6839 4.55871 11.1213 5.12132C10.5587 5.68393 9.79565 6 9 6C8.20435 6 7.44129 5.68393 6.87868 5.12132C6.31607 4.55871 6 3.79565 6 3C6 2.20435 6.31607 1.44129 6.87868 0.87868C7.44129 0.316071 8.20435 0 9 0C9.79565 0 10.5587 0.316071 11.1213 0.87868C11.6839 1.44129 12 2.20435 12 3V3ZM17 5C17 5.53043 16.7893 6.03914 16.4142 6.41421C16.0391 6.78929 15.5304 7 15 7C14.4696 7 13.9609 6.78929 13.5858 6.41421C13.2107 6.03914 13 5.53043 13 5C13 4.46957 13.2107 3.96086 13.5858 3.58579C13.9609 3.21071 14.4696 3 15 3C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5V5ZM13 12C13 10.9391 12.5786 9.92172 11.8284 9.17157C11.0783 8.42143 10.0609 8 9 8C7.93913 8 6.92172 8.42143 6.17157 9.17157C5.42143 9.92172 5 10.9391 5 12V15H13V12ZM5 5C5 5.53043 4.78929 6.03914 4.41421 6.41421C4.03914 6.78929 3.53043 7 3 7C2.46957 7 1.96086 6.78929 1.58579 6.41421C1.21071 6.03914 1 5.53043 1 5C1 4.46957 1.21071 3.96086 1.58579 3.58579C1.96086 3.21071 2.46957 3 3 3C3.53043 3 4.03914 3.21071 4.41421 3.58579C4.78929 3.96086 5 4.46957 5 5V5ZM15 15V12C15.0014 10.9833 14.7433 9.98303 14.25 9.094C14.6933 8.98054 15.1568 8.96984 15.6049 9.06272C16.053 9.1556 16.474 9.34959 16.8357 9.62991C17.1974 9.91023 17.4903 10.2695 17.6921 10.6802C17.8939 11.091 17.9992 11.5424 18 12V15H15ZM3.75 9.094C3.25675 9.98305 2.9986 10.9833 3 12V15H2.6572e-07V12C-0.000192468 11.542 0.104463 11.0901 0.305947 10.6789C0.507431 10.2676 0.800394 9.90793 1.16238 9.62742C1.52437 9.3469 1.94578 9.15298 2.39431 9.06052C2.84284 8.96806 3.30658 8.97951 3.75 9.094V9.094Z"
              fill="white"
            />
          </svg>

          <span className="ml-2 hidden xl:flex lg:text-xs">Show All Users</span>
          <Notificationtile value={totalUsers.length}></Notificationtile>
        </div>
      </button>
    </nav>
  );
};

export default AdminTopNavBar;
