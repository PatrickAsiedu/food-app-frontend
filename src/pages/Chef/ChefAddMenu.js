import React, { useState } from 'react'
import ChefSideBarNav from '../../components/ChefSideBarNav';

import AddDrinkForm from "../../components/AddDrinkForm/AddDrinkForm";
import AddFoodForm from "../../components/AddFoodForm/AddFoodForm";
import FoodItem from "../../components/FoodItem/FoodItem";
import DrinkItem from "../../components/DrinkItem/DrinkItem";
import { useSelector } from 'react-redux';

const ChefAddMenu = () => {
  const foodInitialState = {id: 60, name: 'Curried Rice'};
  const drinkInitialState = { id: 1, name: 'Sobolo'};

  const [selectedFoods, setSelectedFoods ] = useState([foodInitialState]);
  const [selectedDrinks, setSelectedDrinks] =useState([drinkInitialState]);

  const foodList = useSelector(state=>state.menu.foodList);
  console.log(foodList)

  const drinkList = useSelector(state=>state.menu.drinkList);


  const onClickDeleteSelectedFoodItem =(foodID) => {
    setSelectedFoods(selectedFoods.filter(food=> food.id !== foodID))
  }

  const onClickDeleteSelectedDrinkItem =(drinkID) => {
    setSelectedDrinks(selectedDrinks.filter(drink=> drink.id !== drinkID))
  }

  return (
    <React.Fragment>
      <div className=" lg:flex h-screen ">
        <ChefSideBarNav />

        <main className=" lg:flex flex-col lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] px-8  lg:px-[90px] 2xl:px-[300px] text-base text-primary ">
          <div className="w-full  box-outer-shadow mt-[5%] px-6 rounded-3xl 2xl:px-[86px] pt-9 lg:pt-16 text-base font-medium text-primary">
            <AddFoodForm />
            
            <AddDrinkForm />
          </div>

          <div className="mt-12 w-full box-outer-shadow h-screen px-6 rounded-3xl lg:px-[86px] pt-9 lg:pt-16 text-base font-medium text-primary">
            <h1 className="font-semibold text-2xl text-center">Menu</h1>

            <h1 className="mt-7 lg:mt-10 mb-4">Food</h1>
            <div className="grid grid-cols-1 gap-3">
              {/* message if not food is selected */}
              {selectedFoods.length===0 && "----No Food selected----"}

              {/* display selected  food items */}
              {selectedFoods.map(selectedFood=>(
                <FoodItem 
                  key={selectedFood.id}
                  foodName={selectedFood.name}
                  foodID={selectedFood.id}
                  onClickDelete={onClickDeleteSelectedFoodItem}
              />
              ))}  
            </div>

            <h1 className="mt-7 lg:mt-10 mb-4">Drink</h1>
            <div className="grid grid-cols-1 gap-3">
              {/* message if no drink is selected */}
              {selectedDrinks.length===0 && '----No Drink selected----'}

              {/* display selected drinks */}
              {selectedDrinks.map(selectedDrink=> (
                <DrinkItem 
                  key={selectedDrink.id}
                  drinkName={selectedDrink.name}
                  drinkID={selectedDrink.id}
                  onClickDelete={onClickDeleteSelectedDrinkItem}
                />
              ))}
              
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default ChefAddMenu