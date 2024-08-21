import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './Components/UI/NavBar.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './Styles/index.css'
import HomePage from './Components/UI/HomePage.jsx';
import Notes from './Components/UI/Notes.jsx';
import SignUp from './Components/Access/SignUp.jsx'
import Login from './Components/Access/Login.jsx'

const router = createBrowserRouter([
  {
  path: "/",
  element:<HomePage/>
  },
  {
  path:"/view-notes",
  element:<Notes/>
  },
  {
  path:"/log-in",
  element:<Login/>
  },
    {
    path:"/sign-up",
    element:<SignUp/>
    }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
