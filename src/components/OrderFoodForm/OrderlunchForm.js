import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMenu, orderLunch } from "../../redux/userSlice";

const OrderLunchForm = (props) => {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState();
  const [food, setFood] = useState('');
  const [drink, setDrink] = useState('');
  const [comment, setComment] = useState('')

  const [error, setError] = useState(null);
  const [noMenuFoundDate, setNoMenuFoundDate] = useState();
  


  // async funtion to dispatch the get menu aciton
  const getMenuRequest = async(menuDate) => {
    const response = await dispatch(getMenu(menuDate)).unwrap()
    // console.log(response)
    if(response.status === 200){
      setMenu(response.data)
    }else if(response.status === 401){
      setError(response.errorMessage)
      setNoMenuFoundDate(response.date)
    }
  }

  useEffect(()=>{
    if(props.menuDate){
      getMenuRequest(props.menuDate)
    }
  }, [props.menuDate])


  const RenderLoadingOrder = () => (
    <div className="text-primary font-medium text-base  flex flex-col  mt-8 lg:mt-12  pb-5  lg:w-[750px] box-outer-shadow rounded-3xl mx-auto px-5 lg:px-24 ">
      <h1 className=" mt-8 mb-8 lg:mt-20 text-center font-semibold text-primary text-xl">Loading ...</h1>
    </div>
  )

  // if(props.menuDate===undefined) 
  //   return (<RenderLoadingOrder />)




  if(error){
    return (
      <div className="text-primary font-medium text-base  flex flex-col  mt-8 lg:mt-12  pb-5  lg:w-[750px] box-outer-shadow rounded-3xl mx-auto px-5 lg:px-24 ">
      <h1 className=" mt-10 lg:mt-20 text-center font-semibold text-primary text-xl lg:text-2xl">{error.replace('specified date', noMenuFoundDate.split('T')[0])}</h1>
      </div>
    )
  }


  const onFormSubmitHandler = async(e) => {
    e.preventDefault();
    const order = {}
    order.menu_id = menu.menu_id;
    order.food_id = food;
    order.comment =comment
    order.drink_id = drink
 

    if(order.menu_id && !order.food_id){
      return alert('Please select at least  one food (_^_)')
    }

    console.log(order)
    const response = await dispatch(orderLunch(order)).unwrap();
    console.log(response)
    if(response.status === 400){
      return alert(response.errorMessage)
    }
    else{
      alert('order placed successfully')
    }
   

  }


  

  

    return (
      <React.Fragment>
        {menu ? (<form
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
            {menu.foods.map(food=>(
              <div key={food.food_id} className="relative  mt-[18px] flex  items-center  py-[18px]  rounded-lg pl-5 ">
                <input
                  className="check_me peer hover:cursor-pointer appearance-none h-5 w-5 rounded-full border  "
                  type="radio"
                  key={food.food_id}
                  id={food.food_id}
                  name="radio buttons"
                  onClick={(e)=>setFood(e.target.id)}
                />
                <label className="ml-[14px]" htmlFor="hey">
                  {food.food_name}
                </label>
              </div>
            ))}
        
            <legend className="">Choose Drink</legend>
            {menu.drinks.map(drink=>(
              <div key={drink.drink_id} className="relative  mt-[18px] flex  items-center  py-[18px]  rounded-lg pl-5 ">
                <input
                  className="check_me peer hover:cursor-pointer appearance-none h-5 w-5 rounded-full border  "
                  type="radio"
                  key={drink.drink_id}
                  id={drink.drink_id}
                  name="radio buttons drink"
                  onClick={(e)=>setDrink(e.target.id)}
                />
                <label className="ml-[14px]" htmlFor="hey">
                  {drink.drink_name}
                </label>
              </div>
            ))}
          </fieldset>



          <label className="mt-10" htmlFor="">
            Comments
          </label>
          <textarea
            className="bg-primary mt-[18px] rounded-lg h-[164px] text-white px-4 pt-4  text-sm"
            name="comment"
            value={comment}
            onChange={(e)=>setComment(e.target.value)}
            cols="30"
            rows="7"
          />
          <div className="mt-8 pb-10 flex justify-center">
            <button type="submit" className=" bg-primary h-16 w-[240px] text-white rounded-lg font-bold">
              Place Order
            </button>
          </div>
        </form>):
         (<RenderLoadingOrder />)}
        
      </React.Fragment>
    )
  
};

export default OrderLunchForm;
