import { createSlice } from '@reduxjs/toolkit';

export const EditorData = createSlice({
  name: 'EditorData',
  initialState: {
    count: 0,
    pageData: [{
            value: '',
            pageInfo: {},
            img: null,
    }],
  },

  reducers: {
    setValue: (state, action) => {
      state.pageData[state.count].value = action.payload;
    },
    setPageInfo: (state, action) => {
      state.pageData[state.count].pageInfo = action.payload;
    },
    setImage: (state, action) => {
      state.pageData[state.count].img = action.payload;
    },
  },
});

export const { setValue, setPageInfo, setImage } = EditorData.actions;

export default EditorData.reducer;
