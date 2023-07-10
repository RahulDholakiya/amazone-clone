import { configureStore } from "@reduxjs/toolkit";
import reducerSlice from "./Reducer/ReducerCom";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducerSlice);

const store = configureStore({
  reducer: {
    addProduct: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
