import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../../redux/chefSlice";
import { displaySuccess } from "../../utils/util-functions";

const AddNewFoodForm = () => {
  const dispatch = useDispatch()

  const [food, setFood] = useState('')
  const [addingFood, setAddingFood] = useState(false)

  const onFormSubmit = async(e) =>{
    e.preventDefault()
    setAddingFood(true)
    console.log(food)
    if(food){
      const response = await dispatch(addFood({foods: [food]})).unwrap()
      if(response){
        displaySuccess('Food addded successfully')
      }
    }
    setAddingFood(false)
  }


  return (
    <form
      onSubmit={onFormSubmit}
      className="w-full  box-outer-shadow mt-[5%] px-6 rounded-3xl 2xl:px-[86px] pt-9 lg:pt-16 text-base font-medium text-primary"
    >
      <label htmlFor="">Add Food</label>
      <input
        className="w-full border-b h-12 outline-0  focus:border-links "
        type="text"
        value={food}
        onChange={(e)=>setFood(e.target.value)}
        required
      />
      <button type="submit" className="mt-8 bg-primary text-white font-bold h-11 w-40 lg:w-[186px]  lg:h-[50px] rounded-lg  mb-12">
        {addingFood ? 'Adding food...' :'Add to Food List'}
      </button>
    </form>
  );
};

export default AddNewFoodForm;
