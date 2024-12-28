import React from 'react'
import {Outlet} from 'react-router-dom'
function Applayout() {
  return (
    <div> Applayout
        <Outlet/>
    </div>
  )
}

export default Applayout