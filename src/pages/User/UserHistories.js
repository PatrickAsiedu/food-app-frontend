import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Profile from "../../components/UI/Profile";
import UserSideBarNav from "../../components/UserSideBarNav";
import { getMyOrders } from "../../redux/userSlice";

const UserHistories = () => {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState();

  useEffect(() => {
    const getOrders = async () => {
      const response = await dispatch(getMyOrders()).unwrap();
      //  console.log(response)
      if (response.status === 200) {
        setOrders(response.data.data);
      }
    };

    getOrders();
  }, []);
  // console.log(orders)

  return (
    <React.Fragment>
      <div className=" lg:flex h-screen ">
        <UserSideBarNav />

        <main className="hidden lg:flex flex-col md:ml-[30%] 2xl:ml-[20%]  w-[70%]  2xl:w-[80%]  ">
          <div className="relative mt-6 w-full h-16 ">
            <Profile></Profile>
          </div>

          <h1 className="text-center">User Order Histories</h1>

          <div className="lg:px-[90px] 2xl:px-[200px]">
            <div className=" w-full h-[400px] box-outer-shadow mt-12 rounded-3xl px-5 ">
              <div className="w-full pt-9 flex justify-evenly h-[72px] py-7  grid grid-cols-5">
                <h1>Food Choice</h1>
                <h1>Drink Choice</h1>
                <h1>Comments</h1>
                <h1>Menu Date</h1>
                <h1>Ordered on</h1>
              </div>
              {!orders && "No orders found for user"}

              {orders &&
                orders.map((order) => (
                  <div
                    className="w-full mt-6 bg-primary/10  grid grid-cols-5 text-sm"
                    key={order.id}
                  >
                    <h1>{order.food_name}</h1>
                    <h1>{order.drink_name}</h1>
                    <h1>{order.comment}</h1>
                    <h1>{order.menu_date.split("T")[0]}</h1>
                    <h1>{order.created_at.split("T")[0]}</h1>
                  </div>
                ))}
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default UserHistories;
