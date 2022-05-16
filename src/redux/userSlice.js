import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  API from '../network/api';
import jwtDecode from "jwt-decode";

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
});




const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action)=>{
            // console.log(action.payload)
            state.user = jwtDecode(action.payload)
            state.isLoggedIn = true;
            state.status = 'Login successful'
        },
        logOutCurrentUser: (state) => {
            state.user = {};
            state.status="User logged out";
            localStorage.clear();
            state.isLoggedIn =false;
        },
        // getUserType : (state) => {
        //     console.log('get user type', state)
        //     return state.user.type
        // }

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
                localStorage.setItem('user_token', action.payload.token);

            } else {

            }
        })
    }
})

export const { setCurrentUser, logOutCurrentUser } = userSlice.actions;

export default userSlice.reducer;