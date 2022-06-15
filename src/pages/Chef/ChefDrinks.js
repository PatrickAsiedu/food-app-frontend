import React, { useState } from "react";

import ChefSideBarNav from "../../components/ChefSideBarNav";
import DrinkTopNavBar from "../../components/DrinkTopNavBar";
import AddNewDrinkForm from "../../components/AddNewDrinkForm/AddNewDrinkForm";
import AllDrinksTable from "../../components/ViewAllDrinks/AllDrinksTable";
import EditDrinkModal from "../../components/EditDrinkModal/EditDrinkModal";
const ChefDrinks = () => {
  const [currentTab, setCurrentTab] = useState(2);
  const [showEditDrinkModal, setShowEditDrinkModal] = useState(false);
  const [editDrinkID, setEditDrinkID] = useState(null);
  return (
    <React.Fragment>
      <div className=" px-4  sm:flex sm:pr-0 lg:px-0 lg:flex h-screen">
        {showEditDrinkModal && (
          <EditDrinkModal onEditDrink={setShowEditDrinkModal} editDrinkID={editDrinkID}></EditDrinkModal>
        )}
        <ChefSideBarNav />

        <main className="lg:flex lg:flex-col sm:w-[90%] sm:ml-[10%]   lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] sm:px-8  2xl:px-[300px] text-base text-primary ">
          <DrinkTopNavBar setCurrentTab={setCurrentTab} text={['Add Drink', 'View All Drinks']} />
          {currentTab === 1 && <AddNewDrinkForm />}
          {currentTab === 2 && (
            <AllDrinksTable
              onEditDrink={setShowEditDrinkModal}
              setEditDrinkID={setEditDrinkID}
            />
          )}

          <div className=" pt-[120px]"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default ChefDrinks;
