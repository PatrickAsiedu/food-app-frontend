import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMenu, orderLunch } from "../../redux/userSlice";

const OrderLunchForm = (props) => {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState();
  const [error, setError] = useState(null);
  const [noMenuFoundDate, setNoMenuFoundDate] = useState();

  const [order, setOrder] = useState({});

  // async funtion to dispatch the get menu aciton
  const getMenuRequest = async (menuDate) => {
    const response = await dispatch(getMenu(menuDate)).unwrap();
    // console.log(response);
    if (response.status === 200) {
      setMenu(response.data);
    } else if (response.status === 401) {
      setError(response.errorMessage);
      setNoMenuFoundDate(response.date);
    }
  };

  useEffect(() => {
    if (props.menuDate) {
      getMenuRequest(props.menuDate);
    }
  }, [props.menuDate]);

  const RenderLoadingOrder = () => (
    <div className="text-primary font-medium text-base  flex flex-col  mt-8 lg:mt-12  pb-5  lg:w-[750px] box-outer-shadow rounded-3xl mx-auto px-5 lg:px-24 ">
      <h1 className=" mt-8 mb-8 lg:mt-20 text-center font-semibold text-primary text-xl">
        Loading ...
      </h1>
    </div>
  );

  // if(props.menuDate===undefined)
  //   return (<RenderLoadingOrder />)

  // console.log(menu);
  // getMenuRequest(props.menuDate);

  if (error) {
    return (
      <div className="text-primary font-medium text-base  flex flex-col  mt-8 lg:mt-12  pb-5  lg:w-[750px] box-outer-shadow rounded-3xl mx-auto px-5 lg:px-24 ">
        <h1 className=" mt-10 lg:mt-20 text-center font-semibold text-primary text-xl lg:text-2xl">
          {error.replace("specified date", noMenuFoundDate.split("T")[0])}
        </h1>
      </div>
    );
  }

  const onFormSubmitHandler = async (e) => {
    e.preventDefault();
    setOrder({ ...order, menu_id: menu.menu_id });

    // TODO: check if at least food id and menu id exist
    if (!Object.keys(order).includes("menu_id" && "food_id")) {
      // We cannot order
      return alert("Select at least one food");
    }

    console.log(order);
    // const response = await dispatch(orderLunch(order)).unwrap();
    // if (response.status === 400) {
    //   alert(response.errorMessage);
    // } else {
    //   alert("order placed successfully");
    // }
  };

  return (
    <React.Fragment>
      {menu ? (
        <form
          onSubmit={onFormSubmitHandler}
          className={`${
            props.devicestatus
          }  ${"text-primary font-medium text-base  flex flex-col  mt-8 lg:mt-12   h-[750px]  lg:w-[750px] box-outer-shadow rounded-3xl mx-auto px-5 lg:px-24 "}`}
        >
          <h1 className="  mt-10 lg:mt-20 text-center font-semibold text-primary text-xl lg:text-2xl">
            Menu for {props.menuDate}
          </h1>

          <fieldset className="mt-[27px]">
            <legend className="">Choose Food</legend>

            {menu.foods.map((food) => (
              <div
                key={food.food_id}
                className="relative  mt-[18px] flex  items-center  py-[18px]  rounded-lg pl-5 "
              >
                <input
                  className=" peer hover:cursor-pointer appearance-none h-5 w-5 rounded-full border "
                  type="radio"
                  key={food.food_id}
                  id={food.food_id}
                  name={food.food_name}
                  onClick={(event) => {
                    console.log(event.target.id);
                    setOrder({ ...order, food_id: event.target.id });
                  }}
                />
                <label className="ml-[14px]">{food.food_name}</label>
              </div>
            ))}
          </fieldset>

          <label className="mt-10" htmlFor="">
            Comments
          </label>
          <textarea
            className="bg-primary mt-[18px] rounded-lg h-[164px] text-white px-4 pt-4  text-sm"
            name="comment"
            value={order.comment}
            onChange={(e) =>
              setOrder({
                ...order,
                comment: e.target.value,
                menu_id: menu.menu_id,
              })
            }
            cols="30"
            rows="7"
          />
          <div className="mt-8 pb-10 flex justify-center">
            <button
              type="submit"
              className=" bg-primary h-16 w-[240px] text-white rounded-lg font-bold"
            >
              Place Order
            </button>
          </div>
        </form>
      ) : (
        <RenderLoadingOrder />
      )}
    </React.Fragment>
  );
};

export default OrderLunchForm;
