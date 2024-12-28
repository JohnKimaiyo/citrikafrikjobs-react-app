import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './pages/landing'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import onboarding from './pages/onboarding'
const router = createBrowserRouter([


  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>,
      },
      {
        element:<AppLayout/>,
        children:[
          {
            path:'/onboarding',
            element:<Onboarding/>,
          }
    ]
  }
])
function App() {
  return(
    <RouterProvider router={router}/>

  )
}

export default App
