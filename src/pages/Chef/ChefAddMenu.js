import React, { useState } from 'react'
import ChefSideBarNav from '../../components/ChefSideBarNav';


import FoodItem from "../../components/FoodItem/FoodItem";
import DrinkItem from "../../components/DrinkItem/DrinkItem";
import { useSelector } from 'react-redux';
import CustomInput from '../../components/AddFoodForm/CustomInput';
import AddDateForm from '../../components/AddFoodForm/AddDateForm';

const ChefAddMenu = () => {
  // const foodInitialState = {id: 60, name: 'Curried Rice'};
  // const drinkInitialState = { id: 1, name: 'Sobolo'};

  const [selectedFoods, setSelectedFoods ] = useState([]);
  const [selectedDrinks, setSelectedDrinks] =useState([]);
  const [menuDate, setMenuDate] = useState();
 
  const foodList = useSelector(state=>state.menu.foodList);
  const drinkList = useSelector(state=>state.menu.drinkList);

// food here is an object with id and name
  const addToSelectedFoods = (food) => {
    setSelectedFoods([...selectedFoods, food])
  }

  const addToSelectedDrinks = (drink) => {
    setSelectedDrinks([...selectedDrinks, drink])
  }

  const onClickDeleteSelectedFoodItem =(foodID) => {
    setSelectedFoods(selectedFoods.filter(food=> food.id !== foodID))
  }

  const onClickDeleteSelectedDrinkItem =(drinkID) => {
    setSelectedDrinks(selectedDrinks.filter(drink=> drink.id !== drinkID))
  }
  const onFormSubmitHandler=(e)=>{
    e.preventDefault();
    console.log('making order')
  }

  return (
    <React.Fragment>
      <div className=" lg:flex h-screen mb-5">
        <ChefSideBarNav />

        <main className=" lg:flex flex-col lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] px-8  lg:px-[90px] 2xl:px-[300px] text-base text-primary ">
          <div className="w-full  box-outer-shadow mt-[5%] px-6 rounded-3xl 2xl:px-[86px] pt-9 lg:pt-16 text-base font-medium text-primary mb-5">
            {/* <AddFoodForm /> */}
            {/* date picker */}
            <AddDateForm setMenuDate={setMenuDate} />

            <CustomInput label="Add Food" itemList={foodList} addToSelectedItems={addToSelectedFoods} styling={{ zIndex: 4 }} />

            <CustomInput label="Add Drink" itemList={drinkList} addToSelectedItems={addToSelectedDrinks} styling={{ zIndex: 1 }} />
            
            {/* <AddDrinkForm /> */}
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
            <div className="grid grid-cols-1 gap-3 pb-5">
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


            <div className="mt-8 pb-10 flex justify-center">
              <button 
                onClick={onFormSubmitHandler}
                type="submit" 
                className=" bg-primary h-16 w-[240px] text-white rounded-lg font-bold">
                Add Menu
              </button>
            </div>

          </div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default ChefAddMenu