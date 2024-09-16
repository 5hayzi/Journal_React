import { configureStore } from '@reduxjs/toolkit'
import ThemeReducer from './react_component/theme'
import EditorDataReducer from './react_component/EditorData'

export default configureStore({
  reducer: {
    theme : ThemeReducer,
    editorData : EditorDataReducer
  },
})