import React, { useState } from "react";
import FoodItem from "../../components/FoodItem/FoodItem";
import DrinkItem from "../../components/DrinkItem/DrinkItem";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../../components/AddFoodForm/CustomInput";
import AddDateForm from "../../components/AddFoodForm/AddDateForm";
import { editMenu } from "../../redux/chefSlice";
// import AddFoodForm from "../../components/AddFoodForm/AddFoodForm";
import {
  displayError,
  displaySuccess,
  formatDateToDateString,
} from "../../utils/util-functions";

const CheffEditMenuForm = ({ currentEditableMenuRef }) => {
  const dispatch = useDispatch();
  // const foodInitialState = {id: 60, name: 'Curried Rice'};
  // const drinkInitialState = { id: 1, name: 'Sobolo'};

  console.log("currentEditableMenuRef....: ", currentEditableMenuRef);

  const [selectedFoods, setSelectedFoods] = useState(
    currentEditableMenuRef.current.foods.map((food) => {
      return { id: food.food_id, name: food.food_name };
    })
  );
  const [selectedDrinks, setSelectedDrinks] = useState(
    currentEditableMenuRef.current.drinks.map((drink) => {
      return { id: drink.drink_id, name: drink.drink_name };
    })
  );
  const [menuDate, setMenuDate] = useState(
    currentEditableMenuRef.current.menu_date
  );

  const foodList = useSelector((state) => state.chef.foodList);
  const drinkList = useSelector((state) => state.chef.drinkList);

  const [isUpdattingMenu, setIsUpdattingMenu] = useState(false);

  // food here is an object with id and name
  const addToSelectedFoods = (food) => {
    setSelectedFoods([...selectedFoods, food]);
  };

  const addToSelectedDrinks = (drink) => {
    setSelectedDrinks([...selectedDrinks, drink]);
  };

  const onClickDeleteSelectedFoodItem = (foodID) => {
    setSelectedFoods(selectedFoods.filter((food) => food.id !== foodID));
  };

  const onClickDeleteSelectedDrinkItem = (drinkID) => {
    setSelectedDrinks(selectedDrinks.filter((drink) => drink.id !== drinkID));
  };
  const onFormSubmitHandler = async (e) => {
    e.preventDefault();
    setIsUpdattingMenu(true);
    const menu = {};
    menu.menu_date = menuDate;
    menu.foods_id = selectedFoods.map((food) => food.id);
    menu.drinks_id = selectedDrinks.map((drink) => drink.id);
    menu.menu_id = currentEditableMenuRef.current.menu_id;
    console.log(menu);

    if (!menu.menu_date) {
      return displayError("Please select a menu date");
    }

    if (!menu.foods_id) {
      return displayError("You are creating a menun without foods..");
    }

    if (!menu.drinks_id) {
      return displayError("You are creating a menun without foods..");
    }

    console.log("looging what is just updated: ", menu);

    const response = await dispatch(editMenu(menu)).unwrap();
    console.log(response);
    if (response.status === 400) {
      return displayError(response.errorMessage);
    }
    if (response.status === 200) {
      return displaySuccess(response.message);
    }
  };
  return (
    <React.Fragment>
      <div className="lg:grid lg:grid-cols-2 gap-4 mt-[5%]">
        <div className="w-full  box-outer-shadow  px-6 rounded-3xl 2xl:px-[86px] pt-9 lg:pt-16 text-base font-medium text-primary mb-5 pb-8">
          {/* <AddFoodForm /> */}
          {/* date picker */}
          <AddDateForm setMenuDate={setMenuDate} menuDate={menuDate} />

          <CustomInput
            label="Add Food"
            itemList={foodList}
            addToSelectedItems={addToSelectedFoods}
            styling={{ zIndex: 4 }}
          />

          <CustomInput
            label="Add Drink"
            itemList={drinkList}
            addToSelectedItems={addToSelectedDrinks}
            styling={{ zIndex: 1 }}
          />

          {/* <AddDrinkForm /> */}
        </div>

        <div className=" w-full box-outer-shadow  px-6 rounded-3xl  pt-9 lg:pt-16 text-base font-medium text-primary">
          <h1 className="font-semibold text-2xl text-center">Update Menu</h1>
          <h1 className="mt-5">
            Menu Date: {formatDateToDateString(menuDate)}
          </h1>

          <h1 className="mt-7 lg:mt-5 mb-4">Food</h1>
          <div className="grid grid-cols-1 gap-3">
            {/* message if not food is selected */}
            {selectedFoods.length === 0 && "----No Food selected----"}

            {/* display selected  food items */}
            {selectedFoods.map((selectedFood) => (
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
            {selectedDrinks.length === 0 && "----No Drink selected----"}

            {/* display selected drinks */}
            {selectedDrinks.map((selectedDrink) => (
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
              className=" bg-primary h-16 w-[240px] text-white rounded-lg font-bold"
            >
              {isUpdattingMenu ? "Updating Menu..." : "Update Menu"}
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CheffEditMenuForm;
