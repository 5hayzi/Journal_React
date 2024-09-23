import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './Styles/index.css'
import HomePage from './Components/UI/HomePage.jsx';
import NoteMenu from './Components/Notes/NotesMenu.jsx'
import Access from './Components/Access/Access.jsx';
import ResetPassword from './Components/Access/ResetPassword.jsx';
import Error404 from './Components/Error/Error404.jsx';
import Error500 from './Components/Error/Error500.jsx';
import NotesEditor from './Components/Notes/NotesEditor.jsx';
import Settings from './Components/User/Settings.jsx';
import { Provider } from 'react-redux'
import {store} from '../src/Redux/store.js'
import { persistor } from '../src/Redux/store.js'
import { PersistGate } from 'redux-persist/integration/react';
import { useSelector} from 'react-redux';
import SignOut from './Components/Access/SignOut.jsx';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "*",
    element:<Error404/>
  },
  {
  path: "/",
  element:<HomePage/>
  },
  {
  path:"/view-notes",
  element:<NoteMenu/>
  },
  {
    path:"/view-notes/editor",
    element:<NotesEditor/>
  },
  {
  path:"/access/login",
  element:<Access/>
  },
  {
  path:"/access/signup",
  element:<Access/>
  },
  {
  path:"/access/login/reset-password",
  element:<ResetPassword/>
  },
  {
  path:"/error500",
  element:<Error500/>
  },
  {
    path:"/settings",
    element:<Settings/>
  },
  {
    path:"/settings/account",
    element:<Settings/>
  },
  {
    path:"/settings/general",
    element:<Settings/>
  },
  {
    path:"/settings/notification",
    element:<Settings/>
  },
  {
    path:"/settings/delete-account",
    element:<Settings/>
  },
  {
    path:"/signout",
    element:<SignOut/>
  },
  
])
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster/>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router}/>
      </PersistGate>
    </Provider>
  </StrictMode>,
)


