import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './Styles/index.css'
import HomePage from './Components/UI/HomePage.jsx';
import Notes from './Components/UI/Notes.jsx';

import Access from './Components/Access/Access.jsx';
import ResetPassword from './Components/Access/ResetPassword.jsx';
import Error404 from './Components/Error/Error404.jsx';
import Error500 from './Components/Error/Error500.jsx';


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
  element:<Notes/>
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
  } 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
