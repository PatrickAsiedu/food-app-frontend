import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDrink } from "../../redux/chefSlice";
import { displaySuccess } from "../../utils/util-functions";


const AddNewDrinkForm = () => {
  const dispatch = useDispatch();
  const [drink, setDrink] = useState('');
  const [addingDrink, setAddingDrink ] = useState(false);

  const onFormSubmit = async(e) =>{
    e.preventDefault()
    setAddingDrink(true)
    console.log(drink)
    if(drink){
      const response = await dispatch(addDrink({drinks: [drink]})).unwrap()
      if(response){
        displaySuccess('Food addded successfully')
      }
    }
    setAddingDrink(false)
  }


  return (
    <form
      onSubmit={onFormSubmit}
      className="w-full  box-outer-shadow mt-[5%] px-6 rounded-3xl 2xl:px-[86px] pt-9 lg:pt-16 text-base font-medium text-primary"
    >
      <label htmlFor="">Add Drink</label>
      <input
        className="w-full border-b h-12 outline-0  focus:border-links "
        type="text"
        value={drink}
        onChange={(e)=>setDrink(e.target.value)}
        required
      />
      <button className="mt-8 bg-primary text-white font-bold h-11 w-40 lg:w-[186px]  lg:h-[50px] rounded-lg  mb-12">
        {addingDrink ? 'Adding new drink...' :'Add to Drinks List'}
      </button>
    </form>
  );
};

export default AddNewDrinkForm;
