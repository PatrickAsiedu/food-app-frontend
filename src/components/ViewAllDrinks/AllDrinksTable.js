import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDrink } from "../../redux/chefSlice";
import {
  displayError,
  displaySuccess,
  formatDateToDateString,
  sortByDate,
} from "../../utils/util-functions";

const AllDrinksTable = ({ onEditDrink, setEditDrinkID }) => {
  const dispatch = useDispatch();

  // since we are using same componentt, we have to check who is logged in so we can ...
  const chefdrinkList = useSelector((state) => state.chef.drinkList);
  const admindrinkList = useSelector((state) => state.admin.drinkList);
  // const drinkList = chefdrinkList.length !== 0 ? chefdrinkList : admindrinkList;
  const drinkList = chefdrinkList.length !== 0 ? sortByDate([...chefdrinkList]) : sortByDate([...admindrinkList]);
  console.log(drinkList);

  const deleteDrinkWithID = async (id) => {
    console.log("deleting.. ", id);
    const response = await dispatch(deleteDrink({ drink_id: id })).unwrap();

    if (response.status === 200) {
      displaySuccess("Drink deleted successfully");
    } else {
      displayError("Unable to delete drink, please try again");
    }
  };

  const editDrinkFunc = (id) => {
    onEditDrink(true);
    setEditDrinkID(id);
  };

  return (
    <div className="hidden sm:flex sm:flex-col w-full  box-outer-shadow mt-12 rounded-3xl px-9 ">
      <div className="w-full pt-9  h-[72px] py-7  grid grid-cols-3 gap-3 mb-6">
        <h1 className="font-semibold pl-3">Drinks</h1>
        <h1 className="font-semibold ">Date Addded</h1>
        <h1 className="font-semibold mx-auto">Edit</h1>
      </div>

      {drinkList &&
        drinkList.map((drink) => (
          <div
            key={drink.id}
            className="w-full  bg-tablehighligh/50 grid grid-cols-3 text-sm gap-3 mb-6"
          >
            <h1 className="py-4 font-medium break-words pl-3">{drink.name}</h1>
            <h1 className="py-4 font-medium break-words ">
              {formatDateToDateString(drink.created_at)}
            </h1>

            <div className="mx-auto flex justify-center">
              <button
                className=""
                onClick={() => {
                  editDrinkFunc(drink.id);
                }}
              >
                <svg
                  className="fill-checkbox "
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M28 30H6V8H19.22L21.22 6H6C5.46957 6 4.96086 6.21071 4.58579 6.58579C4.21071 6.96086 4 7.46957 4 8V30C4 30.5304 4.21071 31.0391 4.58579 31.4142C4.96086 31.7893 5.46957 32 6 32H28C28.5304 32 29.0391 31.7893 29.4142 31.4142C29.7893 31.0391 30 30.5304 30 30V15L28 17V30Z" />
                  <path d="M33.53 5.84019L30.16 2.47019C30.0104 2.32022 29.8327 2.20123 29.6371 2.12005C29.4415 2.03886 29.2318 1.99707 29.02 1.99707C28.8082 1.99707 28.5985 2.03886 28.4028 2.12005C28.2072 2.20123 28.0295 2.32022 27.88 2.47019L14.17 16.2602L13.06 21.0702C13.0127 21.3033 13.0177 21.5441 13.0745 21.7751C13.1314 22.0061 13.2388 22.2216 13.3889 22.4062C13.539 22.5907 13.7282 22.7397 13.9428 22.8424C14.1574 22.9452 14.3921 22.999 14.63 23.0002C14.7529 23.0137 14.877 23.0137 15 23.0002L19.85 21.9302L33.53 8.12019C33.68 7.97063 33.7989 7.79295 33.8801 7.59733C33.9613 7.40171 34.0031 7.19199 34.0031 6.98019C34.0031 6.76839 33.9613 6.55867 33.8801 6.36305C33.7989 6.16743 33.68 5.98975 33.53 5.84019V5.84019ZM18.81 20.0802L15.15 20.8902L16 17.2602L26.32 6.87019L29.14 9.69019L18.81 20.0802ZM30.27 8.56019L27.45 5.74019L29 4.16019L31.84 7.00019L30.27 8.56019Z" />
                </svg>
              </button>
              <button
                className="ml-12"
                onClick={() => deleteDrinkWithID(drink.id)}
              >
                <svg
                  className="fill-red-500"
                  width="27"
                  height="27"
                  viewBox="0 0 15 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.00213 7.20795e-05C5.90293 -0.00133488 5.80444 0.0178683 5.7124 0.0565665C5.62035 0.0952648 5.53658 0.152687 5.46595 0.225498C5.39532 0.298309 5.33923 0.385058 5.30095 0.480708C5.26267 0.576357 5.24296 0.679001 5.24296 0.782678H0.7596C0.660358 0.781211 0.561826 0.80037 0.469731 0.839042C0.377636 0.877713 0.293814 0.935126 0.223138 1.00794C0.152461 1.08076 0.0963388 1.16753 0.0580326 1.26321C0.0197264 1.35889 0 1.46157 0 1.56528C0 1.669 0.0197264 1.77168 0.0580326 1.86736C0.0963388 1.96304 0.152461 2.04981 0.223138 2.12262C0.293814 2.19544 0.377636 2.25285 0.469731 2.29152C0.561826 2.3302 0.660358 2.34936 0.7596 2.34789H14.2404C14.3396 2.34936 14.4382 2.3302 14.5303 2.29152C14.6224 2.25285 14.7062 2.19544 14.7769 2.12262C14.8475 2.04981 14.9037 1.96304 14.942 1.86736C14.9803 1.77168 15 1.669 15 1.56528C15 1.46157 14.9803 1.35889 14.942 1.26321C14.9037 1.16753 14.8475 1.08076 14.7769 1.00794C14.7062 0.935126 14.6224 0.877713 14.5303 0.839042C14.4382 0.80037 14.3396 0.781211 14.2404 0.782678H9.75704C9.75704 0.679001 9.73733 0.576357 9.69905 0.480708C9.66077 0.385058 9.60468 0.298309 9.53405 0.225498C9.46342 0.152687 9.37965 0.0952648 9.2876 0.0565665C9.19556 0.0178683 9.09707 -0.00133488 8.99787 7.20795e-05H6.00213ZM0.7596 3.9131V16.4348C0.7596 17.2996 1.4299 18 2.25747 18H12.7425C13.5701 18 14.2404 17.2996 14.2404 16.4348V3.9131H0.7596Z"
                    fill=""
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AllDrinksTable;
