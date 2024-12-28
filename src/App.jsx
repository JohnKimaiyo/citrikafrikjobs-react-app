import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import landingPage from './pages/landing'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([


  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>
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
