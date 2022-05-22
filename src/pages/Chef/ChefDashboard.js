import React, { useEffect} from "react";

import TotalFoodOrders from "../../components/Cards/TotalFoodOrders";
import TotalDrinkOrders from "../../components/Cards/TotalDrinkOrders";
import TotalComments from "../../components/Cards/TotalComments";
import ChefSideBarNav from "../../components/ChefSideBarNav";
import { useDispatch } from "react-redux";
import OrdersTable from "../../components/Cards/OrdersTable";

const ChefDashboard = () => {
  const dispatch = useDispatch();

  const today= new Date();
  const totalFood = 0;
  const totalDrink = 0;
  const totalComments = 0;

  



  return (
    <React.Fragment>
      <div className=" lg:flex h-screen ">
        <ChefSideBarNav />

        <main className=" lg:flex flex-col lg:ml-[30%] 2xl:ml-[20%]  w-[70%]  2xl:w-[80%] px-8  lg:px-[90px] text-base text-primary ">
          <h1 className="mt-[5%] text-primary font-bold text-base">
            WELCOME CHEFF
          </h1>
          <h1 className="text-primary font-bold text-base text-right">Today: {today.toDateString()} </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[50px] lg:gap-9 ">
            <TotalFoodOrders value={totalFood} />
            <TotalDrinkOrders value={totalDrink} />
            <TotalComments value={totalComments}/>
          </div>

          <OrdersTable />
          
        </main>
      </div>
    </React.Fragment>
  )
}

export default ChefDashboard