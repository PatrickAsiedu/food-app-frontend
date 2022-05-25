import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer :{
        user: userSlice,
        menu: menuSlice,
    }
});


export default store;