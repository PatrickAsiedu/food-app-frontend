import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from '../network/api';


const initialState = {
    orders: {},
    foodList: [],
    drinkList: [],
    allOrders: [],
    allMenus: [],

}

export const getFoods = createAsyncThunk('chef/fetchAllFoods', async()=>{
    try {
        const response = await API.get('/food');
        return response.data.foods
    } catch (error) {
        console.log(error.response)
    }
});

export const getDrinks = createAsyncThunk('chef/fetchAllDrinks', async()=>{
    try {
        const response = await API.get('/drink');
        return response.data.drinks
    } catch (error) {
        console.log(error.response)
    }
});

export const getAllOrders = createAsyncThunk('chef/getAllOrder', async()=>{
    try {
        const response = await API.get('/menu/all');
        return response
    } catch (error) {
        return error.response
    }
})

export const getOrders = createAsyncThunk('chef/getOders', async(orderDate)=>{
    try {
        const response = await API.get(`/order/daily?menu_date=${orderDate}`);
        console.log(response)
    } catch (error) {
        // console.log(error.response);
        const data = {status:error.response.status, errorMessage:error.response.data.message || error.response.data?.error[0].message}
        return data
    }
});


export const addMenu = createAsyncThunk('chef/add/Menu', async(menuData)=>{
    try {
        const response = await API.post('/menu', menuData);
        console.log(response)
        return {status: response.status, message: response.data.message}
    } catch (error) {
        console.log(error.response)
        return { status: error.response.status, errorMessage: error.response.data.message}
        
    }
})

const chefSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers: builder =>{
        builder.addCase(getFoods.fulfilled, (state, action) => {
            state.foodList = action.payload
        })
        builder.addCase(getDrinks.fulfilled, (state, action)=> {
            state.drinkList = action.payload
        })
        
        builder.addCase(getOrders.fulfilled, (state, action)=>{
            console.log(action.payload)
        })

    }
});


export default chefSlice.reducer;