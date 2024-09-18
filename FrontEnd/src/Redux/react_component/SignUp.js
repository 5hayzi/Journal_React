import { createSlice } from '@reduxjs/toolkit';

export const SignUpData = createSlice({
  name: 'SignUpData',
  initialState: {
    signUpData: {
            name: '',
            email: '',
            password:'',
            img: null,
            twoFactor:"false",
    },
  },

  reducers: {
    setValue: (state, action) => {
        const { name, email, password, img, twoFactor } = action.payload;

      state.signUpData.name = name;
      state.signUpData.email = email;
      state.signUpData.password = password;
      state.signUpData.img = img;
      state.signUpData.twoFactor = twoFactor;
    }
  },
});

export const { setValue } = SignUpData.actions;

export default SignUpData.reducer;