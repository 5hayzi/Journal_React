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
  path:"/access/log-in",
  element:<Access/>
  },
  {
  path:"/access/sign-up",
  element:<Access/>
  },
  {
  path:"/access/log-in/reset-password",
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
    element:<Settings title='general'/>
  },
  {
    path:"/settings/notification",
    element:<Settings title='notification'/>
  },
  {
    path:"/settings/delete-account",
    element:<Settings title='delete-account'/>
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)


