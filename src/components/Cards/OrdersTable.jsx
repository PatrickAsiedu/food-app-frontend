import React from "react";

const OrdersTable = () => {
  return (
    <React.Fragment>
      <div className="w-full h-[400px] box-outer-shadow mt-12 rounded-3xl px-9">
        <div className="w-full pt-9 flex justify-evenly h-[72px] py-7  grid grid-cols-4">
          <h1>Name</h1>
          <h1>Food choice</h1>
          <h1>Comments</h1>
          <h1>Order Date</h1>
        </div>
        <div className="w-full mt-6 bg-primary/10  grid grid-cols-4 text-sm">
          <h1 className="">Kofi Mensah</h1>
          <h1>Banku and Tilapia</h1>
          <h1>I dont like plenty pepper</h1>
          <h1>Date </h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrdersTable;
