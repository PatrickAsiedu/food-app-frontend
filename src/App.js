import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";

import UserDashboard from "./pages/User/UserDashboard";
import UserOrderFood from "./pages/User/UserOrderFood";
import UserHistories from "./pages/User/UserHistories";

import ChefDashboard from "./pages/Chef/ChefDashboard";
import ChefAddMenu from "./pages/Chef/ChefAddMenu";
import ChefOrders from "./pages/Chef/ChefOrders";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminAddMenu from "./pages/Admin/AdminAddMenu";
import AdminOrders from "./pages/Admin/AdminOrders";
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
            path="/chef/addmenu"
            element={
              <ProtectedRoute Component={ChefAddMenu} Permission="chef" />
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
            path="/admin/addmenu"
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
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
