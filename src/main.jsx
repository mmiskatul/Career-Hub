import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Componenet/Root/Root'
import Home from './Componenet/Home/Home'
import AppliedJob from './Componenet/AppliedJob/AppliedJob'
import Statictics from './Componenet/Statictics/Statictics'
import Blog from './Componenet/Blog/Blog'
import Apply from './Componenet/Apply/Apply'
import Errorpage from './Componenet/ErrorPage/Errorpage'
import Jobdetails from './Componenet/FeatureJob/Jobdetails'

const  router=createBrowserRouter([
    {
      path: '/',
      element:<Root/>,
      errorElement:<Errorpage/>,
      children:[
        {
          path:'/',
          element :<Home/>
        },{
          path:'/appliedjob',
          element:<AppliedJob/>
        },{
          path:'/statistics',
          element:<Statictics/>
        },{
          path:'/blog',
          element:<Blog/>
        },{
          path:'/applyform',
          element:<Apply/>
        },{
          path:'/job/:id',
          element:<Jobdetails/>,
          loader:()=>fetch('../jobs.json')
        }
      ]
    },
    
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
