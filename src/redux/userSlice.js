import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../network/api";
import jwtDecode from "jwt-decode";

const initialState = {
  status: "",
  user: {},
  isLoggedIn: false,
  myOrders: {},
  currentMenu: {},
  currentOrder: {},
  showHamburger: false,
};

export const logInUser = createAsyncThunk("user/login", async (userData) => {
  try {
    const response = await API.post("/login", userData);
    // console.log(response)
    const data = {
      status: response.status,
      token: response.data.data.token,
      user: response.data.data.user,
    };
    return data;
  } catch (error) {
    // console.log(error.response);
    const data = {
      status: error.response.status,
      errorMessage:
        error.response.data.message || error.response.data?.error[0].message,
    };
    return data;
  }
});

export const signUpUser = createAsyncThunk("user/signup", async (userData) => {
  try {
    const response = await API.post("/register", userData);
    console.log(response);
    const data = { status: response.status, message: response.data.message };
    return data;
  } catch (error) {
    console.log(error.response);
    const data = {
      status: error.response.status,
      errorMessage:
        error.response.data.error.message ||
        error.response.data.error[0].message,
    };
    return data;
  }
});

export const getMyOrders = createAsyncThunk("user/getOrders", async () => {
  try {
    const response = await API.get("/order");
    return { status: response.status, data: response.data };
  } catch (error) {
    console.log(error.response);
    const data = {
      status: error.response.status,
      errorMessage:
        error.response.data.message ||
        error.response.data.error[0].message,
    };
    return data;
  }
});

export const getMenu = createAsyncThunk("user/getmenu", async (menuDate) => {
  console.log('menu date from useSlice: ', menuDate);
  // const queryString = menuDate !== undefined ?  `/menu?menu_date=${menuDate}` : '/menu'
  try {
    const response = await API.get(`/menu?menu_date=${menuDate}`);
    const data = { status: response.status, data: response.data.data };
    return data;
  } catch (error) {
    console.log(error.response);
    const data = {
      status: error.response.status,
      errorMessage:
        error.response.data.message || error.response.data.error[0].message,
      date: error.response.data.date,
    };
    return data;
  }
});

export const getCurrentMenu = createAsyncThunk("users/getCurrentMenu", async() => {
  try{
    const response = await API.get('/menu');
    // console.log(response)
    return {status: response.status, data: response.data.data}
  }catch (error){
    console.log(error.response)
    const data = {
      status: error.response.status,
      errorMessage:
        error.response.data.message || error.response.data.error[0].message,
      date: error.response.data.date,
    };
    return data;
    
  }
})

export const orderLunch = createAsyncThunk("user/order", async (orderData) => {
  try {
    const response = await API.post("/order", orderData);
    console.log(response);
    return { status: response.status, message: response.data.message };
  } catch (error) {
    console.log(error.response);
    const data = {
      status: error.response.status,
      errorMessage:
        error.response.data.message || error.response.data.error[0].message,
      order: error.response.data?.order,
    };
    return data;
  }
});

export const updateLunch = createAsyncThunk('user/updateLunch', async(orderData)=>{
  try {
    const response = await API.put("/order", orderData);
    // console.log(response)
    return {status: response.status, data: response.data}
  } catch (error) {
    // console.log(error.response)
    return { status: error.response.status,  data: error.response.data }
  }
})

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      // console.log(action.payload)
      state.user = jwtDecode(action.payload);
      state.isLoggedIn = true;
      state.status = "Login successful";
    },
    logOutCurrentUser: (state) => {
      state.user = {};
      state.status = "User logged out";
      localStorage.clear();
      state.isLoggedIn = false;
    },
    toggleHamburger: (state) => {
      state.showHamburger = !state.showHamburger;
    },
    // getUserType : (state) => {
    //     console.log('get user type', state)
    //     return state.user.type
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(logInUser.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(logInUser.rejected, (state, action) => {
      state.status = "rejected";
    });
    builder.addCase(logInUser.fulfilled, (state, action) => {
      state.status = "succes";
      // console.log(action)
      if (action.payload.status === 202) {
        state.user = action.payload.user;
        localStorage.setItem("user_token", action.payload.token);
      } else {
      }
    });

    // register
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.status = "rejected";
    });
    builder.addCase(signUpUser.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.status = "account created";
    });

    // order
    builder.addCase(getMyOrders.fulfilled, (state, action) => {
      console.log(action.payload)
      if(action.payload.status === 200){
        state.myOrders = action.payload.data.data;
      }else {
        state.myOrders = null
      }
      
    });

    // menu this is redundant
    builder.addCase(getMenu.fulfilled, (state, action) => {
      // console.log(action.payload.status);
      if (action.payload.status === 200) {
        state.currentMenu = action.payload.data;
        state.currentOrder = action.payload.user_order
      } else {
        // state.currentMenu = action.payload
        // console.log(action.payload);
      }
    });
    builder.addCase(getMenu.pending, (state, action) => {
      // console.log("get menu request still pending");
    });
    builder.addCase(getMenu.rejected, (state, action) => {
      console.log(action.payload);
    });

    builder.addCase(getCurrentMenu.fulfilled, (state, action) => {
      console.log(action.payload)
      if(action.payload.status === 200){
        state.currentMenu = action.payload.data;
        state.currentOrder = action.payload.user_order
        console.log(action.payload.user_order)
      }
    })

  },
});

export const { setCurrentUser, logOutCurrentUser, toggleHamburger } =
  userSlice.actions;

export default userSlice.reducer;
