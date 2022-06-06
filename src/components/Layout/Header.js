import BSLlogo from "../../assets/logo-stack-dark 1 1.png";
import ToggleSwitch from "../UI/ToggleSwitch";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleHamburger } from "../../redux/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  // const [showHamburger, setshowHamburger] = useState(false);

  const onHamburgerClickHandler = () => {
    dispatch(toggleHamburger());
  };

  return (
    <header className="flex items-center justify-between  py-6  lg:pl-0">
      <div className="flex items-center">
        <img src={BSLlogo} alt="" />
        <span className="  ml-3 font-bold text-base sm:hidden lg:flex ">
          BSL <span className="text-primary">ORDERS</span>
        </span>
      </div>

      <div>
        {/* <ToggleSwitch devicestatus={"mr-4 lg:hidden"}></ToggleSwitch> */}
        <button onClick={onHamburgerClickHandler} className="flex sm:hidden">
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
  );
};

export default Header;
