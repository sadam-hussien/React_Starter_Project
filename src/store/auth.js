import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: { user: null },
  reducers: {},
});

export default auth.reducer;
