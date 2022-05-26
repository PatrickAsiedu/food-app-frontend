import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./adminSlice.js";
import chefSlice from "./chefSlice.js";
import userSlice from "./userSlice";

const store = configureStore({
    reducer :{
        user: userSlice,
        chef: chefSlice,
        admin: adminSlice
    }
});


export default store;