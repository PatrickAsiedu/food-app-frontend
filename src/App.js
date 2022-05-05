import React from "react";
import UserOrderFood from "./pages/UserOrderFood";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      {/* <Routes>
       
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Signup" element={<Signup></Signup>}></Route>
      </Routes> */}
      <UserOrderFood></UserOrderFood>

      {/* <form>
        <div className="">
          <input
            className="mt-2 w-[100px] h-[40px] border"
            type="checkbox"
            id="hey"
            name="hey"
          />
          <label className="mt-5" htmlFor="hey">
            Choose Food
          </label>
        </div>
      </form> */}
    </React.Fragment>
  );
}

export default App;
