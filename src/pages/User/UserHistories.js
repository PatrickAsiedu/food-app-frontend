import React, { useState, useEffect } from "react";

import UserSideBarNav from "../../components/UserSideBarNav";

import UserTitlebar from "../../components/Usertitle bar/Usertitlebar";
import { useDispatch } from "react-redux";

import UserOrderHistoryTable from "../../components/Cards/UserOrderHistoryTable";
import OrderHistoryCard from "../../components/Cards/OrderHistoryCard";
import { getMyOrders } from "../../redux/userSlice";
import { sortByDate } from "../../utils/util-functions";

import { formatDateToDateString } from "../../utils/util-functions";

const UserHistories = () => {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const getOrders = async () => {
      const response = await dispatch(getMyOrders()).unwrap();
      //  console.log(response)
      if (response.status === 200) {
        setOrders(response.data.data);
        const data = [...response.data.data];
        setOrders(sortByDate(data));
      } else {
        setError("No orders found");
        setOrders(null);
      }
    };

    getOrders();
  }, [dispatch]);

  console.log(orders);
  console.log(error);
  return (
    <React.Fragment>
      <div className=" px-4  sm:flex sm:pr-0 lg:px-0 lg:flex h-screen ">
        <UserSideBarNav />

        <main className="lg:flex lg:flex-col sm:w-[90%] sm:ml-[10%]  lg:px-0 lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] sm:px-8 ">
          <UserTitlebar title="Your Order History"></UserTitlebar>

          <UserOrderHistoryTable />
          {orders &&
            orders.map((order) => (
              <OrderHistoryCard
                key={order.id}
                foodname={order.food_name}
                drinkname={order.drink_name}
                comment={order.comment || "no comment"}
                date={formatDateToDateString(order.created_at).slice(0, -4)}
              />
            ))}

          <div className=" pt-[120px]"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default UserHistories;
