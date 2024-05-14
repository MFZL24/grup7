// File: src/redux/slices/userSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Membuat async thunk untuk mendapatkan data pengguna
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    return response.data;
  } catch (error) {
    // Jika ada kesalahan, lemparkan kesalahan untuk ditangani
    throw Error(error.response.data);
  }
});

// Membuat slice reducer untuk mengelola state pengguna
const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        // Menandai bahwa permintaan sedang berlangsung
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        // Menandai bahwa permintaan telah berhasil dan memperbarui data pengguna
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        // Menandai bahwa permintaan gagal dan menyimpan pesan kesalahan
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
