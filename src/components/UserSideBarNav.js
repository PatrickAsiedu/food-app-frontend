import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import BSLlogo from "../assets/logo-stack-dark 1 1.png";
import ToggleSwitch from "./UI/ToggleSwitch";
import { useDispatch, useSelector } from "react-redux";
import { logOutCurrentUser } from "../redux/userSlice";
import Header from "./Layout/Header";

import { toggleHamburger } from "../redux/userSlice";

const UserSideBarNav = () => {
  const [onblur, setonblur] = useState(false);
  const dispatch = useDispatch();
  const showHamburger = useSelector((state) => state.user.showHamburger);
  const onCloseHamburgerHandler = () => {
    dispatch(toggleHamburger());
  };

  const onDashboardLinkClickHandler = () => {
    dispatch(toggleHamburger());
  };

  const onOrderFoodLinkClickHandler = () => {
    dispatch(toggleHamburger());
  };

  const onHistoryLinkClickHandler = () => {
    dispatch(toggleHamburger());
  };

  const onEditOrderHandler = () => {
    dispatch(toggleHamburger());
  };

  // const onBlurHamburgerHandler = () => {
  //   setonblur(true);
  // };

  return (
    <div className=" lg:pl-8 sm:h-full sm:border-r-2 sm:w-[10%]  lg:w-[30%] 2xl:w-[20%] sm:fixed  ">
      <Header></Header>
      <div className="px-6"></div>

      <nav
        // onBlur={onBlurHamburgerHandler}
        className={
          !showHamburger
            ? "hidden  sm:px-0 sm:pt-0 sm:bg-white sm:w-full sm:static  sm:h-[80%] sm:mt-[5%] sm:flex sm:flex-col sm:justify-between"
            : " fixed z-50 top-0 right-0  h-screen w-[70%] bg-primary px-3 pt-8 sm:px-0 sm:pt-0 sm:bg-white sm:w-full sm:static  sm:h-[80%] sm:mt-[5%] sm:flex sm:flex-col sm:justify-between "
        }
      >
        <button
          onClick={onCloseHamburgerHandler}
          className="sm:hidden float-right"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.40994 6.99994L12.7099 2.70994C12.8982 2.52164 13.004 2.26624 13.004 1.99994C13.004 1.73364 12.8982 1.47825 12.7099 1.28994C12.5216 1.10164 12.2662 0.99585 11.9999 0.99585C11.7336 0.99585 11.4782 1.10164 11.2899 1.28994L6.99994 5.58994L2.70994 1.28994C2.52164 1.10164 2.26624 0.99585 1.99994 0.99585C1.73364 0.99585 1.47824 1.10164 1.28994 1.28994C1.10164 1.47825 0.995847 1.73364 0.995847 1.99994C0.995847 2.26624 1.10164 2.52164 1.28994 2.70994L5.58994 6.99994L1.28994 11.2899C1.19621 11.3829 1.12182 11.4935 1.07105 11.6154C1.02028 11.7372 0.994141 11.8679 0.994141 11.9999C0.994141 12.132 1.02028 12.2627 1.07105 12.3845C1.12182 12.5064 1.19621 12.617 1.28994 12.7099C1.3829 12.8037 1.4935 12.8781 1.61536 12.9288C1.73722 12.9796 1.86793 13.0057 1.99994 13.0057C2.13195 13.0057 2.26266 12.9796 2.38452 12.9288C2.50638 12.8781 2.61698 12.8037 2.70994 12.7099L6.99994 8.40994L11.2899 12.7099C11.3829 12.8037 11.4935 12.8781 11.6154 12.9288C11.7372 12.9796 11.8679 13.0057 11.9999 13.0057C12.132 13.0057 12.2627 12.9796 12.3845 12.9288C12.5064 12.8781 12.617 12.8037 12.7099 12.7099C12.8037 12.617 12.8781 12.5064 12.9288 12.3845C12.9796 12.2627 13.0057 12.132 13.0057 11.9999C13.0057 11.8679 12.9796 11.7372 12.9288 11.6154C12.8781 11.4935 12.8037 11.3829 12.7099 11.2899L8.40994 6.99994Z"
              fill="white"
            />
          </svg>
        </button>

        <div className="mt-8 lg:mt-0 ">
          <NavLink
            to="/me"
            end
            onClick={onDashboardLinkClickHandler}
            className={({ isActive }) =>
              isActive
                ? "group flex items-center py-6 pl-6 sm:pl-4 lg:pl-6 bg-primary transition-all  "
                : " group flex items-center py-6 pl-6 sm:pl-4 lg:pl-6 hover:pl-8 transition-all   "
            }
            // children={({ isActive }) => (isActive ? "text-white" : undefined)}
          >
            {({ isActive }) => (
              <React.Fragment>
                <span>
                  <svg
                    className={
                      isActive
                        ? "fill-white opacity-80 w-[31px] h-[31px] group-hover:opacity-100  transition-all "
                        : "fill-white sm:fill-primary opacity-80 w-[31px] h-[31px] group-hover:opacity-100  transition-all "
                    }
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.16667 16.7917H12.9167C13.2592 16.7917 13.5878 16.6556 13.83 16.4133C14.0722 16.1711 14.2083 15.8426 14.2083 15.5V5.16667C14.2083 4.8241 14.0722 4.49555 13.83 4.25332C13.5878 4.01109 13.2592 3.875 12.9167 3.875H5.16667C4.8241 3.875 4.49555 4.01109 4.25332 4.25332C4.01109 4.49555 3.875 4.8241 3.875 5.16667V15.5C3.875 15.8426 4.01109 16.1711 4.25332 16.4133C4.49555 16.6556 4.8241 16.7917 5.16667 16.7917ZM3.875 25.8333C3.875 26.1759 4.01109 26.5044 4.25332 26.7467C4.49555 26.9889 4.8241 27.125 5.16667 27.125H12.9167C13.2592 27.125 13.5878 26.9889 13.83 26.7467C14.0722 26.5044 14.2083 26.1759 14.2083 25.8333V20.6667C14.2083 20.3241 14.0722 19.9956 13.83 19.7533C13.5878 19.5111 13.2592 19.375 12.9167 19.375H5.16667C4.8241 19.375 4.49555 19.5111 4.25332 19.7533C4.01109 19.9956 3.875 20.3241 3.875 20.6667V25.8333ZM16.7917 25.8333C16.7917 26.1759 16.9278 26.5044 17.17 26.7467C17.4122 26.9889 17.7408 27.125 18.0833 27.125H25.8333C26.1759 27.125 26.5044 26.9889 26.7467 26.7467C26.9889 26.5044 27.125 26.1759 27.125 25.8333V16.7917C27.125 16.4491 26.9889 16.1206 26.7467 15.8783C26.5044 15.6361 26.1759 15.5 25.8333 15.5H18.0833C17.7408 15.5 17.4122 15.6361 17.17 15.8783C16.9278 16.1206 16.7917 16.4491 16.7917 16.7917V25.8333ZM18.0833 12.9167H25.8333C26.1759 12.9167 26.5044 12.7806 26.7467 12.5383C26.9889 12.2961 27.125 11.9676 27.125 11.625V5.16667C27.125 4.8241 26.9889 4.49555 26.7467 4.25332C26.5044 4.01109 26.1759 3.875 25.8333 3.875H18.0833C17.7408 3.875 17.4122 4.01109 17.17 4.25332C16.9278 4.49555 16.7917 4.8241 16.7917 5.16667V11.625C16.7917 11.9676 16.9278 12.2961 17.17 12.5383C17.4122 12.7806 17.7408 12.9167 18.0833 12.9167Z" />
                  </svg>
                </span>
                <span
                  className={
                    isActive
                      ? " ml-5 font-semibold text-white sm:text-white opacity-80  group-hover:opacity-100  sm:hidden lg:flex  transition-all  "
                      : "ml-5 font-semibold text-white sm:text-primary opacity-80  group-hover:opacity-100   sm:hidden lg:flex  transition-all "
                  }
                >
                  Dashboard
                </span>
              </React.Fragment>
            )}
          </NavLink>
          <NavLink
            onClick={onOrderFoodLinkClickHandler}
            to="/me/order"
            className={({ isActive }) =>
              isActive
                ? "group flex items-center py-6 pl-6 sm:pl-4 lg:pl-6 bg-primary transition-all   "
                : " group flex items-center py-6 pl-6 sm:pl-4 lg:pl-6  transition-all hover:pl-8   "
            }
          >
            {({ isActive }) => (
              <React.Fragment>
                <span>
                  <svg
                    className={
                      isActive
                        ? "fill-white opacity-80 w-[31px] h-[31px] group-hover:opacity-100  transition-all "
                        : "fill-white sm:fill-primary opacity-80 w-[31px] h-[31px] group-hover:opacity-100  transition-all "
                    }
                    viewBox="0 0 25 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.3864 25.5H21.2727C22.2273 25.5 23.0114 24.7614 23.125 23.8295L25 5.10227H19.3182V0.5H17.0795V5.10227H11.4318L11.7727 7.76136C13.7159 8.29545 15.5341 9.26136 16.625 10.3295C18.2614 11.9432 19.3864 13.6136 19.3864 16.3409V25.5ZM0 24.3636V23.2273H17.0795V24.3636C17.0795 24.9773 16.5682 25.5 15.9091 25.5H1.13636C0.511364 25.5 0 24.9773 0 24.3636ZM17.0795 16.4091C17.0795 7.31818 0 7.31818 0 16.4091H17.0795ZM0 18.6818H17.0455V20.9545H0V18.6818Z" />
                  </svg>
                </span>
                <span
                  className={
                    isActive
                      ? " ml-5 font-semibold text-white sm:text-white opacity-80  group-hover:opacity-100  sm:hidden lg:flex  transition-all  "
                      : "ml-5 font-semibold text-white sm:text-primary opacity-80  group-hover:opacity-100   sm:hidden lg:flex "
                  }
                >
                  Order Food
                </span>
              </React.Fragment>
            )}
          </NavLink>

          <NavLink
            onClick={onHistoryLinkClickHandler}
            to="/me/history"
            className={({ isActive }) =>
              isActive
                ? "group flex items-center py-6 pl-6 sm:pl-4 lg:pl-6 bg-primary transition-all  "
                : " group flex items-center py-6 pl-6 sm:pl-4 lg:pl-6  transition-all hover:pl-8  "
            }
          >
            {({ isActive }) => (
              <React.Fragment>
                <span>
                  <svg
                    className={
                      isActive
                        ? "fill-white opacity-80 w-[31px] h-[31px] group-hover:opacity-100  transition-all "
                        : "fill-white sm:fill-primary opacity-80 w-[31px] h-[31px] group-hover:opacity-100  transition-all "
                    }
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.5 10.3333V16.7917H21.9583V14.2083H18.0833V10.3333H15.5Z" />
                    <path d="M27.5021 10.9753C26.9195 9.59327 26.0737 8.33773 25.0118 7.27854C23.4044 5.67115 21.3612 4.57005 19.1347 4.11138C17.5894 3.79684 15.9965 3.79684 14.4511 4.11138C12.2226 4.56712 10.1776 5.66912 8.57148 7.27984C7.51217 8.34015 6.6667 9.59432 6.08115 10.974C5.47549 12.406 5.16448 13.9452 5.16665 15.5L5.16794 15.5323H2.58331L6.45831 20.6667L10.3333 15.5323H7.75127L7.74998 15.5C7.74626 13.6986 8.28403 11.9377 9.29352 10.4457C9.94467 9.48301 10.7737 8.65354 11.7361 8.00188C12.7151 7.34236 13.8132 6.87993 14.9691 6.64046C17.318 6.15751 19.7626 6.62707 21.7655 7.94591C23.7683 9.26475 25.1655 11.3249 25.6499 13.6736C25.8935 14.8773 25.8935 16.1176 25.6499 17.3213C25.4136 18.4781 24.9509 19.5769 24.2885 20.5543C23.9656 21.0335 23.5949 21.4843 23.1854 21.8925C22.3602 22.7166 21.3846 23.3748 20.3114 23.8313C19.7648 24.0623 19.1968 24.2388 18.6155 24.3583C17.4122 24.6017 16.1724 24.6017 14.9691 24.3583C13.8134 24.1213 12.7157 23.6592 11.7386 22.9981C11.2581 22.6734 10.8096 22.3036 10.3992 21.8938L8.57277 23.7202C9.65147 24.8004 10.9327 25.6571 12.343 26.2414C13.7533 26.8256 15.2651 27.1259 16.7916 27.125C18.3456 27.1244 19.8838 26.8139 21.3164 26.2118C23.3929 25.3332 25.1694 23.8703 26.4301 22.001C27.7275 20.0814 28.4195 17.8169 28.4166 15.5C28.4199 13.9455 28.1088 12.4065 27.5021 10.9753Z" />
                  </svg>
                </span>
                <span
                  className={
                    isActive
                      ? " ml-5 font-semibold text-white sm:text-white opacity-80  group-hover:opacity-100  sm:hidden lg:flex  transition-all "
                      : "ml-5 font-semibold text-white sm:text-primary opacity-80  group-hover:opacity-100   sm:hidden lg:flex  transition-all "
                  }
                >
                  History
                </span>
              </React.Fragment>
            )}
          </NavLink>
        </div>
        <div>
          {/* TODO; implement darkmode feature */}
          {/* <div className=" flex items-center pl-6 py-6 ">
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.742 13.045C20.0643 13.225 19.3662 13.3161 18.665 13.316C16.53 13.316 14.525 12.486 13.019 10.98C12.0301 9.98536 11.3191 8.74887 10.9569 7.39381C10.5948 6.03874 10.5941 4.61242 10.955 3.25701C11.0001 3.08755 10.9998 2.90921 10.9542 2.73988C10.9086 2.57056 10.8192 2.41621 10.6951 2.29232C10.571 2.16842 10.4165 2.07934 10.2471 2.034C10.0777 1.98866 9.8994 1.98867 9.73 2.03401C8.03316 2.4862 6.48507 3.37664 5.241 4.61601C1.343 8.51401 1.343 14.859 5.241 18.759C6.16753 19.6907 7.26964 20.4294 8.48354 20.9323C9.69745 21.4353 10.999 21.6924 12.313 21.689C13.6266 21.6927 14.9279 21.4357 16.1415 20.9329C17.3551 20.4302 18.4569 19.6916 19.383 18.76C20.6233 17.5157 21.5142 15.9668 21.966 14.269C22.0109 14.0996 22.0105 13.9214 21.9649 13.7522C21.9193 13.583 21.8301 13.4287 21.7062 13.3048C21.5823 13.1809 21.428 13.0917 21.2588 13.0461C21.0896 13.0005 20.9114 13.0001 20.742 13.045ZM17.97 17.346C17.229 18.0911 16.3475 18.6818 15.3767 19.084C14.4058 19.4862 13.3649 19.6918 12.314 19.689C11.2628 19.6916 10.2215 19.4858 9.25033 19.0835C8.27916 18.6811 7.39739 18.0903 6.656 17.345C3.538 14.226 3.538 9.15001 6.656 6.03101C7.25851 5.42918 7.9541 4.92843 8.716 4.54801C8.60448 5.98707 8.80496 7.43325 9.30373 8.7877C9.80251 10.1422 10.5878 11.373 11.606 12.396C12.6268 13.4174 13.8573 14.2049 15.2123 14.704C16.5673 15.2032 18.0146 15.4021 19.454 15.287C19.0715 16.0476 18.5706 16.7426 17.97 17.346Z"
                  fill="#002C59"
                />
              </svg>
            </span>
            <span className=" ml-5 font-semibold text-primary opacity-80">
              Dark mode
            </span>
            <ToggleSwitch devicestatus={"ml-4 hidden sm:flex"}></ToggleSwitch>
          </div> */}

          <button
            className="flex items-center pl-6 sm:pl-4 py-6 lg:pl-6  "
            onClick={() => dispatch(logOutCurrentUser())}
          >
            <span>
              <svg
                className={
                  !showHamburger
                    ? "fill-primary opacity-80"
                    : "fill-white opacity-80 sm:fill-primary sm:opacity-80 "
                }
                width="27"
                height="31"
                viewBox="0 0 27 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.6666 16.7917V14.2083H5.04165V10.3333L-1.41669 15.5L5.04165 20.6667V16.7917H16.6666Z" />
                <path d="M21.8333 3.875H10.2083C8.78363 3.875 7.625 5.03362 7.625 6.45833V11.625H10.2083V6.45833H21.8333V24.5417H10.2083V19.375H7.625V24.5417C7.625 25.9664 8.78363 27.125 10.2083 27.125H21.8333C23.258 27.125 24.4167 25.9664 24.4167 24.5417V6.45833C24.4167 5.03362 23.258 3.875 21.8333 3.875Z" />
              </svg>
            </span>
            <span className=" ml-5 font-semibold text-white sm:text-primary opacity-80 sm:hidden lg:flex">
              Log Out
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default UserSideBarNav;
