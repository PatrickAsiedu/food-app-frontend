import React, { useState } from "react";
import ChefSideBarNav from "../../components/ChefSideBarNav";
import FoodTopNavBar from "../../components/FoodTopNavBar";
import AddNewFoodForm from "../../components/AddNewFoodForm/AddNewFoodForm";
import AllFoodsTable from "../../components/ViewAllFoodsTable/AllFoodsTable";
import EditFoodModal from "../../components/EditFoodModal/EditFoodModal";
import ViewFoodsCard from "../../components/Cards/ViewFoodsCard";
import { useDispatch, useSelector } from "react-redux";
import { deleteFoodAdmin } from "../../redux/adminSlice";
import {
  displayError,
  displaySuccess,
  formatDateToDateString,
} from "../../utils/util-functions";

const ChefFood = () => {
  const [currentTab, setCurrentTab] = useState(2);
  const [showEditFoodModal, setShowEditFoodModal] = useState(false);
  const [editFoodID, setEditFoodID] = useState(null);

  const dispatch = useDispatch();

  // since we are using same componentt, we have to check who is logged in so we can ...
  const chefFoodList = useSelector((state) => state.chef.foodList);
  const adminFoodList = useSelector((state) => state.admin.foodList);
  const foodList = chefFoodList.length !== 0 ? chefFoodList : adminFoodList;

  return (
    <React.Fragment>
      {showEditFoodModal && (
        <EditFoodModal
          onEditFood={setShowEditFoodModal}
          editFoodID={editFoodID}
        />
      )}
      <div className=" px-4  sm:flex sm:pr-0 lg:px-0 lg:flex h-screen">
        <ChefSideBarNav />

        <main className="lg:flex lg:flex-col sm:w-[90%] sm:ml-[10%]   lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] sm:px-8  2xl:px-[300px] text-base text-primary ">
          <FoodTopNavBar
            setCurrentTab={setCurrentTab}
            text={["Add Food", "View All Foods"]}
          ></FoodTopNavBar>
          {currentTab === 2 &&
            foodList &&
            foodList.map((food) => (
              <ViewFoodsCard
                key={food.id}
                id={food.id}
                itemname={food.name}
                date={formatDateToDateString(food.created_at)}
                onEditFood={setShowEditFoodModal}
                setEditFoodID={setEditFoodID}
              ></ViewFoodsCard>
            ))}

          {currentTab === 1 && <AddNewFoodForm></AddNewFoodForm>}
          {currentTab === 2 && (
            <AllFoodsTable
              onEditFood={setShowEditFoodModal}
              setEditFoodID={setEditFoodID}
            />
          )}

          <div className=" pt-[120px]"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default ChefFood;
