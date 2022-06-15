import React, { useState } from "react";
import ChefSideBarNav from "../../components/ChefSideBarNav";
import FoodTopNavBar from "../../components/FoodTopNavBar";
import AddNewFoodForm from "../../components/AddNewFoodForm/AddNewFoodForm";
import AllFoodsTable from "../../components/ViewAllFoodsTable/AllFoodsTable";
import EditFoodModal from "../../components/EditFoodModal/EditFoodModal";

const ChefFood = () => {
  const [currentTab, setCurrentTab] = useState(2);
  const [showEditFoodModal, setShowEditFoodModal] = useState(false);
  const [editFoodID, setEditFoodID] = useState(null)

  return (
    <React.Fragment>
      <div className=" px-4  sm:flex sm:pr-0 lg:px-0 lg:flex h-screen">
        {showEditFoodModal && (
          <EditFoodModal onEditFood={setShowEditFoodModal} editFoodID={editFoodID} />
        )}
        <ChefSideBarNav />

        <main className="lg:flex lg:flex-col sm:w-[90%] sm:ml-[10%]   lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] sm:px-8  2xl:px-[300px] text-base text-primary ">
          <FoodTopNavBar setCurrentTab={setCurrentTab} text={['Add Food', 'View All Foods']}></FoodTopNavBar>
          {currentTab === 1 && <AddNewFoodForm></AddNewFoodForm>}
          {currentTab === 2 && (
            <AllFoodsTable onEditFood={setShowEditFoodModal} setEditFoodID={setEditFoodID} />
          )}

          <div className=" pt-[120px]"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default ChefFood;
