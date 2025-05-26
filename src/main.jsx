import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Componenet/Root/Root'
import Home from './Componenet/Home/Home'

const  router=createBrowserRouter([
    {
      path: '/',
      element:<Root/>,
      children:[
        {
          path:'/home',
          element :<Home/>
        }
      ]
    },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
