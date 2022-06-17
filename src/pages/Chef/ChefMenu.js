import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteMenu, getAllMenu } from "../../redux/chefSlice";
import {
  displayError,
  displaySuccess,
  formatDateToDateString,
  sortByMenuDate,
} from "../../utils/util-functions";
import ChefSideBarNav from "../../components/ChefSideBarNav";

import ChefMenuTopNavBar from "../../components/ChefMenuTopNavBar";
import AddMenuForm from "../../components/Add Menu Form/AddMenuForm";
import AllMenuTable from "../../components/AllMenusTable/AllMenuTable";
import CheffEditMenuForm from "../../components/CheffEditMenuForm/CheffEditMenuForm";
import ViewMenusCard from "../../components/Cards/ViewMenusCard";

const ChefAddMenu = () => {
  const dispatch = useDispatch();
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    const getallmenu = async () => {
      const response = await dispatch(getAllMenu()).unwrap();
      // console.log(response)
      setMenus(sortByMenuDate(response.data));
    };

    getallmenu();
  }, []);

  const [currentTab, setCurrentTab] = useState(2);
  const currentEditableMenuRef = useRef();

  return (
    <React.Fragment>
      <div className=" px-4  sm:flex sm:pr-0 lg:px-0 lg:flex h-screen">
        <ChefSideBarNav />

        <main className="lg:flex lg:flex-col sm:w-[90%] sm:ml-[10%]   lg:ml-[30%] 2xl:ml-[20%]  lg:w-[70%]  2xl:w-[80%] sm:px-8  2xl:px-[300px] text-base text-primary ">
          <ChefMenuTopNavBar setCurrentTab={setCurrentTab}></ChefMenuTopNavBar>
          {currentTab === 2 &&
            menus &&
            menus.map((menu) => (
              <ViewMenusCard
                key={menu.menu_id}
                id={menu.menu_id}
                menu={menu}
                foods={menu.foods}
                drinks={menu.drinks}
                date={formatDateToDateString(menu.menu_date)}
                setCurrentTab={setCurrentTab}
                currentEditableMenuRef={currentEditableMenuRef}
              ></ViewMenusCard>
            ))}
          {currentTab === 1 && <AddMenuForm></AddMenuForm>}
          {currentTab === 2 && (
            <AllMenuTable
              setCurrentTab={setCurrentTab}
              currentEditableMenuRef={currentEditableMenuRef}
            />
          )}
          {currentTab === 3 && (
            <CheffEditMenuForm
              currentEditableMenuRef={currentEditableMenuRef}
            />
          )}

          <div className=" pt-[120px]"></div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default ChefAddMenu;
