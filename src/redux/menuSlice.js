import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from '../network/api';

const initialState = {
    hasOrdered : false,
    foodList: [],
    drinkList: [],
    todayMenu: {}
};


export const getFoods = createAsyncThunk('menu/fetchAllFoods', async()=>{
    try {
        const response = await API.get('/food');
        return response.data.foods
    } catch (error) {
        console.log(error.response)
    }
});

export const getDrinks = createAsyncThunk('menu/fetchAllDrinks', async()=>{
    try {
        const response = await API.get('/drink');
        return response.data.drinks
    } catch (error) {
        console.log(error.response)
    }
});

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getFoods.fulfilled, (state, action) => {
            state.foodList = action.payload
        })
        builder.addCase(getDrinks.fulfilled, (state, action)=> {
            state.drinkList = action.payload
        })
    }

});


export default menuSlice.reducer;


