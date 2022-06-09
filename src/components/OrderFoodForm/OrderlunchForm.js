import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getMenu, orderLunch } from "../../redux/userSlice";
// import AlreadyOrderedModal from "../UI/Modals/AlreadyOrderedModal";
import Swal from "sweetalert2";

import {
  formatDateToDateAndTimeString,
  formatDateToDateString,
} from "../../utils/util-functions";

import RenderLoading from "../UI/RenderLoading";

const OrderLunchForm = (props) => {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState();
  const [food, setFood] = useState("");
  const [drink, setDrink] = useState("");
  const [comment, setComment] = useState("");

  const [error, setError] = useState(null);
  const [noMenuFoundDate, setNoMenuFoundDate] = useState();
  const [ordering, setOrdering] = useState(false);

  // async funtion to dispatch the get menu aciton
  

  useEffect(() => {
    const getMenuRequest = async (menuDate) => {
      const response = await dispatch(getMenu(menuDate)).unwrap();
      // console.log(response)
      if (response.status === 200) {
        setMenu(response.data);
      } else if (response.status === 401) {
        setError(response.errorMessage);
        const dd = new Date(response.date);
  
        setNoMenuFoundDate(dd.toDateString());
      }
    };
    
    if (props.menuDate) {
      getMenuRequest(props.menuDate);
    }
  }, [dispatch, props.menuDate]);

  // const RenderLoadingOrder = () => (
  //   <div className="text-primary font-medium text-base  flex flex-col  mt-8 lg:mt-12  pb-5  lg:w-[750px] box-outer-shadow rounded-3xl mx-auto px-5 lg:px-24 ">
  //     <h1 className=" mt-8 mb-8 lg:mt-20 text-center font-semibold text-primary text-xl">
  //       Loading ...
  //     </h1>
  //   </div>
  // );

  // if(props.menuDate===undefined)
  //   return (<RenderLoadingOrder />)
  console.log(menu);

  if (error) {
    return (
      <div className="text-primary font-medium text-base  flex flex-col  mt-8 lg:mt-12  pb-5  lg:w-[750px] box-outer-shadow rounded-3xl mx-auto px-5 lg:px-24 ">
        <h1 className=" mt-10 lg:mt-20 text-center font-semibold text-primary text-xl lg:text-2xl">
          {error.replace("specified date", noMenuFoundDate)}
        </h1>
      </div>
    );
  }

  const RenderOrderAlready = () => {
    console.log(menu.user_order);
    return (
      <div className="text-primary font-medium text-base  flex flex-col  mt-8 lg:mt-12  pb-5  lg:w-[750px] box-outer-shadow rounded-3xl mx-auto px-5 lg:px-24 ">
        <h1 className=" mt-8 mb-8 lg:mt-20 text-center font-semibold text-primary text-xl">
          Your {formatDateToDateString(menu.menu_date)} 's lunch order
        </h1>
        <h1>Food: {menu.user_order[0]?.food_name} </h1>
        <h1>Drink: {menu.user_order[0].drink_name}</h1>
        <h1>Comment: {menu.user_order[0].comment || "---"}</h1>
        <h1>
          Ordered at:{" "}
          {formatDateToDateAndTimeString(menu.user_order[0].created_at)}
        </h1>

        {/* TODO: LINK to edit order if time is allowable */}
        {(new Date(menu.user_order[0].expires_at).getTime() < Date.now()) ? 
        (<p className="mt-5 text-center">Order closed</p>)
        : 
        (<Link to="/me/editorder" state={menu} > <p className="mt-5 text-center">Click to edit this order</p> </Link>)
        }
        

      </div>
    );
  };

  const onFormSubmitHandler = async (e) => {
    e.preventDefault();
    setOrdering(true);
    const order = {};
    order.menu_id = menu.menu_id;
    order.food_id = food;
    order.comment = comment;
    order.drink_id = drink;

    if (order.menu_id && !order.food_id) {
      setOrdering(false);
      Swal.fire({
        title: 'Error',
        text: "Dude, select at least one food",
        icon: 'error',
        confirmButtonText: 'Okay'
      }).then(result=>{
        // console.log(result)
        if(result.isConfirmed){
        }
      })
    }

    console.log(order);
    const response = await dispatch(orderLunch(order)).unwrap();
    console.log(response);
    if (response.status === 400) {
      setOrdering(false);
      Swal.fire({
        title: 'Error',
        text: response.errorMessage,
        icon: 'error',
        confirmButtonText: 'Okay'
      }).then(result=>{
        // console.log(result)
        if(result.isConfirmed){
          window.location.href ='/me'
        }
      })
    } else if (response.status === 401) {
      setOrdering(false);
      Swal.fire({
        title: 'Error',
        text: response.errorMessage,
        icon: 'error',
        confirmButtonText: 'Okay'
      }).then(result=>{
        // console.log(result)
        if(result.isConfirmed){
          window.location.href ='/me'
        }
      })
    } else {
      setOrdering(false);
      Swal.fire({
        title: 'Successful',
        text: 'You Order have  placed successfully',
        icon: 'success',
        confirmButtonText: 'Okay'
      }).then(result=>{
        // console.log(result)
        if(result.isConfirmed){
          window.location.href ='/me'
        }
      })
    }
  };

  return (
    <React.Fragment>
      {/* {orderedAlreadyModal && <AlreadyOrderedModal /> } */}
      {menu ? (
        ((menu.user_order === undefined || menu.user_order.length === 0)) ? (
          <form
            onSubmit={onFormSubmitHandler}
            className={`${
              props.devicestatus
            }  ${"text-primary font-medium text-base  flex flex-col  mt-8 lg:mt-12 md:px-14    lg:w-[750px] box-outer-shadow rounded-3xl mx-auto px-5 lg:px-24 "}`}
          >
            <h1 className="  mt-10 lg:mt-14 text-center font-bold text-primary text-xl lg:text-2xl">
              {formatDateToDateString(props.menuDate)}'s Lunch Menu
            </h1>

            <fieldset className="mt-[27px] ">
              <legend className="font-semibold">Choose Food</legend>
              {menu.foods.map((food) => (
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
                    onClick={(e) => setFood(e.target.id)}
                  />
                  <label className="ml-[14px] " htmlFor="hey">
                    {food.food_name}
                  </label>
                </div>
              ))}

              <legend className="mt-6 font-semibold">Choose Drink</legend>
              {menu.drinks.map((drink) => (
                <div
                  key={drink.drink_id}
                  className="relative  mt-[18px] flex  items-center  py-[18px]  rounded-lg pl-5 "
                >
                  <input
                    className="check_me peer hover:cursor-pointer appearance-none h-5 w-5 rounded-full border  "
                    type="radio"
                    key={drink.drink_id}
                    id={drink.drink_id}
                    name="radio buttons drink"
                    onClick={(e) => setDrink(e.target.id)}
                  />
                  <label className="ml-[14px]  " htmlFor="hey">
                    {drink.drink_name}
                  </label>
                </div>
              ))}
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
            <div className="  mt-8 pb-10 flex justify-center">
              <button
                type="submit"
                className=" bg-primary h-16 w-[240px] text-white rounded-lg font-bold "
              >
                {ordering ? "Placing your order" : "Order lunch"}
              </button>
            </div>
          </form>
        ) : (
          <RenderOrderAlready />
        )
      ) : (
        <RenderLoading />
      )}
    </React.Fragment>
  );
};

export default OrderLunchForm;
