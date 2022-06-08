import React, { useState, useEffect } from "react";
import ChefSideBarNav from "../../components/ChefSideBarNav";
import DrinkCard from "../../components/Cards/DrinkCard";
import FoodCard from "../../components/Cards/FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { getMenu, getOrders } from "../../redux/chefSlice";
import OrdersTable from "../../components/Cards/OrdersTable";
import OrdersCard from "../../components/Cards/OrdersCard";

import {
  formatDateToDateString,
  formatDateToDateAndTimeString,
} from "../../utils/util-functions";

const ChefOrders = () => {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState();
  const today = new Date();
  const defaultSelectedDate = today.toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(defaultSelectedDate);
  const [error, setError] = useState();

  const [foodSummary, setFoodSummary] = useState();
  const [drinkSummary, setDrinkSummary] = useState();

  // const [totalFood, setTotalFood] = useState(0);
  // const [totalDrink, setTotalDrink] = useState(0);
  // const [totalComments, setTotalComments] = useState(0);

  useEffect(() => {
    const getSelectedOrder = async () => {
      const response = await dispatch(getOrders(selectedDate)).unwrap();
      console.log(response);
      if (response.status === 200) {
        setOrders(response.data);
        const getMenuRequest = await dispatch(getMenu(selectedDate)).unwrap();
        console.log(getMenuRequest.data);
        // now get the total order of each food
        const tempFoods = getMenuRequest.data.foods.map((menufood) => {
          const count = response.data.filter(
            (orderfood) => orderfood.food_id === menufood.food_id
          ).length;
          return { count: count, ...menufood };
        });
        // console.log(tempFoods)

        setFoodSummary(tempFoods);

        const tempDrinks = getMenuRequest.data?.drinks.map((menuDrink) => {
          const count = response.data.filter(
            (orderDrink) => orderDrink.drink_id === menuDrink.drink_id
          ).length;
          return { count: count, ...menuDrink };
        });
        // console.log(tempDrinks)
        setDrinkSummary(tempDrinks);
      } else if (response.status === 400) {
        // handle error on no order found here
        // first clear all states set by the if block above
        setOrders("");
        setFoodSummary("");
        setDrinkSummary("");
        setError(response.errorMessage);
      }
    };
    getSelectedOrder();
  }, [selectedDate]);

  console.log(foodSummary);
  console.log(drinkSummary);
  console.log(error);

  const onDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <React.Fragment>
      <div className=" px-4  sm:flex sm:pr-0 lg:px-0 lg:flex h-screen ">
        <ChefSideBarNav />

        <main className=" lg:flex lg:flex-col sm:w-[90%] sm:ml-[10%]   lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] sm:px-8  lg:px-[90px] text-base text-primary  ">
          <div className=" mt-[40px] text-right">
            <form>
              <label className="text-primary font-bold text-base">
                Select Date:{" "}
              </label>
              <input type="date" value={selectedDate} onChange={onDateChange} />
            </form>
          </div>

          <h1 className=" ml-3 mt-[40px] font-semibold mb-3">Foods</h1>
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-9">
            {foodSummary ? (
              foodSummary.map((food) => (
                <FoodCard
                  key={food.food_id}
                  foodName={food.food_name}
                  total={food.count}
                />
              ))
            ) : (
              <div className="mt-3">--- No Foods found ---</div>
            )}
          </div>

          <h1 className=" ml-3 mt-[50px] font-semibold mb-3">Drinks</h1>
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-9 ">
            {drinkSummary ? (
              drinkSummary.map((drink) => (
                <DrinkCard
                  key={drink.drink_id}
                  drinkName={drink.drink_name}
                  total={drink.count}
                />
              ))
            ) : (
              <div className="mt-3">--- No Drinks found ---</div>
            )}
          </div>
          <h1 className=" sm:hidden ml-3 mt-[40px] font-semibold mb-3">
            Orders
          </h1>
          {orders?.map((order) => (
            <OrdersCard
              key={order.id}
              name={order.name}
              foodname={order.food_name}
              drinkname={order.drink_name}
              comment={order.comment || "no comment"}
              date={formatDateToDateString(order.created_at)}
            ></OrdersCard>
          ))}

          {orders ? (
            <OrdersTable orders={orders} />
          ) : (
            <h1 className="text-primary text-base text-center mt-[50px]">
              No orders placed yet
            </h1>
          )}

          {/* <div className="w-full  box-outer-shadow mt-12 rounded-3xl px-9 h-[400px] ">
            <div className="w-full pt-9  h-[72px] py-7  grid grid-cols-5  ">
              <h1>Name</h1>
              <h1>Food choice</h1>
              <h1>Drink Choice</h1>
              <h1>Comments</h1>
              <h1>Ordered on</h1>
            </div>
            {orders ? (
              orders.map((order) => (
                <div
                  key={order.id}
                  className="w-full mt-6 bg-primary/10  grid grid-cols-5 text-sm "
                >
                  <h1 className="">{order.name}</h1>
                  <h1>{order.food_name}</h1>
                  <h1>{order.drink_name}</h1>
                  <h1>{order.comment}</h1>
                  <h1>{order.created_at.split("T")[0]}</h1>
                </div>
              ))
            ) : (
              <div className="mt-5">--- No orders found ---</div>
            )}
          </div> */}
          <div className=" pt-[120px]"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default ChefOrders;
