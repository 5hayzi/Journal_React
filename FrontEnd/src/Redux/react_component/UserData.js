import { createSlice } from "@reduxjs/toolkit";

export const UserData = createSlice({
  name: "UserData",
  initialState: {
    loggedIn: false,
    name: "",
    email: "",
    id: "",
    img: null,
    twoFactor: false,
    rememberMe: false,
    gender: "",
  },

  reducers: {
    setValue: (state, action) => {
      const { name, email, _id, img, twoFactor, gender } = action.payload;
      state.name = name;
      state.email = email;
      state.id = _id;
      state.img = img;
      state.twoFactor = twoFactor;
      state.gender = gender;
      state.loggedIn = true;
    },
    setUpdate: (state, action) => {
      const { name, email, img, twoFactor, gender } = action.payload;
      state.name = name;
      state.email = email;
      state.img = img;
      state.twoFactor = twoFactor;
      state.gender = gender;
      state.loggedIn = true;
    },
    setRemember: (state, action) => {
      state.rememberMe = action.payload;
    },
  },
});

export const { setValue, setUpdate, setRemember } = UserData.actions;

export default UserData.reducer;
