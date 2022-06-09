import React, { useState } from "react";
import FoodItem from "../../components/FoodItem/FoodItem";
import DrinkItem from "../../components/DrinkItem/DrinkItem";
import AdminSideBarNav from "../../components/AdminSideBarNav";
import { useDispatch, useSelector } from "react-redux";
import AddDateForm from "../../components/AddFoodForm/AddDateForm";
import CustomInput from "../../components/AddFoodForm/CustomInput";
import { addMenu } from "../../redux/adminSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AdminAddMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [selectedFoods, setSelectedFoods] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [menuDate, setMenuDate] = useState();
  const [chefName, setChefName] = useState(null)

  const foodList = useSelector((state) => state.admin.foodList);
  const drinkList = useSelector((state) => state.admin.drinkList);
  const chefList = useSelector((state) =>
    state.admin.allUsers.filter((user) => user.type === "chef")
  );

  console.log(chefList);
  console.log(chefList)

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

  const displayError = (errorMessage) => {
    Swal.fire({
      title: 'No way!',
      text: errorMessage,
      icon: 'error',
      confirmButtonText: 'Okay'
    })
  }

  const onFormSubmitHandler = async (e) => {
    e.preventDefault();
    const menu = {};
    menu.menu_date = menuDate;
    menu.foods_id = selectedFoods.map((food) => food.id);
    menu.drinks_id = selectedDrinks.map((drink) => drink.id);
    menu.chef_id = chefName;
    console.log(menu);

    if (!menu.menu_date) {
      return displayError("Please select a menu date");
    }

    if(chefName === null || chefName === 'no chef selected'){
      return displayError('Please select a chef')
    }

    if (menu.foods_id.length===0) {
      return displayError("You can't create a menu without foods..");
    }

    if (!menu.drinks_id) {
      return displayError("You are creating a menun without foods..");
    }
    

    const response = await dispatch(addMenu(menu)).unwrap();
    console.log(response);
    if (response.status === 400) {
      return displayError(response.errorMessage);
    }
    if (response.status === 201) {
      Swal.fire({
        title: 'Success',
        text: response.message,
        icon: 'success',
        confirmButtonText: 'Okay'
      }).then(result=>{
        // console.log(result)
        if(result.isConfirmed){
          navigate('/admin', {replace: true})
        }
      })
      // return alert(response.message);
    }

  };

  return (
    <React.Fragment>
      <div className="px-4  sm:flex sm:pr-0 lg:px-0 lg:flex h-screen ">
        <AdminSideBarNav />

        <main className=" lg:flex lg:flex-col sm:w-[90%] sm:ml-[10%]  lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] sm:px-8  lg:px-[90px] 2xl:px-[300px] text-base text-primary ">
          <div className="w-full  box-outer-shadow mt-[5%] px-6 rounded-3xl 2xl:px-[86px] pt-9 lg:pt-16 text-base font-medium text-primary pb-8">
            <AddDateForm setMenuDate={setMenuDate} />
            {/* this should be drop down rather with nmames of all chef */}
            <label>Select Chef</label>
            <select name="chefs" onChange={(e)=>setChefName(e.target.value)} className='w-full border-b h-12 outline-0 mb-8'>
              <option>no chef selected</option>
              {chefList.map(chef=>(
                <option key={chef.id} value={chef.name} id={chef.id}>{chef.name}</option>
              ))}
            </select>

            

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
          </div>

          <div className=" mt-12 w-full box-outer-shadow px-6 rounded-3xl lg:px-[86px] pt-9 lg:pt-16 text-base font-medium text-primary">
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

            <p>Chef: </p>{chefName}
            <div className="mt-8 pb-10 flex justify-center">
              
              <button
                onClick={onFormSubmitHandler}
                type="submit"
                className=" bg-primary h-16 w-[240px] text-white rounded-lg font-bold"
              >
                Add Menu
              </button>
            </div>
          </div>
          <div className=" pt-[120px]"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default AdminAddMenu;
