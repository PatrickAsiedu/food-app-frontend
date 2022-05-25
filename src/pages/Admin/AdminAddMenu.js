import React from "react";
import AddDrinkForm from "../../components/AddDrinkForm/AddDrinkForm";
import AddFoodForm from "../../components/AddFoodForm/AddFoodForm";
import FoodItem from "../../components/FoodItem/FoodItem";
import DrinkItem from "../../components/DrinkItem/DrinkItem";
import AdminSideBarNav from "../../components/AdminSideBarNav";

const AdminAddMenu = () => {
  return (
    <React.Fragment>
      <div className=" lg:flex h-screen ">
        <AdminSideBarNav />

        <main className=" lg:flex flex-col lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] px-8  lg:px-[90px] 2xl:px-[300px] text-base text-primary ">
          <div className="w-full  box-outer-shadow mt-[5%] px-6 rounded-3xl 2xl:px-[86px] pt-9 lg:pt-16 text-base font-medium text-primary">
            <AddFoodForm></AddFoodForm>
            <AddDrinkForm></AddDrinkForm>
          </div>
          <div className="mt-12 w-full box-outer-shadow h-screen px-6 rounded-3xl lg:px-[86px] pt-9 lg:pt-16 text-base font-medium text-primary">
            <h1 className="font-semibold text-2xl text-center">Menu</h1>
            <h1 className="mt-7 lg:mt-10 mb-4">Food</h1>
            <div className="grid grid-cols-1 gap-3">
              <FoodItem></FoodItem>
              <FoodItem></FoodItem>
              <FoodItem></FoodItem>
            </div>
            <h1 className="mt-7 lg:mt-10 mb-4">Drink</h1>
            <div className="grid grid-cols-1 gap-3">
              <DrinkItem></DrinkItem>
              <DrinkItem></DrinkItem>
              <DrinkItem></DrinkItem>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default AdminAddMenu;
