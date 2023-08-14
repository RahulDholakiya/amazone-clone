import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk("fetchProduct", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  try {
    return response.json();
  } catch (error) {
    console.log("error", error);
  }
});

const reducerSlice = createSlice({
  name: "addProduct",
  initialState: {
    addCart: [],
    logCart: {},
    isLogin: false,
    isLoading: false,
    data: null,
    isError: false,
    userId: "",
  },
  reducers: {
    addToCart: (state, action) => {
      state.addCart = [...state.addCart, action.payload];
      console.log(action.payload);
    },
    removeToCart: (state, action) => {
      state.addCart.splice(action.payload, 1);
      state.addCart = [...state.addCart];
    },
    loginCart: (state, action) => {
      state.logCart = action.payload;
      console.log("logCart", action.payload);
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.isError = true;
      console.log("error", action.payload);
    });
  },
});

export const {
  addToCart,
  removeToCart,
  loginCart,
  setIsLogin,
  setUserId,
  setUserDetails,
} = reducerSlice.actions;
export default reducerSlice.reducer;
