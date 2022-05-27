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

        <main className="hidden lg:flex flex-col md:ml-[30%] 2xl:ml-[20%]  w-[70%]  2xl:w-[80%] ">
          <div className="relative mt-6 w-full h-16 ">
            <Profile></Profile>
          </div>

          <div className="lg:px-[90px] 2xl:px-[200px] text-primary">
            <h1 className="text-left font-semibold mt-12 text-xl ">
              Your Order History
            </h1>

            <div className=" w-full  box-outer-shadow mt-12 rounded-3xl px-5 ">
              <div className="w-full pt-9  h-[72px] py-7  grid grid-cols-5 gap-3   ">
                <h1 className="font-semibold pl-3">Food Choice</h1>
                <h1 className="font-semibold ">Drink Choice</h1>
                <h1 className="font-semibold ">Comments</h1>
                <h1 className="font-semibold ">Menu Date</h1>
                <h1 className="font-semibold ">Ordered on</h1>
              </div>

              {!orders && "No orders found for user"}

              <div className="mt-6 pb-24">
                {orders &&
                  orders.map((order) => (
                    <div
                      className="w-full mt-6 bg-tablehighligh/50 grid grid-cols-5 text-sm gap-3 "
                      key={order.id}
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
                        {order.menu_date.split("T")[0]}
                      </h1>
                      <h1 className="py-4 font-medium break-words   ">
                        {order.created_at.split("T")[0]}
                      </h1>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className=" pt-[120px]"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default UserHistories;
