import React, { useEffect, useState} from "react";

import TotalFoodOrders from "../../components/Cards/TotalFoodOrders";
import TotalDrinkOrders from "../../components/Cards/TotalDrinkOrders";
import TotalComments from "../../components/Cards/TotalComments";
import ChefSideBarNav from "../../components/ChefSideBarNav";
import { useDispatch, useSelector } from "react-redux";
import OrdersTable from "../../components/Cards/OrdersTable";
import { getOrders } from "../../redux/chefSlice";

const ChefDashboard = () => {
  const dispatch = useDispatch();
  const chefName = useSelector(state=>state.user.user.name);
  const [totalFood, setTotalFood] = useState(0);
  const [totalDrink, setTotalDrink] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [orders, setOrders] = useState();


  const today= new Date();

  useEffect(()=>{
    const getTodayOrder = async() =>{
      const menuDate = today.toISOString().split('T')[0];
      const response = await dispatch(getOrders('2022-05-28')).unwrap();
      // console.log(response);
      if(response.status=== 200){
        setOrders(response.data)
        setTotalFood(response?.data.filter(order=>order.food_name).length);
        setTotalDrink(response?.data.filter(order=>order.drink_name).length);
        setTotalComments(response?.data.filter(order=>order.comment).length);
      }
    };
    getTodayOrder();
  }, [])


console.log(orders)
  return (
    <React.Fragment>
      <div className=" lg:flex h-screen ">
        <ChefSideBarNav />

        <main className=" lg:flex flex-col lg:ml-[30%] 2xl:ml-[20%]  w-[70%]  2xl:w-[80%] px-8  lg:px-[90px] text-base text-primary ">
          <h1 className="mt-[5%] text-primary font-bold text-base">
            WELCOME: {chefName}
          </h1>
          <h1 className="text-primary font-bold text-base text-right">Today: {today.toDateString()} </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[50px] lg:gap-9 ">
            <TotalFoodOrders value={totalFood} />
            <TotalDrinkOrders value={totalDrink} />
            <TotalComments value={totalComments}/>
          </div>

        {orders ? <OrdersTable orders={orders} /> : <h1>No orders placed yet</h1>}
          
        </main>
      </div>
    </React.Fragment>
  )
}

export default ChefDashboard