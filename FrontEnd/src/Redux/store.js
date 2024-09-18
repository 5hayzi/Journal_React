import { configureStore, combineReducers } from '@reduxjs/toolkit'
import ThemeReducer from './react_component/theme.js'
import EditorDataReducer from './react_component/EditorData.js'
import UserReducer from './react_component/UserData.js'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  theme : ThemeReducer,
  editorData : EditorDataReducer,
  userData : UserReducer
})

const persistConfig ={
  key: 'root',
  storage,
  version: 1,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store);