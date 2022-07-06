import React from "react";
import {
  // formatDateToDateString,
  formatDateToDateAndTimeString,
} from "../../utils/util-functions";

const OrdersTable = ({ orders }) => {
  return (
    <React.Fragment>
      <div className="hidden sm:flex sm:flex-col w-full  box-outer-shadow mt-12 rounded-3xl px-9 ">
        <div className="w-full pt-9  h-[72px] py-7  grid grid-cols-5 gap-3 mb-6">
          <h1 className="font-semibold pl-3">Name</h1>
          <h1 className="font-semibold ">Food Choice</h1>
          <h1 className="font-semibold ">Drink Choice</h1>
          <h1 className="font-semibold ">Comments</h1>
          <h1 className="font-semibold ">Order Date</h1>
        </div>
        {orders.map((order) => (
          <div
            key={order.id}
            className="w-full  bg-tablehighligh/50 grid grid-cols-5 text-sm gap-3 mb-6"
          >
            <h1 className="py-4 font-medium break-words pl-3">{order.name}</h1>
            <h1 className="py-4 font-medium break-words   ">
              {order.food_name}
            </h1>
            <h1 className="py-4 font-medium break-words   ">
              {order.drink_name}
            </h1>
            <h1 className="py-4 font-medium break-words   ">
              {order?.comment}
            </h1>
            <h1 className="py-4 font-medium break-words   ">
              {formatDateToDateAndTimeString(order.created_at)}
            </h1>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default OrdersTable;
