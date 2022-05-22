import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
const initialState = {
    orders:{},
    hasOrdered:false,
}




const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers:{},
    extraReducers: builder=>{

    }
});

export default orderSlice.reducer;