import React from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import UserSideBarNav from "../../components/UserSideBarNav";
import UserTitlebar from "../../components/Usertitle bar/Usertitlebar";
import { updateLunch } from "../../redux/userSlice";
import { formatDateToDateString } from "../../utils/util-functions";
import Swal from "sweetalert2";
import CustomRadioBox from "../../components/UI/CustomRadioBox";

const UserEditOrder = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const menu = { ...location.state };

  const [foodID, setFoodID] = useState(menu.user_order[0].food_id);
  const [drinkID, setDrinkID] = useState(menu.user_order[0].drink_id);
  const [comment, setComment] = useState(menu.user_order[0].comment);
  const [updatingOrder, setUpdatingOrder] = useState(false);
  const [error, setError] = useState("");

  const orderId = menu.user_order[0].id;

  // console.log(menu.user_order[0])

  if (!menu) {
    window.location.href = "/me";
  }

  const onFormSubmitHandler = async (e) => {
    e.preventDefault();
    setUpdatingOrder(true);

    const order = {
      order_id: orderId,
      food_id: foodID,
      drink_id: drinkID,
      comment: comment,
    };

    const response = await dispatch(updateLunch(order)).unwrap();
    console.log(response);
    if (response.status === 400) {
      setError(response.data.message);
      Swal.fire({
        title: "Error!",
        text: response.data.message,
        icon: "error",
        confirmButtonText: "Okay",
      }).then((result) => {
        // console.log(result)
        if (result.isConfirmed) {
          // window.location.href ='/me'
        }
      });
      // window.location.href ='/me'
    } else if (response.status === 200) {
      Swal.fire({
        title: "Order updated successfully!",
        text: `Your order has been updated successfully`,
        icon: "success",
        confirmButtonText: "Okay",
      }).then((result) => {
        // console.log(result)
        if (result.isConfirmed) {
          window.location.href = "/me";
        }
      });
    }

    setUpdatingOrder(false);
  };

  console.log(foodID);
  console.log(drinkID);

  return (
    <React.Fragment>
      {/* <AlreadyOrderedModal></AlreadyOrderedModal> */}

      <div className=" px-4  sm:flex sm:pr-0 lg:px-0 lg:flex h-screen ">
        <UserSideBarNav />

        <main className=" lg:flex lg:flex-col sm:w-[90%] sm:ml-[10%]  lg:px-0 lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] sm:px-8  ">
          <UserTitlebar title="Edit Your Order"></UserTitlebar>

          <form
            onSubmit={onFormSubmitHandler}
            className="text-primary font-medium text-base  flex flex-col  mt-8 lg:mt-12  pb-5  lg:w-[650px] box-outer-shadow rounded-3xl mx-auto px-5 lg:px-12"
          >
            <h1 className="  mt-10 lg:mt-14 text-center font-bold text-primary text-xl lg:text-2xl">
              {formatDateToDateString(menu.menu_date)}'s Lunch Menu
            </h1>

            <fieldset className="mt-[27px] ">
              <legend className="font-semibold">Choose Food</legend>
              {menu.foods.map((foods) => {
                return (
                  <CustomRadioBox
                    key={foods.food_id}
                    id={foods.food_id}
                    passfunc={setFoodID}
                    name={foods.food_name}
                    selected={foods.food_id === foodID}
                    fieldset={"food"}
                    value={foods.food_id}
                  >
                    {foods.food_name}
                  </CustomRadioBox>
                );
              })}

              {/* {menu.foods.map((food) => (
                <div
                  key={food.food_id}
                  className="relative  mt-[18px] flex  items-center  py-[18px]  rounded-lg pl-5 "
                >
                  <input
                    className="check_me peer hover:cursor-pointer appearance-none h-5 w-5 rounded-full border  "
                    type="radio"
                    key={food.food_id}
                    id={food.food_id}
                    name="radio buttons"
                    value={food.food_id}
                    defaultChecked={food.food_id === foodID && "checked"}
                    onChange={(e) => setFoodID(e.target.id)}
                    onClick={(e) => setFoodID(e.target.id)}
                  />
                  <label className="ml-[14px] " htmlFor="hey">
                    {food.food_name}
                  </label>
                </div>
              ))} */}

              {menu.drinks.length !== 0 && (
                <legend className="mt-6 font-semibold">Choose Drink</legend>
              )}
              {menu.drinks.map((drinks) => {
                return (
                  <CustomRadioBox
                    key={drinks.drink_id}
                    id={drinks.drink_id}
                    passfunc={setDrinkID}
                    name={drinks.drink_name}
                    selected={drinks.drink_id === drinkID}
                    fieldset={"drink"}
                    value={drinks.drink_id}
                  >
                    {drinks.drink_name}
                  </CustomRadioBox>
                );
              })}
            </fieldset>

            <label className="mt-10 font-semibold" htmlFor="">
              Comments
            </label>
            <textarea
              className="bg-primary/80 mt-[18px] rounded-lg h-[164px] text-white px-4 pt-4  text-sm  border-primary border-2 outline-white"
              name="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              cols="30"
              rows="7"
            />

            <p className="text-notification font-normal text-center mt-8 ">
              {error}
            </p>
            <div className="  mt-8 pb-10 flex justify-center">
              <button
                type="submit"
                className=" bg-primary h-16 w-[240px] text-white rounded-lg font-bold "
              >
                {updatingOrder ? "Updating Order" : "Save Order"}
              </button>
            </div>
          </form>

          <div className=" pt-[120px]"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default UserEditOrder;
