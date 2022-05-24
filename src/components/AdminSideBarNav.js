import React from 'react'
import { Link } from 'react-router-dom';
import BSLlogo from '../assets/logo-stack-dark 1 1.png';
import ToggleSwitch from './UI/ToggleSwitch';
import { useDispatch } from 'react-redux';
import { logOutCurrentUser } from '../redux/userSlice';

const AdminSideBarNav = () => {
  const dispatch=useDispatch();

  return (
    <React.Fragment>
        <div className=" lg:pl-8 lg:h-full lg:border-r-2  lg:w-[30%] 2xl:w-[20%] lg:fixed ">
          <header className="flex items-center justify-between  py-6 px-8  lg:pl-0">
            <div className="flex items-center">
              <img src={BSLlogo} alt="" />
              <span className="  ml-3 font-bold text-base ">
                BSL <span className="text-primary">ORDERS</span>{" "}
              </span>
            </div>

            <div>
              <ToggleSwitch devicestatus={"mr-4 lg:hidden"}></ToggleSwitch>
              <button>
                <svg
                  width="26"
                  height="17"
                  viewBox="0 0 26 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.75 17H0V14.1667H12.75V17ZM25.5 9.9167H0V7.08333H25.5V9.9167ZM25.5 2.83333H12.75V0H25.5V2.83333Z"
                    fill="#002C59"
                  />
                </svg>
              </button>
            </div>
          </header>
          <div className="px-6"></div>

          <nav className=" hidden lg:flex lg:flex-col  height-calc mt-24  flex-col justify-between">
            <div>
              <Link to='/admin' className=" group flex items-center py-6 pl-6 hover:bg-primary  ">
                <span>
                  <svg
                    className="group-hover:fill-white group-hover:opacity-100 fill-primary opacity-80"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.16667 16.7917H12.9167C13.2592 16.7917 13.5878 16.6556 13.83 16.4133C14.0722 16.1711 14.2083 15.8426 14.2083 15.5V5.16667C14.2083 4.8241 14.0722 4.49555 13.83 4.25332C13.5878 4.01109 13.2592 3.875 12.9167 3.875H5.16667C4.8241 3.875 4.49555 4.01109 4.25332 4.25332C4.01109 4.49555 3.875 4.8241 3.875 5.16667V15.5C3.875 15.8426 4.01109 16.1711 4.25332 16.4133C4.49555 16.6556 4.8241 16.7917 5.16667 16.7917ZM3.875 25.8333C3.875 26.1759 4.01109 26.5044 4.25332 26.7467C4.49555 26.9889 4.8241 27.125 5.16667 27.125H12.9167C13.2592 27.125 13.5878 26.9889 13.83 26.7467C14.0722 26.5044 14.2083 26.1759 14.2083 25.8333V20.6667C14.2083 20.3241 14.0722 19.9956 13.83 19.7533C13.5878 19.5111 13.2592 19.375 12.9167 19.375H5.16667C4.8241 19.375 4.49555 19.5111 4.25332 19.7533C4.01109 19.9956 3.875 20.3241 3.875 20.6667V25.8333ZM16.7917 25.8333C16.7917 26.1759 16.9278 26.5044 17.17 26.7467C17.4122 26.9889 17.7408 27.125 18.0833 27.125H25.8333C26.1759 27.125 26.5044 26.9889 26.7467 26.7467C26.9889 26.5044 27.125 26.1759 27.125 25.8333V16.7917C27.125 16.4491 26.9889 16.1206 26.7467 15.8783C26.5044 15.6361 26.1759 15.5 25.8333 15.5H18.0833C17.7408 15.5 17.4122 15.6361 17.17 15.8783C16.9278 16.1206 16.7917 16.4491 16.7917 16.7917V25.8333ZM18.0833 12.9167H25.8333C26.1759 12.9167 26.5044 12.7806 26.7467 12.5383C26.9889 12.2961 27.125 11.9676 27.125 11.625V5.16667C27.125 4.8241 26.9889 4.49555 26.7467 4.25332C26.5044 4.01109 26.1759 3.875 25.8333 3.875H18.0833C17.7408 3.875 17.4122 4.01109 17.17 4.25332C16.9278 4.49555 16.7917 4.8241 16.7917 5.16667V11.625C16.7917 11.9676 16.9278 12.2961 17.17 12.5383C17.4122 12.7806 17.7408 12.9167 18.0833 12.9167Z" />
                  </svg>
                </span>
                <span className=" ml-5 font-semibold text-primary opacity-80 group-hover:text-white group-hover:opacity-100 group-hover:font-medium  ">
                  Dashboard
                </span>
              </Link>
              <Link to='/admin/addmenu' className="flex items-center py-6 pl-6 hover:bg-primary group">
                <span>
                  <svg
                    className="group-hover:fill-white group-hover:opacity-100 fill-primary opacity-80"
                    width="21"
                    height="29"
                    viewBox="0 0 21 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.1111 0.722168H1.88891C1.43215 0.722168 0.994093 0.903616 0.671114 1.2266C0.348135 1.54957 0.166687 1.98763 0.166687 2.44439V26.5555C0.166687 27.0123 0.348135 27.4503 0.671114 27.7733C0.994093 28.0963 1.43215 28.2777 1.88891 28.2777H19.1111C19.5679 28.2777 20.0059 28.0963 20.3289 27.7733C20.6519 27.4503 20.8334 27.0123 20.8334 26.5555V2.44439C20.8334 1.98763 20.6519 1.54957 20.3289 1.2266C20.0059 0.903616 19.5679 0.722168 19.1111 0.722168ZM6.19446 21.3888H4.47224V19.6666H6.19446V21.3888ZM6.19446 17.9444H4.47224V16.2222H6.19446V17.9444ZM6.19446 14.4999H4.47224V12.7777H6.19446V14.4999ZM6.19446 11.0555H4.47224V9.33328H6.19446V11.0555ZM6.19446 7.61106H4.47224V5.88883H6.19446V7.61106ZM16.5278 21.3888H7.91669V19.6666H16.5278V21.3888ZM16.5278 17.9444H7.91669V16.2222H16.5278V17.9444ZM16.5278 14.4999H7.91669V12.7777H16.5278V14.4999ZM16.5278 11.0555H7.91669V9.33328H16.5278V11.0555ZM16.5278 7.61106H7.91669V5.88883H16.5278V7.61106Z" />
                  </svg>
                </span>
                <span className=" ml-5 font-semibold text-primary opacity-80 group-hover:text-white group-hover:opacity-100 group-hover:font-medium">
                  Add Menu
                </span>
              </Link>
              <Link to='/admin/orders' className="flex items-center py-6 pl-6  hover:bg-primary group  ">
                <span>
                  <svg
                    className="group-hover:fill-white group-hover:opacity-100 fill-primary opacity-80"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 31C14.1046 31 15 29.6569 15 28C15 26.3431 14.1046 25 13 25C11.8954 25 11 26.3431 11 28C11 29.6569 11.8954 31 13 31Z" />
                    <path d="M24 31C25.1046 31 26 29.6569 26 28C26 26.3431 25.1046 25 24 25C22.8954 25 22 26.3431 22 28C22 29.6569 22.8954 31 24 31Z" />
                    <path d="M29.4505 6.57143H8.26783L6.4791 2.02072C6.2443 1.42131 5.84687 0.909288 5.3372 0.549546C4.82752 0.189805 4.22855 -0.00145548 3.61621 8.3401e-06H0V3.28572H3.61776L10.9695 21.9896C11.2098 22.6008 11.7755 23 12.4002 23H24.8004C25.4468 23 26.0249 22.5745 26.2528 21.9354L30.9028 8.79258C30.99 8.54384 31.0191 8.27648 30.9878 8.01324C30.9565 7.75 30.8657 7.49867 30.7231 7.2806C30.5805 7.06253 30.3904 6.88418 30.1688 6.76071C29.9472 6.63725 29.7008 6.57231 29.4505 6.57143ZM23.2504 16.4286H20.1503V19.7143H17.0503V16.4286H13.9502V13.1429H17.0503V9.85715H20.1503V13.1429H23.2504V16.4286Z" />
                  </svg>
                </span>
                <span className=" ml-5 font-semibold text-primary opacity-80 group-hover:text-white group-hover:opacity-100 group-hover:font-medium">
                  Orders
                </span>
                <div className="relative w-[31px] h-[26px] ml-3 bg-notification rounded-full text-primary">
                  <span className="absolute left-[9px]">8</span>
                </div>
              </Link>
            </div>

            <div>
              <div className=" flex items-center pl-6 py-6 ">
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
                <ToggleSwitch
                  devicestatus={"ml-4 hidden lg:flex"}
                ></ToggleSwitch>
              </div>
              <button className="flex items-center py-6 pl-6 " onClick={() => dispatch(logOutCurrentUser())}>
                <span>
                  <svg
                    width="27"
                    height="31"
                    viewBox="0 0 27 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6666 16.7917V14.2083H5.04165V10.3333L-1.41669 15.5L5.04165 20.6667V16.7917H16.6666Z"
                      fill="#002C59"
                      fillOpacity="0.8"
                    />
                    <path
                      d="M21.8333 3.875H10.2083C8.78363 3.875 7.625 5.03362 7.625 6.45833V11.625H10.2083V6.45833H21.8333V24.5417H10.2083V19.375H7.625V24.5417C7.625 25.9664 8.78363 27.125 10.2083 27.125H21.8333C23.258 27.125 24.4167 25.9664 24.4167 24.5417V6.45833C24.4167 5.03362 23.258 3.875 21.8333 3.875Z"
                      fill="#002C59"
                      fillOpacity="0.8"
                    />
                  </svg>
                </span>
                <span className=" ml-5 font-semibold text-primary opacity-80">
                  Log Out
                </span>
              </button>
            </div>
          </nav>
        </div>
    </React.Fragment>
  )
}

export default AdminSideBarNav