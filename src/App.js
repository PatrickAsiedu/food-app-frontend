import React from "react";
import UserOrderFood from "./pages/User/UserOrderFood";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminAddMenu from "./pages/Admin/AdminAddMenu";

function App() {
  return (
    <React.Fragment>
      {/* <Routes>
       
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Signup" element={<Signup></Signup>}></Route>
      </Routes> */}
      {/* <UserOrderFood></UserOrderFood> */}
      {/* <AdminDashboard></AdminDashboard> */}
      <AdminAddMenu></AdminAddMenu>
    </React.Fragment>
  );
}

export default App;
