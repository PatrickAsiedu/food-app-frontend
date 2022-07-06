import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutCurrentUser } from "../redux/userSlice";
import Header from "./Layout/Header";
import Notificationtile from "./UI/Noficationtile";
import { toggleHamburger } from "../redux/userSlice";

const AdminSideBarNav = (props) => {
  const dispatch = useDispatch();
  const showHamburger = useSelector((state) => state.user.showHamburger);
  const totalSignUps = useSelector((state) =>
    state.admin.allUsers.filter((user) => user.status === "PENDING")
  );
  const totalResets = useSelector((state) =>
    state.admin.allUsers.filter((user) => user.status === "RESET_REQUIRED")
  );
  const onCloseHamburgerHandler = () => {
    dispatch(toggleHamburger());
  };

  const onDashboardLinkClickHandler = () => {
    dispatch(toggleHamburger());
  };

  const onFoodLinkClickHandler = () => {
    dispatch(toggleHamburger());
  };

  const onDrinksLinkClickHandler = () => {
    dispatch(toggleHamburger());
  };

  const onAddMenuLinkClickHandler = () => {
    dispatch(toggleHamburger());
  };

  const onOrdersLinkClickHandler = () => {
    dispatch(toggleHamburger());
  };

  const onUserManagementLinkClickHandler = () => {
    dispatch(toggleHamburger());
  };

  return (
    <React.Fragment>
      <div className="  lg:pl-8 sm:h-full sm:border-r-2 sm:w-[10%]  lg:w-[30%] 2xl:w-[20%] sm:fixed  ">
        <div className="px-6"></div>
        <Header />

        <nav
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
          <div>
            <NavLink
              to="/admin"
              end
              className={({ isActive }) =>
                isActive
                  ? "group flex items-center py-6 pl-6 sm:pl-4 lg:pl-6 bg-primary transition-all   "
                  : " group flex items-center py-6 pl-6 sm:pl-4 lg:pl-6  transition-all hover:pl-8   "
              }
              onClick={onDashboardLinkClickHandler}
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
                        : "ml-5 font-semibold text-white sm:text-primary opacity-80  group-hover:opacity-100   sm:hidden lg:flex "
                    }
                  >
                    Dashboard
                  </span>
                </React.Fragment>
              )}
            </NavLink>

            <NavLink
              to="/admin/orders"
              className={({ isActive }) =>
                isActive
                  ? "group flex items-center py-6 pl-6 sm:pl-4 lg:pl-6 bg-primary transition-all  "
                  : " group flex items-center py-6 pl-6 sm:pl-4 lg:pl-6 hover:pl-8 transition-all   "
              }
              onClick={onOrdersLinkClickHandler}
            >
              {({ isActive }) => (
                <React.Fragment>
                  <span className="">
                    <svg
                      className={
                        isActive
                          ? "fill-white opacity-80 w-[31px] h-[31px] group-hover:opacity-100  transition-all "
                          : "fill-white sm:fill-primary opacity-80 w-[31px] h-[31px] group-hover:opacity-100  transition-all "
                      }
                      viewBox="0 0 28 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13 31C14.1046 31 15 29.6569 15 28C15 26.3431 14.1046 25 13 25C11.8954 25 11 26.3431 11 28C11 29.6569 11.8954 31 13 31Z" />
                      <path d="M24 31C25.1046 31 26 29.6569 26 28C26 26.3431 25.1046 25 24 25C22.8954 25 22 26.3431 22 28C22 29.6569 22.8954 31 24 31Z" />
                      <path d="M29.4505 6.57143H8.26783L6.4791 2.02072C6.2443 1.42131 5.84687 0.909288 5.3372 0.549546C4.82752 0.189805 4.22855 -0.00145548 3.61621 8.3401e-06H0V3.28572H3.61776L10.9695 21.9896C11.2098 22.6008 11.7755 23 12.4002 23H24.8004C25.4468 23 26.0249 22.5745 26.2528 21.9354L30.9028 8.79258C30.99 8.54384 31.0191 8.27648 30.9878 8.01324C30.9565 7.75 30.8657 7.49867 30.7231 7.2806C30.5805 7.06253 30.3904 6.88418 30.1688 6.76071C29.9472 6.63725 29.7008 6.57231 29.4505 6.57143ZM23.2504 16.4286H20.1503V19.7143H17.0503V16.4286H13.9502V13.1429H17.0503V9.85715H20.1503V13.1429H23.2504V16.4286Z" />
                    </svg>
                  </span>
                  <span
                    className={
                      isActive
                        ? " ml-5 font-semibold text-white sm:text-white opacity-80  group-hover:opacity-100  sm:hidden lg:flex  transition-all  "
                        : "ml-5 font-semibold text-white sm:text-primary opacity-80  group-hover:opacity-100   sm:hidden lg:flex  transition-all "
                    }
                  >
                    Orders
                  </span>
                </React.Fragment>
              )}
              {/* <Notificationtile  value={props.ordersCount || 0}/> */}
            </NavLink>

            <NavLink
              to="/admin/menu"
              className={({ isActive }) =>
                isActive
                  ? "group flex items-center py-6 pl-6 sm:pl-4 lg:pl-6 bg-primary transition-all   "
                  : " group flex items-center py-6 pl-6 sm:pl-4 lg:pl-6  transition-all hover:pl-8   "
              }
              onClick={onAddMenuLinkClickHandler}
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
                      viewBox="0 0 21 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19.1111 0.722168H1.88891C1.43215 0.722168 0.994093 0.903616 0.671114 1.2266C0.348135 1.54957 0.166687 1.98763 0.166687 2.44439V26.5555C0.166687 27.0123 0.348135 27.4503 0.671114 27.7733C0.994093 28.0963 1.43215 28.2777 1.88891 28.2777H19.1111C19.5679 28.2777 20.0059 28.0963 20.3289 27.7733C20.6519 27.4503 20.8334 27.0123 20.8334 26.5555V2.44439C20.8334 1.98763 20.6519 1.54957 20.3289 1.2266C20.0059 0.903616 19.5679 0.722168 19.1111 0.722168ZM6.19446 21.3888H4.47224V19.6666H6.19446V21.3888ZM6.19446 17.9444H4.47224V16.2222H6.19446V17.9444ZM6.19446 14.4999H4.47224V12.7777H6.19446V14.4999ZM6.19446 11.0555H4.47224V9.33328H6.19446V11.0555ZM6.19446 7.61106H4.47224V5.88883H6.19446V7.61106ZM16.5278 21.3888H7.91669V19.6666H16.5278V21.3888ZM16.5278 17.9444H7.91669V16.2222H16.5278V17.9444ZM16.5278 14.4999H7.91669V12.7777H16.5278V14.4999ZM16.5278 11.0555H7.91669V9.33328H16.5278V11.0555ZM16.5278 7.61106H7.91669V5.88883H16.5278V7.61106Z" />
                    </svg>
                  </span>
                  <span
                    className={
                      isActive
                        ? " ml-5 font-semibold text-white sm:text-white opacity-80  group-hover:opacity-100  sm:hidden lg:flex  transition-all  "
                        : "ml-5 font-semibold text-white sm:text-primary opacity-80  group-hover:opacity-100   sm:hidden lg:flex "
                    }
                  >
                    Menus
                  </span>
                </React.Fragment>
              )}
            </NavLink>

            <NavLink
              to="/admin/food"
              className={({ isActive }) =>
                isActive
                  ? "group flex items-center py-6 pl-6 sm:pl-4 lg:pl-6 bg-primary transition-all   "
                  : " group flex items-center py-6 pl-6 sm:pl-4 lg:pl-6  transition-all hover:pl-8   "
              }
              onClick={onFoodLinkClickHandler}
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
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M29.0331 18.1015C30.8888 14.5666 27.1169 12.1152 22.1855 10.9129C22.5565 10.0696 22.6641 8.96575 21.6178 7.91175C20.2761 6.56277 21.1678 4.59766 21.1678 4.59766C21.1678 4.59766 18.3517 7.19536 20.1298 8.98658C20.7857 9.64678 21.1271 10.2266 21.2904 10.7114C19.929 10.4308 18.5505 10.2409 17.164 10.1428C17.5781 9.01709 17.6183 7.6032 16.3134 6.24937C14.5271 4.39373 15.7167 1.69141 15.7167 1.69141C15.7167 1.69141 11.9613 5.26319 14.3323 7.72575C15.1979 8.62378 15.6537 9.41428 15.8746 10.0769C14.405 10.0328 12.9906 10.0972 11.7341 10.2731C11.8838 9.54894 11.7589 8.7163 10.9601 7.91223C9.6184 6.56325 10.5106 4.59766 10.5106 4.59766C10.5106 4.59766 7.69398 7.19536 9.4726 8.98658C10.0296 9.54748 10.3561 10.0483 10.5436 10.4847C10.3314 10.5312 10.1255 10.5816 9.92743 10.6364C3.80396 10.0633 1.13312 11.3285 2.35326 13.8105C0.223945 15.9398 1.02413 18.3699 3.68868 20.2294C5.07884 25.9552 5.43679 30.7539 15.907 30.7539C25.2497 30.7539 26.5405 26.9322 27.6977 22.041C31.1697 21.3498 30.4301 19.6855 29.0331 18.1015ZM28.1675 17.5295C27.0046 20.0095 21.9574 21.8763 15.907 21.8763C9.85719 21.8763 4.81001 20.0095 3.64654 17.5295C3.62184 17.4559 3.5981 17.3793 3.57437 17.3048C4.12849 15.8991 5.9294 14.6794 8.4588 13.8628C7.86448 14.4373 7.74096 15.2951 9.30501 15.5959C9.75257 15.6821 10.9814 15.3837 10.4443 13.8589C10.3692 13.6458 10.2466 13.5029 10.096 13.4167C11.8339 13.019 13.8068 12.7899 15.907 12.7899C16.1424 12.7899 16.3735 12.7981 16.6055 12.8035C15.3936 13.2336 14.405 14.5588 16.8797 14.9497C17.426 15.0359 18.9261 14.7376 18.2703 13.2127C18.213 13.0768 18.1212 12.9583 18.0039 12.8688C20.3226 13.0393 22.4233 13.4859 24.1216 14.1297C22.6282 14.0464 20.9717 14.9667 23.6246 16.2624C24.1937 16.5404 25.9229 16.7957 25.6851 15.112C25.6679 14.9903 25.625 14.8738 25.5592 14.77C26.9169 15.4854 27.8638 16.353 28.2392 17.3048L28.1675 17.5295Z" />
                      <path d="M12.6816 18.5677C14.2476 18.5677 15.2919 17.1519 16.11 16.5978C17.2531 15.8228 20.1274 15.5205 17.5961 15.4595C15.195 15.4019 12.2306 17.351 10.2495 17.2168C6.96936 16.994 10.329 18.5677 12.6816 18.5677ZM16.0654 21.4604C16.6186 21.567 18.139 21.1979 17.474 19.3122C16.7227 17.1785 12.1749 20.7116 16.0654 21.4604ZM7.45519 16.7935C6.92673 16.0475 6.16045 15.1015 5.84319 15.5942C5.40967 16.2679 5.27308 17.6237 5.58792 17.6837C8.0563 18.157 7.88337 17.3975 7.45519 16.7935ZM21.8048 17.0957C22.2499 16.5445 21.3611 15.2178 20.7905 15.4498C19.8973 15.8131 19.3824 15.567 18.9901 16.1182C18.0712 17.4091 21.1998 17.8441 21.8048 17.0957ZM21.5268 18.6753C20.8864 18.3929 21.0375 19.3389 20.0916 18.5798C19.4144 18.0364 17.9574 19.4071 18.9184 20.3381C19.9879 21.3742 20.2727 20.3895 20.7222 20.4723C21.6357 20.6404 23.2066 19.4164 21.5268 18.6753ZM10.8792 18.9988C10.5455 18.6704 10.0979 19.0666 9.84509 19.55C9.59467 19.427 9.39075 19.3984 9.39075 19.3984C9.19942 18.853 8.63028 18.4791 8.63028 18.4791C8.63028 18.4791 8.68211 19.0463 8.75719 19.3229C8.12847 19.0996 8.10909 17.9758 8.10909 17.9758C8.10909 17.9758 7.6872 18.2282 7.72547 18.6569C7.0333 18.0984 6.44381 18.3594 6.44381 18.3594C6.44381 18.3594 7.32198 18.8535 7.44308 19.1868C6.94998 19.225 6.66226 19.3955 6.49467 19.7922C6.49515 19.7956 7.46923 19.3287 8.18998 19.6658C7.90565 19.8983 8.04709 20.4791 8.04709 20.4791C8.71795 19.768 9.25367 19.8441 9.68234 19.9714C9.63051 20.1889 9.6339 20.3875 9.72594 20.5081C10.4695 21.4856 13.0594 21.2657 13.755 20.543C14.5973 19.6687 12.2568 20.3546 10.8792 18.9988Z" />
                      <path d="M12.7086 15.3172C12.4882 15.76 12.4868 16.0942 12.7416 16.442C12.745 16.4429 12.8443 15.3676 13.5035 14.922C13.5573 15.2853 14.1279 15.4616 14.1279 15.4616C13.6716 13.8457 15.0036 13.7614 14.9973 13.1816C14.2911 13.2412 13.89 13.7547 13.89 13.7547C13.3238 13.6389 12.7101 13.9348 12.7101 13.9348C12.7101 13.9348 13.224 14.1814 13.4996 14.2594C12.9852 14.6842 12.0107 14.1237 12.0107 14.1237C12.0107 14.1237 12.0107 14.6159 12.3982 14.8024C11.5636 15.1099 11.4851 15.7493 11.4851 15.7493C11.4851 15.7493 12.3599 15.2499 12.7086 15.3172ZM25.0849 17.5241C25.2854 17.1433 24.9929 16.7476 24.9929 16.7476C24.9929 16.7476 24.5429 17.7779 23.8769 17.7425C24.0522 17.5158 24.3186 17.0121 24.3186 17.0121C24.3186 17.0121 23.6492 17.1395 23.2627 17.5691C23.2627 17.5691 22.6349 17.3952 22.0324 17.7672C22.3724 18.2371 23.4932 17.512 24.0876 19.0823C24.0876 19.0823 24.4412 18.6013 24.2682 18.2773C25.0636 18.2429 25.7834 19.0479 25.7858 19.045C25.7829 18.6139 25.5833 18.3465 25.1421 18.1218C25.3823 17.8607 26.383 17.742 26.383 17.742C26.383 17.742 25.9393 17.2746 25.0849 17.5241Z" />
                    </svg>
                  </span>
                  <span
                    className={
                      isActive
                        ? " ml-5 font-semibold text-white sm:text-white opacity-80  group-hover:opacity-100  sm:hidden lg:flex  transition-all  "
                        : "ml-5 font-semibold text-white sm:text-primary opacity-80  group-hover:opacity-100   sm:hidden lg:flex "
                    }
                  >
                    Food List
                  </span>
                </React.Fragment>
              )}
            </NavLink>
            <NavLink
              to="/admin/drink"
              className={({ isActive }) =>
                isActive
                  ? "group flex items-center py-6 pl-6 sm:pl-4 lg:pl-6 bg-primary transition-all   "
                  : " group flex items-center py-6 pl-6 sm:pl-4 lg:pl-6  transition-all hover:pl-8   "
              }
              onClick={onDrinksLinkClickHandler}
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
                      viewBox="0 0 16 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1.625 0.875C1.42609 0.875 1.23532 0.95731 1.09467 1.10382C0.954018 1.25034 0.875 1.44905 0.875 1.65625V10.25C0.874977 12.1868 1.56558 14.0545 2.81282 15.4908C4.06006 16.9272 5.77503 17.8298 7.625 18.0234V24.3125H4.625C4.42609 24.3125 4.23532 24.3948 4.09467 24.5413C3.95402 24.6878 3.875 24.8865 3.875 25.0938C3.875 25.301 3.95402 25.4997 4.09467 25.6462C4.23532 25.7927 4.42609 25.875 4.625 25.875H12.125C12.3239 25.875 12.5147 25.7927 12.6553 25.6462C12.796 25.4997 12.875 25.301 12.875 25.0938C12.875 24.8865 12.796 24.6878 12.6553 24.5413C12.5147 24.3948 12.3239 24.3125 12.125 24.3125H9.125V18.0234C10.975 17.8298 12.6899 16.9272 13.9372 15.4908C15.1844 14.0545 15.875 12.1868 15.875 10.25V1.65625C15.875 1.44905 15.796 1.25034 15.6553 1.10382C15.5147 0.95731 15.3239 0.875 15.125 0.875H1.625ZM2.375 6.34375V2.4375H14.375V6.34375H2.375ZM13.553 10.3672C13.3737 11.489 12.8632 12.5247 12.0924 13.3302C11.3216 14.1356 10.3289 14.6707 9.2525 14.8609C9.15539 14.8781 9.05599 14.8751 8.95997 14.8522C8.86396 14.8293 8.77321 14.787 8.69291 14.7276C8.61261 14.6682 8.54433 14.5929 8.49197 14.5059C8.43961 14.419 8.4042 14.3223 8.38775 14.2211C8.3713 14.1199 8.37414 14.0164 8.39611 13.9164C8.41808 13.8164 8.45874 13.7218 8.51578 13.6382C8.57282 13.5545 8.64511 13.4834 8.72854 13.4289C8.81197 13.3743 8.90489 13.3374 9.002 13.3203C9.77084 13.1845 10.4799 12.8024 11.0305 12.2271C11.5811 11.6519 11.9459 10.9122 12.074 10.1109C12.1118 9.91166 12.2226 9.73555 12.3829 9.61993C12.5432 9.50432 12.7405 9.4583 12.9328 9.49162C13.1252 9.52495 13.2975 9.63501 13.4133 9.79846C13.5291 9.96191 13.5792 10.1659 13.553 10.3672V10.3672Z" />
                    </svg>
                  </span>
                  <span
                    className={
                      isActive
                        ? " ml-5 font-semibold text-white sm:text-white opacity-80  group-hover:opacity-100  sm:hidden lg:flex  transition-all  "
                        : "ml-5 font-semibold text-white sm:text-primary opacity-80  group-hover:opacity-100   sm:hidden lg:flex "
                    }
                  >
                    Drink List
                  </span>
                </React.Fragment>
              )}
            </NavLink>

            <NavLink
              to="/admin/usermanagement"
              className={({ isActive }) =>
                isActive
                  ? "group flex items-center py-6 pl-6 sm:pl-4 lg:pl-6 bg-primary transition-all   "
                  : " group flex items-center py-6 pl-6 sm:pl-4 lg:pl-6  transition-all hover:pl-8   "
              }
              onClick={onUserManagementLinkClickHandler}
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
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 0C4.579 0 0 4.579 0 10C0 15.421 4.579 20 10 20C15.421 20 20 15.421 20 10C20 4.579 15.421 0 10 0ZM10 5C11.727 5 13 6.272 13 8C13 9.728 11.727 11 10 11C8.274 11 7 9.728 7 8C7 6.272 8.274 5 10 5ZM4.894 14.772C5.791 13.452 7.287 12.572 9 12.572H11C12.714 12.572 14.209 13.452 15.106 14.772C13.828 16.14 12.015 17 10 17C7.985 17 6.172 16.14 4.894 14.772Z" />
                    </svg>
                  </span>
                  <span
                    className={
                      isActive
                        ? " ml-5 font-semibold text-white sm:text-white opacity-80  group-hover:opacity-100  sm:hidden lg:flex  transition-all  "
                        : "ml-5 font-semibold text-white sm:text-primary opacity-80  group-hover:opacity-100   sm:hidden lg:flex "
                    }
                  >
                    User Management
                  </span>
                  <Notificationtile
                    status={"sm:hidden lg:flex"}
                    value={totalSignUps.length + totalResets.length}
                  ></Notificationtile>
                </React.Fragment>
              )}
            </NavLink>
          </div>

          <div>
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
              <ToggleSwitch devicestatus={"ml-4 hidden lg:flex"}></ToggleSwitch>
            </div> */}
            <button
              className="flex items-center py-6 pl-6 "
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
    </React.Fragment>
  );
};

export default AdminSideBarNav;
