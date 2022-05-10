import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  API from '../network/api';

const initialState = {
    status: '',
    user: {} ,
    isLoggedIn: false
}


export const logInUser = createAsyncThunk('user/login', async(userData) => {
try {
    const response = await API.post('/login', userData );
    // console.log(response)
    const data = {status: response.status, token:response.data.data.token, user:response.data.data.user};
    return data
} catch (error) {
    // console.log(error.response);
    const data = {status:error.response.status, errorMessage:error.response.data.message}
    return data
    
}
})


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(logInUser.pending, (state, action)=> {
            state.status='pending';
        })
        builder.addCase(logInUser.rejected, (state, action)=> {
            state.status='rejected';
        })
        builder.addCase(logInUser.fulfilled, (state, action)=>{
            state.status= 'succes';
            // console.log(action)
            if(action.payload.status===202){
                state.user = action.payload.user;
                // need to change type from number to word
                // 0-user, 2-admin, 1-chef
                if(action.payload.user.type === 0){
                    state.user.type = 'user'
                }else if( action.payload.user.type === 1){
                    state.user.type = 'chef'
                }else if(action.payload.type === 2){
                    state.user.type = 'admin'
                }
                localStorage.setItem('user_token', action.payload.token);
            } else {

            }
        })
    }
})


export default userSlice.reducer;