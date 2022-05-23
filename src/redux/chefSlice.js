import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from '../network/api';


const initialState = {
    orders: {}
}

export const getOrder = createAsyncThunk('admin/getOder', async(orderDate)=>{
    try {
        const response = await API.get(`/order/daily?menu_date=${orderDate}`);
        console.log(response)
    } catch (error) {
        // console.log(error.response);
        const data = {status:error.response.status, errorMessage:error.response.data.message || error.response.data?.error[0].message}
        return data
    }
})

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers: builder =>{
        builder.addCase(getOrder.fulfilled, (state, action)=>{
            console.log(action.payload)
        })

    }
});


export default adminSlice.reducer;