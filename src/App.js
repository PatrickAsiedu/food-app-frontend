import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";

import UserOrderFood from "./pages/User/UserOrderFood";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminAddMenu from "./pages/Admin/AdminAddMenu";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route index exact element={<Login />}  />
          <Route  exact path="/register" element={<Signup />} />


          {/* <Route exact path="/me" element={<UserOrderFood /> } /> */}
          <Route exact path="/me/order" element={<UserOrderFood /> } />

          <Route exact path="/admin" element={<AdminDashboard /> } />
          <Route exact path="/admin/addmenu" element={<AdminAddMenu />} />
        </Routes>
      </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
