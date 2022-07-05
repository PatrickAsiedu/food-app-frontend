import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ErrorPage from "./pages/ErrorPage";

import UserDashboard from "./pages/User/UserDashboard";
import UserOrderFood from "./pages/User/UserOrderFood";
import UserHistories from "./pages/User/UserHistories";
import UserEditOrder from "./pages/User/UserEditOrder";

import ChefDashboard from "./pages/Chef/ChefDashboard";
import ChefMenu from "./pages/Chef/ChefMenu";
import ChefOrders from "./pages/Chef/ChefOrders";
import ChefFood from "./pages/Chef/ChefFood";
import ChefDrinks from "./pages/Chef/ChefDrinks";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminAddMenu from "./pages/Admin/AdminAddMenu";
import AdminOrders from "./pages/Admin/AdminOrders";
import AdminFood from "./pages/Admin/AdminFood";
import AdminDrink from "./pages/Admin/AdminDrink";
// import AdminAddUser from "./pages/Admin/AdminAddUser";
// import AdminSignupApproval from "./pages/Admin/AdminSignupApproval";
import AdminUserManagement from "./pages/Admin/AdminUserManagement";

import ProtectedRoute from "./components/ProtectedRoute";

import store from "./redux/store";
import { setCurrentUser } from "./redux/userSlice";
import jwtDecode from "jwt-decode";
import { getDrinks, getFoods } from "./redux/chefSlice.js";
import { getAllUsers, getDrinksAdmin, getFoodsAdmin } from "./redux/adminSlice";

// check if user is already logged in, and add it to the state
const token = localStorage.getItem("user_token");
if (token) {
  store.dispatch(setCurrentUser(token));
  const userType = jwtDecode(token).type;
  console.log("user logged in with type: ", userType);
  // user logged in, we check the type and route to the appropriate page
  // if(userType==='user'){
  //   window.location.href='/me';
  // }  else if(userType === 'chef'){
  //   window.location.href='/chef';
  // }else if(userType === 'admin'){
  //   window.location.href ='/admin'
  // }

  // /if user type is chef of admin ===> get all foods
  if (userType === "chef") {
    store.dispatch(getFoods());
    store.dispatch(getDrinks());
    // store.dispatch(getOrders());
  }
  if (userType === "user") {
    // store.dispatch(getCurrentMenu());
    // store.dispatch(getMenu());
    // store.dispatch(getMyOrders())
  }
  if (userType === "admin") {
    // only dispatch acitons according to admin logic
    store.dispatch(getFoodsAdmin());
    store.dispatch(getDrinksAdmin());
    store.dispatch(getAllUsers());
  }
}

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          {/* <Route index exact element={<ErrorPage />} /> */}
          <Route index exact element={<Login />} />
          <Route exact path="/register" element={<Signup />} />
          <Route exact path="/resetpassword" element={<ResetPassword />} />

          {/* user routes */}
          <Route
            exact
            path="/me"
            element={
              <ProtectedRoute Component={UserDashboard} Permission="user" />
            }
          />
          <Route
            exact
            path="/me/order"
            element={
              <ProtectedRoute Component={UserOrderFood} Permission="user" />
            }
          />

          <Route
            exact
            path="/me/editorder"
            element={
              <ProtectedRoute Component={UserEditOrder} Permission="user" />
            }
          />
          <Route
            exact
            path="/me/history"
            element={
              <ProtectedRoute Component={UserHistories} Permission="user" />
            }
          />
          {/* <Route exact path="/me" element={<UserOrderFood /> } /> */}

          {/* chef routes */}
          <Route
            exact
            path="/chef"
            element={
              <ProtectedRoute Component={ChefDashboard} Permission="chef" />
            }
          />
          <Route
            exact
            path="/chef/menu"
            element={<ProtectedRoute Component={ChefMenu} Permission="chef" />}
          />
          <Route
            exact
            path="/chef/food"
            element={<ProtectedRoute Component={ChefFood} Permission="chef" />}
          />
          <Route
            exact
            path="/chef/drinks"
            element={
              <ProtectedRoute Component={ChefDrinks} Permission="chef" />
            }
          />
          <Route
            exact
            path="/chef/orders"
            element={
              <ProtectedRoute Component={ChefOrders} Permission="chef" />
            }
          />

          {/* admin routes */}
          <Route
            exact
            path="/admin"
            element={
              <ProtectedRoute Component={AdminDashboard} Permission="admin" />
            }
          />

          <Route
            exact
            path="/admin/food"
            element={
              <ProtectedRoute Component={AdminFood} Permission="admin" />
            }
          />

          <Route
            exact
            path="/admin/drink"
            element={
              <ProtectedRoute Component={AdminDrink} Permission="admin" />
            }
          />

          <Route
            exact
            path="/admin/menu"
            element={
              <ProtectedRoute Component={AdminAddMenu} Permission="admin" />
            }
          />
          <Route
            exact
            path="/admin/orders"
            element={
              <ProtectedRoute Component={AdminOrders} Permission="admin" />
            }
          />
          <Route
            exact
            path="/admin/usermanagement"
            element={
              <ProtectedRoute
                Component={AdminUserManagement}
                Permission="admin"
              />
            }
          />

          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
