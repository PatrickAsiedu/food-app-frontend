import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editDrink } from "../../redux/chefSlice";
import { displayError, displaySuccess } from "../../utils/util-functions";

const EditDrinkModal = ({ onEditDrink, editDrinkID }) => {
  const dispatch = useDispatch();
  const drinkChef = useSelector((state) =>
    state.chef.drinkList.find((drink) => drink.id === editDrinkID)
  );
  const drinkAdmin = useSelector((state) =>
    state.admin.drinkList.find((drink) => drink.id === editDrinkID)
  );
  const userType = useSelector((state) => state.user.user.type);
  console.log(userType);

  const drink = userType === "chef" ? drinkChef : drinkAdmin;

  console.log(drink);

  const [name, setName] = useState(drink.name);
  const [isEditting, setIsEditting] = useState(false);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setIsEditting(true);
    if (name) {
      const response = await dispatch(
        editDrink({
          drink_name: name,
          drink_id: editDrinkID,
        })
      ).unwrap();

      if (response.status === 200) {
        displaySuccess("Drink updated successfully");
      } else {
        displayError("Unable to update drink, please try again later");
      }
    }
    setIsEditting(false);
  };

  return (
    <React.Fragment>
      <div
        className="fixed w-full h-screen bg-black/50 z-10"
        // onClick={() => onEditDrink(false)}
      >
        <div
          className="relative top-[10%] left-[5%] w-[90%] lg:top-[12%]  lg:left-[20%] xl:left-[25%] bg-white z-20  sm:left-[15%] sm:w-[70%] lg:w-[60%] 
      xl:w-[50%] 2xl:left-[30%] 2xl:w-[40%] box-outer-shadow px-6 lg:px-12 sm:px-12 rounded-3xl  text-primary"
        >
          <button
            className="mt-8 float-right"
            onClick={() => onEditDrink(false)}
          >
            <svg
              className="fill-primary"
              width="20"
              height="20"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.40994 6.99994L12.7099 2.70994C12.8982 2.52164 13.004 2.26624 13.004 1.99994C13.004 1.73364 12.8982 1.47825 12.7099 1.28994C12.5216 1.10164 12.2662 0.99585 11.9999 0.99585C11.7336 0.99585 11.4782 1.10164 11.2899 1.28994L6.99994 5.58994L2.70994 1.28994C2.52164 1.10164 2.26624 0.99585 1.99994 0.99585C1.73364 0.99585 1.47824 1.10164 1.28994 1.28994C1.10164 1.47825 0.995847 1.73364 0.995847 1.99994C0.995847 2.26624 1.10164 2.52164 1.28994 2.70994L5.58994 6.99994L1.28994 11.2899C1.19621 11.3829 1.12182 11.4935 1.07105 11.6154C1.02028 11.7372 0.994141 11.8679 0.994141 11.9999C0.994141 12.132 1.02028 12.2627 1.07105 12.3845C1.12182 12.5064 1.19621 12.617 1.28994 12.7099C1.3829 12.8037 1.4935 12.8781 1.61536 12.9288C1.73722 12.9796 1.86793 13.0057 1.99994 13.0057C2.13195 13.0057 2.26266 12.9796 2.38452 12.9288C2.50638 12.8781 2.61698 12.8037 2.70994 12.7099L6.99994 8.40994L11.2899 12.7099C11.3829 12.8037 11.4935 12.8781 11.6154 12.9288C11.7372 12.9796 11.8679 13.0057 11.9999 13.0057C12.132 13.0057 12.2627 12.9796 12.3845 12.9288C12.5064 12.8781 12.617 12.8037 12.7099 12.7099C12.8037 12.617 12.8781 12.5064 12.9288 12.3845C12.9796 12.2627 13.0057 12.132 13.0057 11.9999C13.0057 11.8679 12.9796 11.7372 12.9288 11.6154C12.8781 11.4935 12.8037 11.3829 12.7099 11.2899L8.40994 6.99994Z" />
            </svg>
          </button>
          <form onSubmit={onFormSubmit}>
            <h1 className="pt-10 font-semibold text-xl text-center mb-8">
              Edit Drink
            </h1>
            <label className=" text-sm font-medium" htmlFor="">
              Drink Name
            </label>
            <input
              type="text"
              className="w-full border mt-4 mb-[21px] h-[61px] pl-6 rounded-lg  outline-none"
              readOnly
              placeholder={drink.name}
            />

            <label className=" text-sm font-medium" htmlFor="">
              New Drink
            </label>
            <input
              type="text"
              className="w-full border mt-4 mb-[21px] h-[61px] pl-6 rounded-lg  outline-links"
              placeholder="Enter New Drink Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-primary h-[63px] w-[238px] mt-4 mb-12 text-white font-bold rounded-lg "
              >
                {isEditting ? "Updating Drink..." : "Update Drink"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditDrinkModal;
