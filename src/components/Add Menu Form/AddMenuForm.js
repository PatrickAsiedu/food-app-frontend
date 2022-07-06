import React, { useState } from "react";
import FoodItem from "../../components/FoodItem/FoodItem";
import DrinkItem from "../../components/DrinkItem/DrinkItem";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../../components/AddFoodForm/CustomInput";
import AddDateForm from "../../components/AddFoodForm/AddDateForm";
import { addMenu } from "../../redux/chefSlice";
// import AddFoodForm from "../../components/AddFoodForm/AddFoodForm";
import { displayError, displayErrorNoReload, displaySuccess } from "../../utils/util-functions";

const AddMenuForm = () => {
  const dispatch = useDispatch();
  // const foodInitialState = {id: 60, name: 'Curried Rice'};
  // const drinkInitialState = { id: 1, name: 'Sobolo'};

  const [selectedFoods, setSelectedFoods] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [menuDate, setMenuDate] = useState();

  const [isAddingMenu, setIsAddingMenu] = useState(false);
  const foodList = useSelector((state) => state.chef.foodList);
  const drinkList = useSelector((state) => state.chef.drinkList);

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
    setIsAddingMenu(true);
    const menu = {};
    menu.menu_date = menuDate;
    menu.foods_id = selectedFoods.map((food) => food.id);
    menu.drinks_id = selectedDrinks.map((drink) => drink.id);
    console.log(menu);

    if (!menu.menu_date) {
      setIsAddingMenu(false);
      return displayErrorNoReload("Please select a menu date");
    }

    if (!menu.foods_id) {
      setIsAddingMenu(false);
      return displayErrorNoReload("You cannot create a menu without foods.. Please select at least one food");
    }

    if (menu.foods_id.length === 0) {
      setIsAddingMenu(false);
      return displayErrorNoReload("You cannot create a menu without foods.. Please select at least one food");
    }

    const response = await dispatch(addMenu(menu)).unwrap();
    console.log(response);
    if (response.status === 400) {
      setIsAddingMenu(false);
      return displayErrorNoReload(response.errorMessage);
    }
    if (response.status === 201) {
      return displaySuccess(response.message);
    }
  };
  return (
    <React.Fragment>
      <div className="lg:grid lg:grid-cols-2 gap-4 mt-[5%]">
        <div className="w-full  box-outer-shadow  px-6 rounded-3xl 2xl:px-[86px] pt-9 lg:pt-16 text-base font-medium text-primary mb-5 pb-8">
          {/* <AddFoodForm /> */}
          {/* date picker */}
          <AddDateForm setMenuDate={setMenuDate} />

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
          <h1 className="font-semibold text-2xl text-center">Menu</h1>

          <h1 className="mt-7 lg:mt-10 mb-4">Food</h1>
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
              {isAddingMenu ? "Adding Menu..." : "Add Menu"}
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddMenuForm;
