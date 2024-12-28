import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import landingPage from './pages/landing'


const router = createBrowserRouter([


  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<LadingPage/>
      }
    ]
  }
])
function App() {
  
}

export default App
