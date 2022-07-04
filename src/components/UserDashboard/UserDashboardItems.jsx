import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getMenu } from "../../redux/userSlice";
import {
  formatDateToDateAndTimeString,
  formatDateToDateString,
  formatDateToStringNoYear,
} from "../../utils/util-functions";

const UserDashboardItems = ({ menuDate }) => {
  const dispatch = useDispatch();

  const [displayMessage, setDisplayMessage] = useState(
    "Welcome to BSL Lunch app"
  );
  const [ordersCloseAtMessage, setOrdersCloseAtMessage] = useState();

  const today = new Date();

  const [ordered, setOrdered] = useState(false);

  useEffect(() => {
    const checkUserOrderStatus = async () => {
      console.log("rendering this------------------");
      const response = await dispatch(getMenu(menuDate)).unwrap();
      // now lets handler all conditions here
      console.log(response);
      if (response.status === 401) {
        setDisplayMessage(
          `No menu added for ${formatDateToStringNoYear(
            response.date
          )} yet, please check back later`
        );
        // setOrdersCloseAtMessage(`Note; orders for this menu close at ${formatDateToDateAndTimeString(new Date(new Date(response.date).getTime() + (3600 * 1000 * 7)))}`)
        setOrdersCloseAtMessage("");
        setOrdered(false);
      } else if (response.status === 200) {
        // console.log(response.data.user_order.length)
        if (response.data.user_order.length === 0) {
          setDisplayMessage(
            `You have not placed an order for 
            ${
              response.data.menu_date.split("T")[0] ===
              today.toISOString().split("T")[0]
                ? "today,"
                : ""
            } 
            ${formatDateToStringNoYear(response.data.menu_date)}'s lunch yet.`
          );
          setOrdersCloseAtMessage(
            `Note that orders for this menu close at ${formatDateToDateAndTimeString(
              response.data.expires_at
            )}`
          );
          setOrdered(false);
        } else {
          // nigga has ordered.
          setDisplayMessage(
            `You have ordered ${response.data.user_order[0].food_name} ${
              (response.data.user_order[0].drink_name === null) ? '' : `and  ${response.data.user_order[0].drink_name}`
              
            } for ${
              response.data.menu_date.split("T")[0] ===
              today.toISOString().split("T")[0]
                ? "today"
                : ""
            } ${formatDateToStringNoYear(response.data.menu_date)}`
          );
          // setOrdersCloseAtMessage(`Note; You can edit this menu until at ${formatDateToDateAndTimeString(response.data.expires_at)}`)
          setOrdersCloseAtMessage("");
          setOrdered(true);
        }
      }
      // console.log(response)
    };

    return () => {
      checkUserOrderStatus();
    };
  });

  console.log(Boolean(ordered));

  return (
    <React.Fragment>
      <div className=" text-center px-4 lg:px-8 mt-[100px] lg:mt-[153px] text-primary font-medium text-xl lg:w-[700px] lg:mx-auto leading-8  ">
        <h1>{displayMessage}</h1>

        <h1 className=" mt-4"> {ordersCloseAtMessage}</h1>

        {/* {userOrder ? 
            `You have ordered for ${userOrder.food_name}  ${userOrder.drink_name && `and ${userOrder.drink_name}` } for  ${formatDateToDateString(currentMenu.menu_date)} ` 
            : `Looks like you have not placed an order for ${formatDateToDateString(currentMenu.menu_date)}'s lunch` } */}
      </div>
      <div className="mt-[100px]  md:px-[50px] flex lg:flex lg:mx-auto justify-between">
        <Link
          to="/me/order"
          className="w-[150px] h-[237px] sm:w-[200px] sm:h-[300px] lg:h-[362px] lg:w-[258px] flex flex-col bg-tablehighligh rounded-[20px] justify-center items-center hover:bg-primary/80 group active:bg-primary"
        >
          <svg
            className="fill-primary opacity-80 group-hover:fill-white "
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M54.2818 70H59.5636C62.2364 70 64.4318 67.9318 64.75 65.3227L70 12.8864H54.0909V0H47.8227V12.8864H32.0091L32.9636 20.3318C38.4045 21.8273 43.4955 24.5318 46.55 27.5227C51.1318 32.0409 54.2818 36.7182 54.2818 44.3545V70ZM0 66.8182V63.6364H47.8227V66.8182C47.8227 68.5364 46.3909 70 44.5455 70H3.18182C1.43182 70 0 68.5364 0 66.8182ZM47.8227 44.5455C47.8227 19.0909 0 19.0909 0 44.5455H47.8227ZM0 50.9091H47.7273V57.2727H0V50.9091Z" />
          </svg>
          <h1 className="mt-[62px] font-semibold text-base text-primary hover:text-white opacity-80 group-hover:text-white">
            {ordered ? "View Order" : "Order Food"}
          </h1>
        </Link>
        <Link
          to="/me/history"
          className=" w-[150px] h-[237px] sm:w-[200px] sm:h-[300px] lg:h-[362px] lg:w-[258px] flex flex-col bg-tablehighligh rounded-[20px] justify-center items-center hover:bg-primary/80 group active:bg-primary lg:ml-[100px]"
        >
          <svg
            className="fill-primary opacity-80 group-hover:fill-white "
            width="90"
            height="90"
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M45 30V48.75H63.75V41.25H52.5V30H45Z" />
            <path d="M79.845 31.8637C78.1534 27.8514 75.6979 24.2063 72.615 21.1312C67.9483 16.4646 62.0164 13.2679 55.5525 11.9362C51.066 11.023 46.4415 11.023 41.955 11.9362C35.485 13.2594 29.548 16.4587 24.885 21.135C21.8096 24.2133 19.355 27.8544 17.655 31.86C15.8967 36.0173 14.9937 40.4861 15 45L15.0037 45.0937H7.5L18.75 60L30 45.0937H22.5037L22.5 45C22.4892 39.7701 24.0505 34.6577 26.9812 30.3262C28.8717 27.5313 31.2786 25.1232 34.0725 23.2312C36.9148 21.3165 40.1029 19.974 43.4587 19.2787C50.2782 17.8766 57.3754 19.2398 63.1902 23.0687C69.0049 26.8976 73.0612 32.8788 74.4675 39.6975C75.1749 43.192 75.1749 46.7929 74.4675 50.2875C73.7814 53.6461 72.4382 56.836 70.515 59.6737C69.5775 61.065 68.5012 62.3737 67.3125 63.5587C64.9169 65.9514 62.0844 67.8622 58.9687 69.1875C57.3818 69.8583 55.7326 70.3708 54.045 70.7175C50.5516 71.4243 46.9521 71.4243 43.4587 70.7175C40.1036 70.0296 36.9167 68.6878 34.08 66.7687C32.6848 65.826 31.3827 64.7524 30.1912 63.5625L24.8887 68.865C28.0205 72.001 31.7401 74.4883 35.8346 76.1846C39.9291 77.8808 44.318 78.7526 48.75 78.75C53.2614 78.7481 57.7272 77.8468 61.8862 76.0987C67.9148 73.5481 73.0726 69.301 76.7325 63.8737C80.4992 58.3008 82.5083 51.7264 82.5 45C82.5094 40.487 81.6063 36.0188 79.845 31.8637Z" />
          </svg>

          <h1 className="mt-[45px] font-semibold text-base text-primary hover:text-white opacity-80 group-hover:text-white">
            History
          </h1>
        </Link>
      </div>
      <div className=" pt-[120px]"></div>
    </React.Fragment>
  );
};

export default UserDashboardItems;
