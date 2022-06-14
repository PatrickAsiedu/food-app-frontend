import React, { useState } from "react";
import ChefSideBarNav from "../../components/ChefSideBarNav";
import FoodTopNavBar from "../../components/FoodTopNavBar";
import AddNewFoodForm from "../../components/AddNewFoodForm/AddNewFoodForm";
import AllFoodsTable from "../../components/ViewAllFoodsTable/AllFoodsTable";
import EditFoodModal from "../../components/EditFoodModal/EditFoodModal";

const ChefFood = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [showEditFoodModal, setShowEditFoodModal] = useState(false);

  return (
    <React.Fragment>
      <div className=" px-4  sm:flex sm:pr-0 lg:px-0 lg:flex h-screen">
        {showEditFoodModal && (
          <EditFoodModal onEditFood={setShowEditFoodModal}></EditFoodModal>
        )}
        <ChefSideBarNav />

        <main className="lg:flex lg:flex-col sm:w-[90%] sm:ml-[10%]   lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] sm:px-8  2xl:px-[300px] text-base text-primary ">
          <FoodTopNavBar setCurrentTab={setCurrentTab}></FoodTopNavBar>
          {currentTab === 1 && <AddNewFoodForm></AddNewFoodForm>}
          {currentTab === 2 && (
            <AllFoodsTable onEditFood={setShowEditFoodModal}></AllFoodsTable>
          )}

          <div className=" pt-[120px]"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default ChefFood;
