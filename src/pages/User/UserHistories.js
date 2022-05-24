import React from "react";
import { useSelector } from "react-redux";
import ProfilePic from "../../assets/unsplash_WNoLnJo7tS8.png";
import UserSideBarNav from "../../components/UserSideBarNav";

const UserHistories = () => {


  const orders = useSelector(state=>state.user.myOrders);
  console.log(orders)

  
  return (
    <React.Fragment>
      <div className=" lg:flex h-screen ">
      <UserSideBarNav />

        <main className="hidden lg:flex flex-col md:ml-[30%] 2xl:ml-[20%]  w-[70%]  2xl:w-[80%] ">
          <div className="relative mt-6 w-full h-16 ">
            <img className="absolute right-8" src={ProfilePic} alt="" />
          </div>

          <h3 className="text-center">User Order Histories</h3>

          <div className="w-full h-[400px] box-outer-shadow mt-12 rounded-3xl px-5 ">
            <div className="w-full pt-9 flex justify-evenly h-[72px] py-7  grid grid-cols-5">
              <h1>Food Choice</h1>
              <h1>Drink Choice</h1>
              <h1>Comments</h1>
              <h1>Menu Date</h1>
              <h1>Ordered on</h1>
            </div>
            {Object.keys(orders).length===0 && 'No orders found for user'}
            
            {orders.map(order=>(
              <div className="w-full mt-6 bg-primary/10  grid grid-cols-5 text-sm" key={order.id}>
              <h1>{order.food_name}</h1>
              <h1>{order.drink_name}</h1>
              <h1>{order.comment}</h1>
              <h1>{order.menu_date.split('T')[0]}</h1>
              <h1>{order.created_at.split('T')[0]}</h1>
            </div>
            ))}
           

          </div>
          
        </main>
      </div>
    </React.Fragment>
  );
};

export default UserHistories;
