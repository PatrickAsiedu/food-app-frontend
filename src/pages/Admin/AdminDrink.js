import React, { useState } from "react";

import DrinkTopNavBar from "../../components/DrinkTopNavBar";
import AddNewDrinkForm from "../../components/AddNewDrinkForm/AddNewDrinkForm";
import AllDrinksTable from "../../components/ViewAllDrinks/AllDrinksTable";
import EditDrinkModal from "../../components/EditDrinkModal/EditDrinkModal";
import AdminSideBarNav from "../../components/AdminSideBarNav";
import ViewDrinksCard from "../../components/Cards/ViewDrinksCard";
import { useDispatch, useSelector } from "react-redux";
import { deleteDrink } from "../../redux/chefSlice";
import {
  displayError,
  displaySuccess,
  formatDateToDateString,
  sortByDate,
} from "../../utils/util-functions";

const AdminDrink = () => {
  const [currentTab, setCurrentTab] = useState(2);
  const [showEditDrinkModal, setShowEditDrinkModal] = useState(false);
  const [editDrinkID, setEditDrinkID] = useState(null);

  const chefdrinkList = useSelector((state) => state.chef.drinkList);
  const admindrinkList = useSelector((state) => state.admin.drinkList);
  const drinkList = chefdrinkList.length !== 0 ? sortByDate([...chefdrinkList]) : sortByDate([...admindrinkList]);

  console.log(drinkList);
  return (
    <React.Fragment>
      {showEditDrinkModal && (
        <EditDrinkModal
          onEditDrink={setShowEditDrinkModal}
          editDrinkID={editDrinkID}
        ></EditDrinkModal>
      )}
      <div className=" px-4  sm:flex sm:pr-0 lg:px-0 lg:flex h-screen">
        <AdminSideBarNav />

        <main className="lg:flex lg:flex-col sm:w-[90%] sm:ml-[10%]   lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] sm:px-8  2xl:px-[300px] text-base text-primary ">
          <DrinkTopNavBar
            setCurrentTab={setCurrentTab}
            text={["Add Drink", "View All Drinks"]}
          />
          {currentTab === 2 &&
            drinkList &&
            drinkList.map((drink) => (
              <ViewDrinksCard
                key={drink.id}
                id={drink.id}
                itemname={drink.name}
                date={formatDateToDateString(drink.created_at)}
                onEditDrink={setShowEditDrinkModal}
                setEditDrinkID={setEditDrinkID}
              ></ViewDrinksCard>
            ))}
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

export default AdminDrink;
