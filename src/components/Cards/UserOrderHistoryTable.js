import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getMyOrders } from "../../redux/userSlice";
import { sortByDate } from "../../utils/util-functions";

import {
  formatDateToDateString,
  formatDateToDateAndTimeString,
} from "../../utils/util-functions";
import RenderLoading from "../../components/UI/RenderLoading";

const UserOrderHistoryTable = () => {
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
        setError(
          "You haven't order anything yet, please order something and check again"
        );
        setOrders("");
      }
    };

    getOrders();
  }, []);

  console.log(orders);

  if (error) {
    return (
      <div className="text-primary font-medium text-base  flex flex-col  mt-8 lg:mt-12  pb-5  lg:w-[650px] box-outer-shadow rounded-3xl mx-auto px-5 lg:px-12 ">
        <h1 className=" mt-10 lg:mt-20 text-center font-semibold text-primary text-xl lg:text-2xl">
          {error}
        </h1>
      </div>
    );
  }

  return (
    <React.Fragment>
      {orders ? (
        <div className=" hidden sm:flex lg:flex lg:px-12 xl:px-[70px] 2xl:px-[200px] text-primary">
          <div className=" w-full  box-outer-shadow mt-12 rounded-3xl px-5 ">
            <div className="w-full pt-9  h-[72px] py-7  grid grid-cols-5 gap-3   ">
              <h1 className="font-semibold pl-3">Food Choice</h1>
              <h1 className="font-semibold ">Drink Choice</h1>
              <h1 className="font-semibold ">Comments</h1>
              <h1 className="font-semibold ">Menu Date</h1>
              <h1 className="font-semibold ">Ordered on</h1>
            </div>

            <div className="mt-6 pb-24">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="w-full mt-6 bg-tablehighligh/50 grid grid-cols-5 text-sm gap-3 "
                >
                  <h1 className="py-4 font-medium break-words pl-3 ">
                    {order.food_name}
                  </h1>

                  <h1 className="py-4 font-medium break-words   ">
                    {order.drink_name}
                  </h1>
                  <h1 className="py-4 font-medium break-words   ">
                    {order.comment}
                  </h1>
                  <h1 className="py-4 font-medium break-words ">
                    {formatDateToDateString(order.menu_date)}
                  </h1>
                  <h1 className="py-4 font-medium break-words   ">
                    {formatDateToDateAndTimeString(order.created_at)}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <RenderLoading />
      )}
    </React.Fragment>
  );
};

export default UserOrderHistoryTable;
