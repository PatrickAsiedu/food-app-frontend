import React, { useState } from "react";

import ChefSideBarNav from "../../components/ChefSideBarNav";
import DrinkTopNavBar from "../../components/DrinkTopNavBar";
import AddNewDrinkForm from "../../components/AddNewDrinkForm/AddNewDrinkForm";
import AllDrinksTable from "../../components/ViewAllDrinks/AllDrinksTable";
import EditDrinkModal from "../../components/EditDrinkModal/EditDrinkModal";
const ChefDrinks = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [showEditDrinkModal, setShowEditDrinkModal] = useState(false);

  return (
    <React.Fragment>
      <div className=" px-4  sm:flex sm:pr-0 lg:px-0 lg:flex h-screen">
        {showEditDrinkModal && (
          <EditDrinkModal onEditDrink={setShowEditDrinkModal}></EditDrinkModal>
        )}
        <ChefSideBarNav />

        <main className="lg:flex lg:flex-col sm:w-[90%] sm:ml-[10%]   lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] sm:px-8  2xl:px-[300px] text-base text-primary ">
          <DrinkTopNavBar setCurrentTab={setCurrentTab}></DrinkTopNavBar>
          {currentTab === 1 && <AddNewDrinkForm></AddNewDrinkForm>}
          {currentTab === 2 && (
            <AllDrinksTable
              onEditDrink={setShowEditDrinkModal}
            ></AllDrinksTable>
          )}

          <div className=" pt-[120px]"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default ChefDrinks;
