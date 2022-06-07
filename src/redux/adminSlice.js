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

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    showChangePasswordModal: (state, action) => {
      state.showChangePasswordModal = action.payload;
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

export const { showChangePasswordModal } = adminSlice.actions;

export default adminSlice.reducer;
