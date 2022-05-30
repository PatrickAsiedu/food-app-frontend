import React from "react";
import AdminSideBarNav from "../../components/AdminSideBarNav";
import DrinkCard from "../../components/Cards/DrinkCard";
import FoodCard from "../../components/Cards/FoodCard";

const AdminOrders = () => {
  return (
    <React.Fragment>
      <div className=" lg:flex h-screen ">
        <AdminSideBarNav />

        <main className=" lg:flex flex-col lg:ml-[30%] 2xl:ml-[20%]  w-[70%]  2xl:w-[80%] px-8  lg:px-[90px] text-base text-primary  ">
          <h1 className=" ml-3 mt-[40px] font-semibold mb-3">Foods</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-9">
            <FoodCard></FoodCard>
            <FoodCard></FoodCard>
            <FoodCard></FoodCard>
            <FoodCard></FoodCard>
          </div>
          <h1 className=" ml-3 mt-[50px] font-semibold mb-3">Drinks</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-9 ">
            <DrinkCard></DrinkCard>
            <DrinkCard></DrinkCard>
            <DrinkCard></DrinkCard>
          </div>

          <div className="w-full  box-outer-shadow mt-12 rounded-3xl px-9 h-[400px] ">
            <div className="w-full pt-9  h-[72px] py-7  grid grid-cols-3  ">
              <h1>Name</h1>
              <h1>Food choice</h1>
              <h1>Comments</h1>
            </div>
            <div className="w-full mt-6 bg-primary/10  grid grid-cols-3 text-sm ">
              <h1 className="">brightjhkjshdfkj naymeeejehjhhjhjkg</h1>
              <h1>Bhhhhkanku and Tilapi</h1>
              <h1>Idont like</h1>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default AdminOrders;
