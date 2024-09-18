import { createSlice } from '@reduxjs/toolkit';

export const UserData = createSlice({
  name: 'UserData',
  initialState: {
    loggedIn: false,
    name: '',
    email: '',
    password:'',
    img: null,
    twoFactor: false,
  },

  reducers: {
    setValue: (state, action) => {
        const { name, email, password, img, twoFactor } = action.payload;
      state.name = name;
      state.email = email;
      state.password = password;
      state.img = img;
      state.twoFactor = twoFactor;
      state.loggedIn = true;
    }
  },
});

export const { setValue } = UserData.actions;

export default UserData.reducer;