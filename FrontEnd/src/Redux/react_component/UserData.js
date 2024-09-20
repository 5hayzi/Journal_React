import { createSlice } from '@reduxjs/toolkit';
import { apiUrl } from '../../global';

export const UserData = createSlice({
  name: 'UserData',
  initialState: {
    loggedIn: false,
    name: '',
    email: '',
    password:'',
    img: null,
    twoFactor: false,
    rememberMe: false,
    gender: ''
  },

  reducers: {
    setValue: (state, action) => {
        const { name, email, password, img, twoFactor, gender } = action.payload;
      const image = `${apiUrl}${img}`;
      state.name = name;
      state.email = email;
      state.password = password;
      state.img = image;
      state.twoFactor = twoFactor;
      state.gender = gender;
      state.loggedIn = true;
    },
    setRemember: (state, action)=>{
      state.rememberMe = action.payload;
    }
  },
});

export const { setValue, setRemember } = UserData.actions;

export default UserData.reducer;