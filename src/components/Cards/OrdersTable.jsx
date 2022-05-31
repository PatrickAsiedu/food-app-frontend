import React from "react";

const OrdersTable = ({orders}) => {
  return (
    <React.Fragment>
      <div className="w-full h-[400px] box-outer-shadow mt-12 rounded-3xl px-9">
        <div className="w-full pt-9 flex justify-evenly h-[72px] py-7  grid grid-cols-5">
          <h1>Name</h1>
          <h1>Food Choice</h1>
          <h1>Drink Choice</h1>
          <h1>Comments</h1>
          <h1>Order Date</h1>
        </div>
        {orders.map(order => (
          <div key={order.id} className="w-full mt-6 bg-primary/10  grid grid-cols-5 text-sm">
          <h1 className="">{order.name}</h1>
          <h1>{order.food_name}</h1>
          <h1>{order.drink_name}</h1>
          <h1>{order?.comment}</h1>
          <h1>{order.created_at.split('T')[0]}</h1>
        </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default OrdersTable;
