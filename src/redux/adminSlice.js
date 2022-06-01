import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from '../network/api';

const initialState = {
    orders: {},
    foodList: [],
    drinkList: [],
    allOrders: [],
    allMenus: [],
    allUsers: [],

}

export const getFoods = createAsyncThunk('admin/fetchAllFoods', async()=>{
    try {
        const response = await API.get('/food');
        return response.data.foods
    } catch (error) {
        console.log(error.response)
    }
});

export const getDrinks = createAsyncThunk('admin/fetchAllDrinks', async()=>{
    try {
        const response = await API.get('/drink');
        return response.data.drinks
    } catch (error) {
        console.log(error.response)
    }
});

export const getAllOrders = createAsyncThunk('admin/getAllOrder', async()=>{
    try {
        const response = await API.get('/menu/all');
        return response
    } catch (error) {
        return error.response
    }
})

export const getOrders = createAsyncThunk('admin/getOders', async(orderDate)=>{
    try {
        const response = await API.get(`/order/daily?menu_date=${orderDate}`);
        console.log(response)
    } catch (error) {
        // console.log(error.response);
        const data = {status:error.response.status, errorMessage:error.response.data.message || error.response.data?.error[0].message}
        return data
    }
});


export const addMenu = createAsyncThunk('admin/add/Menu', async(menuData)=>{
    try {
        const response = await API.post('/menu', menuData);
        console.log(response)
        return {status: response.status, message: response.data.message}
    } catch (error) {
        console.log(error.response)
        return { status: error.response.status, errorMessage: error.response.data.message}
        
    }
});


export const getAllUsers = createAsyncThunk('admin/getallusers', async()=>{
    try{
        const response = await API.get('/allusers');
        console.log(response)
        // return { status: response.status, data: response.data}
    }catch(error){
        console.log(error.response)
    }
})

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers:{}
})



export default adminSlice.reducer;