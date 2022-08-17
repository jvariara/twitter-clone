import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  username: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.photo = action.payload.photo;
    },

    setSignOutState: (state) => {
      state.name = null;
      state.username = null;
      state.photo = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions

export const selectUserName = state => state.user.name
export const selectUserUsername = state => state.user.username
export const selectUserPhoto = state => state.user.photo

export default userSlice.reducer