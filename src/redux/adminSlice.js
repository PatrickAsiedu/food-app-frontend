import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../network/api";

const initialState = {
  orders: {},
  foodList: [],
  drinkList: [],
  allOrders: [],
  allMenus: [],
  allUsers: [],
  showChangePasswordModal: false,
  changePasswordModalUser: null,
};

export const getFoodsAdmin = createAsyncThunk(
  "admin/fetchAllFoods",
  async () => {
    try {
      const response = await API.get("/food");
      return response.data.foods;
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const addFoodAdmin = createAsyncThunk('chef/addFood', async(foodName) => {
  try {
    const response = await API.post('/food', foodName);
    console.log(response)
    return response.data.message
  } catch (error) {
    console.log(error.response.message)
  }
})

export const deleteFoodAdmin = createAsyncThunk('chef/deletefood', async(FoodID) => {
  try {
    const response = await API.put('/deletefood', FoodID);
    return {status: response.status, message: response.data.message}
  } catch (error) {
    console.log(error.response)
  }
})

export const editFoodAdmin = createAsyncThunk('chef/editFood', async(foodObject)=>{
  try {
    const response = await API.put('/food', foodObject)
    return {status: response.status, message: response.data.message}
  } catch (error) {
    console.log(error.response)
    return { status: error.response.status, message: 'Error here'}
  }
});

export const getDrinksAdmin = createAsyncThunk(
  "admin/fetchAllDrinks",
  async () => {
    try {
      const response = await API.get("/drink");
      return response.data.drinks;
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const addDrinkAdmin = createAsyncThunk('chef/addDrink', async(DrinkName) => {
  try {
    const response = await API.post('/drink', DrinkName);
    console.log(response)
    return response.data.message
  } catch (error) {
    console.log(error.response.message)
  }
})

export const deleteDrinkAdmin = createAsyncThunk('chef/deleteDrink', async(DrinkID) => {
  try {
    const response = await API.put('deletedrink', DrinkID);
    return {status: response.status, message: response.data.message}
  } catch (error) {
    console.log(error.response)
  }
});

export const editDrinkAdmin = createAsyncThunk('chef/editdrink', async(drinkObject)=>{
  try {
    const response = await API.put('/drink', drinkObject)
    return {status: response.status, message: response.data.message}
  } catch (error) {
    console.log(error.response)
    return { status: error.response.status, message: 'Error here'}
  }
});


export const getAllOrders = createAsyncThunk("admin/getAllOrder", async () => {
  try {
    const response = await API.get("/menu/all");
    return response;
  } catch (error) {
    return error.response;
  }
});

export const getOrders = createAsyncThunk(
  "admin/getOders",
  async (orderDate) => {
    try {
      let query = "";
      orderDate
        ? (query = `/order/daily?menu_date=${orderDate}`)
        : (query = "/order/daily");
      const response = await API.get(query);
      // console.log(response)
      const data = { status: response.status, data: response.data.data };
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
  }
);

export const addMenu = createAsyncThunk("admin/add/Menu", async (menuData) => {
  try {
    const response = await API.post("/menu", menuData);
    console.log(response);
    return { status: response.status, message: response.data.message };
  } catch (error) {
    console.log(error.response);
    return {
      status: error.response.status,
      errorMessage: error.response.data.message,
    };
  }
});

export const getMenu = createAsyncThunk("admin/getmenu", async (menuDate) => {
  console.log(menuDate);
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

export const getAllUsers = createAsyncThunk("admin/getallusers", async () => {
  try {
    const response = await API.get("/allusers");
    console.log(response);
    return { status: response.status, data: response.data.data };
  } catch (error) {
    console.log(error.response);
  }
});

export const addUser = createAsyncThunk("admin/adduser", async (user) => {
  try {
    const response = await API.post("/user", user);
    console.log(response);
    return { status: response.status };
  } catch (error) {
    // console.log(error.response);
    return {
      status: error.response.status,
      errorMessage: error.response.data.message,
    };
  }
});

export const approveUser = createAsyncThunk(
  "admin/approveuser",
  async (userID) => {
    try {
      const response = await API.put("/user/approve", userID);
      console.log(response);
      return { status: response.status };
    } catch (error) {
      console.log(error.response);
      return {
        status: error.response.status,
        errorMessage: error.response.data.message,
      };
    }
  }
);

export const denyUser = createAsyncThunk("admin/denyuser", async (userID) => {
  try {
    const response = await API.put("/approvalrequest/deny", userID);
    console.log(response);
    return { status: response.status };
  } catch (error) {
    console.log(error.response);
    return {
      status: error.response.status,
      errorMessage: error.response.data.message,
    };
  }
});


export const resetPassword = createAsyncThunk('admin/resetPassword', async(user) => {
  try {
    const response = await API.post('/reset-password', user);
    console.log(response)
    return { stats: response.status, data: response.data.message}
  } catch (error) {
    console.log(error.response)
    return {status: error.response.status}
  }
});

export const getAllMenu = createAsyncThunk('chef/getAllMenu', async()=>{
  try {
    const response = await API.get('/menu/all');
    // console.log(response)
    return {status: response.status, data: response.data.data}
  } catch (error) {
    console.log(error.response)
    return {status: error.response.status}
  }
})



const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    changePasswordModal: (state, action) => {
      state.showChangePasswordModal = action.payload.state;
      state.changePasswordModalUser = action.payload.user
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFoodsAdmin.fulfilled, (state, action) => {
      state.foodList = action.payload;
    });
    builder.addCase(getDrinksAdmin.fulfilled, (state, action) => {
      state.drinkList = action.payload;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.allUsers = action.payload.data;
    });
  },
});

export const { changePasswordModal } = adminSlice.actions;

export default adminSlice.reducer;
