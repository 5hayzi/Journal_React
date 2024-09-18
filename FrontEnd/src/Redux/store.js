import { configureStore } from '@reduxjs/toolkit'
import ThemeReducer from './react_component/theme.js'
import EditorDataReducer from './react_component/EditorData.js'
import UserReducer from './react_component/UserData.js'

export default configureStore({
  reducer: {
    theme : ThemeReducer,
    editorData : EditorDataReducer,
    userData : UserReducer
  },
})