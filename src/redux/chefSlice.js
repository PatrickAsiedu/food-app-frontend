import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../network/api";

const initialState = {
  orders: {},
  foodList: [],
  drinkList: [],
  allOrders: [],
  allMenus: [],
};

export const getFoods = createAsyncThunk("chef/fetchAllFoods", async () => {
  try {
    const response = await API.get("/food");
    return response.data.foods;
  } catch (error) {
    console.log(error.response);
  }
});

export const addFood = createAsyncThunk('chef/addFood', async(foodName) => {
  try {
    const response = await API.post('/food', foodName);
    console.log(response)
    return response.data.message
  } catch (error) {
    console.log(error.response.message)
  }
})

export const deleteFood = createAsyncThunk('chef/deletefood', async(FoodID) => {
  try {
    const response = await API.put('/deletefood', FoodID);
    return {status: response.status, message: response.data.message}
  } catch (error) {
    console.log(error.response)
  }
})

export const editFood = createAsyncThunk('chef/editFood', async(foodObject)=>{
  try {
    const response = await API.put('/food', foodObject)
    return {status: response.status, message: response.data.message}
  } catch (error) {
    console.log(error.response)
    return { status: error.response.status, message: 'Error here'}
  }
});

export const addDrink = createAsyncThunk('chef/addDrink', async(DrinkName) => {
  try {
    const response = await API.post('/drink', DrinkName);
    console.log(response)
    return response.data.message
  } catch (error) {
    console.log(error.response.message)
  }
})

export const getDrinks = createAsyncThunk("chef/fetchAllDrinks", async () => {
  try {
    const response = await API.get("/drink");
    return response.data.drinks;
  } catch (error) {
    console.log(error.response);
  }
});

export const deleteDrink = createAsyncThunk('chef/deleteDrink', async(DrinkID) => {
  try {
    const response = await API.put('deletedrink', DrinkID);
    return {status: response.status, message: response.data.message}
  } catch (error) {
    console.log(error.response)
  }
});

export const editDrink = createAsyncThunk('chef/editdrink', async(drinkObject)=>{
  try {
    const response = await API.put('/drink', drinkObject)
    return {status: response.status, message: response.data.message}
  } catch (error) {
    console.log(error.response)
    return { status: error.response.status, message: 'Error here'}
  }
});

export const getAllOrders = createAsyncThunk("chef/getAllOrder", async () => {
  try {
    const response = await API.get("/menu/all");
    return response;
  } catch (error) {
    return error.response;
  }
});

export const getOrders = createAsyncThunk(
  "chef/getOders",
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
      console.log(error.response);
      const data = {
        status: error.response.status,
        errorMessage:
          error.response.data.message || error.response.data?.error[0].message,
      };
      return data;
    }
  }
);

export const addMenu = createAsyncThunk("chef/add/Menu", async (menuData) => {
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

export const editMenu = createAsyncThunk("chef/add/Menu", async (menuData) => {
  try {
    const response = await API.put("/menu", menuData);
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

export const getMenu = createAsyncThunk("chef/getmenu", async (menuDate) => {
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


export const getAllMenu = createAsyncThunk('chef/getAllMenu', async()=>{
  try {
    const response = await API.get('/menu/all');
    // console.log(response)
    return {status: response.status, data: response.data.data}
  } catch (error) {
    console.log(error.response)
    return {status: error.response.status}
  }
});

export const deleteMenu = createAsyncThunk('chef/deleteMeu', async(menuID) => {
  try {
    const response = await API.delete(`/menu?menu_id=${menuID}`);
    console.log(response)
    return {status: response.status, message: response.data.message}
  } catch (error) {
    return {status: error.response.status}
  }
})

const chefSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFoods.fulfilled, (state, action) => {
      state.foodList = action.payload;
    });
    builder.addCase(getDrinks.fulfilled, (state, action) => {
      state.drinkList = action.payload;
    });

    builder.addCase(getOrders.fulfilled, (state, action) => {
      // console.log(action.payload)
      // if(action.payload.status === 200){
      //     state.todayOrders = action.payload.data
      // }
    });
  },
});

export default chefSlice.reducer;
