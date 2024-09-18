import { configureStore } from '@reduxjs/toolkit'
import ThemeReducer from './react_component/theme'
import EditorDataReducer from './react_component/EditorData'
import SignUpReducer from './react_component/SignUp'

export default configureStore({
  reducer: {
    theme : ThemeReducer,
    editorData : EditorDataReducer,
    signUpData : SignUpReducer
  },
})