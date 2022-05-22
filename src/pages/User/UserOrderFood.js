import React from "react";
import { useDispatch } from "react-redux";
import ProfilePic from "../../assets/unsplash_WNoLnJo7tS8.png";
import OrderLunchForm from "../../components/OrderFoodForm/OrderlunchForm";
import UserSideBarNav from "../../components/UserSideBarNav";
import { getMenu } from "../../redux/userSlice";

const UserOrderFood = () => {
  const today = new Date();
  const queryDate = today.toISOString().split('T')[0];

  const dispatch = useDispatch()
  dispatch(getMenu(queryDate));


  
  return (
    <React.Fragment>
      <div className=" lg:flex h-screen ">
        <UserSideBarNav />

        <main className="hidden lg:flex flex-col md:ml-[30%] 2xl:ml-[20%]  w-[70%]  2xl:w-[80%] ">
          <div className="relative mt-6 w-full h-16 ">
            <img className="absolute right-8" src={ProfilePic} alt="" />
          </div>
          <OrderLunchForm devicestatus={"flex"} menuDate={today} />
        </main>
      </div>
    </React.Fragment>
  );
};

export default UserOrderFood;
