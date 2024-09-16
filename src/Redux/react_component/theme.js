import { createSlice } from '@reduxjs/toolkit'

export const theme = createSlice({
  name: 'theme',
  initialState: {
    value: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
  },
  reducers: {
    switchTheme: (state) => {
        state.value = state.value === 'light' ? 'dark' : 'light';

        if (state.value == 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        localStorage.setItem('theme', state.value);    
    },
  },
});

export const { switchTheme } = theme.actions

export default theme.reducer
