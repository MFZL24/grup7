// File: src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import userReducer from "./slices/userSlice"; // Import userSlice

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer, // Tambahkan userReducer ke reducers
  },
});

export default store;
