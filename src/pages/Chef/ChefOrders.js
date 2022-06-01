import React, {useState, useEffect} from "react";
import ChefSideBarNav from "../../components/ChefSideBarNav";
import DrinkCard from "../../components/Cards/DrinkCard";
import FoodCard from "../../components/Cards/FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { getMenu, getOrders } from "../../redux/chefSlice";

const ChefOrders = () => {
  const dispatch = useDispatch();
  const [orders, setOrders ] = useState();
  const [selectedDate, setSelectedDate] = useState('2022-05-31');
  const [error, setError] = useState();

  const [foodSummary, setFoodSummary] = useState()
  const [drinkSummary, setDrinkSummary] = useState()

  // const [totalFood, setTotalFood] = useState(0);
  // const [totalDrink, setTotalDrink] = useState(0);
  // const [totalComments, setTotalComments] = useState(0);



 useEffect(()=>{
   const getSelectedOrder = async()=>{
    const response =  await dispatch(getOrders(selectedDate)).unwrap();
    console.log(response)   
    if(response.status===200){
      setOrders(response.data)
      const getMenuRequest = await dispatch(getMenu(selectedDate)).unwrap();
      console.log(getMenuRequest.data)
      // now get the total order of each food
      const tempFoods = getMenuRequest.data.foods.map(menufood=>{
        const count = response.data.filter(orderfood=>orderfood.food_id===menufood.food_id).length;
        return {"count":count, ...menufood}
      })
      console.log(tempFoods)
      
      setFoodSummary(tempFoods)

      const tempDrinks = getMenuRequest.data?.drinks.map(menuDrink=>{
        const count = response.data.filter(orderDrink=>orderDrink.drink_id===menuDrink.drink_id).length;
        return {"count":count, ...menuDrink}
      })
      console.log(tempDrinks)
      
      setDrinkSummary(tempDrinks)



      // get all food id and drink id

    } else if(response.status ===400){
      setError(response.errorMessage)
    }

   }
   getSelectedOrder();
 }, [selectedDate])



console.log(foodSummary)
console.log(drinkSummary)

  const onDateChange =(e) => {
    setSelectedDate(e.target.value)
  }


  return (
    <React.Fragment>
      <div className=" lg:flex h-screen ">
        <ChefSideBarNav />

        <main className=" lg:flex flex-col lg:ml-[30%] 2xl:ml-[20%]  w-[70%]  2xl:w-[80%] px-8  lg:px-[90px] text-base text-primary  ">
          <h1 className=" ml-3 mt-[40px] font-semibold mb-3">Foods</h1>
          {/* <h1 className="text-primary font-bold text-base text-right">Date: {today.toDateString()}</h1> */}
          <div className="text-right"> 
            <form>
              <label className="text-primary font-bold text-base">Select Date: </label>
              <input
                type='date'
                value={selectedDate}
                onChange={onDateChange}
              />
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-9">
            {foodSummary && foodSummary.map(food=>(
              <FoodCard key={food.food_id} foodName={food.food_name} total={food.count} />
            ))}
            
          </div>
          <h1 className=" ml-3 mt-[50px] font-semibold mb-3">Drinks</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-9 ">
            {drinkSummary && drinkSummary.map(drink=>(
              <DrinkCard key={drink.drink_id}  drinkName={drink.drink_name}  total={drink.count}/>
            ))}
          </div>

          <div className="w-full  box-outer-shadow mt-12 rounded-3xl px-9 h-[400px] ">
            <div className="w-full pt-9  h-[72px] py-7  grid grid-cols-5  ">
              <h1>Name</h1>
              <h1>Food choice</h1>
              <h1>Drink Choice</h1>
              <h1>Comments</h1>
              <h1>Ordered on</h1>
            </div>
            {orders && (orders.map(order=>(
              <div key={order.id} className="w-full mt-6 bg-primary/10  grid grid-cols-5 text-sm ">
              <h1 className="">{order.name}</h1>
              <h1>{order.food_name}</h1>
              <h1>{order.drink_name}</h1>
              <h1>{order.comment}</h1>
              <h1>{order.created_at.split('T')[0]}</h1>
            </div>
            )))}
            {/* TODO, come back to fix this */}
            {error && <p>No others found</p>}
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default ChefOrders;
