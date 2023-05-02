import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Outlet} from "react-router-dom"
import Login from './Login'
function RootLayout() {
  return (
    <div>
     <Login/>
    </div>
  )
}

export default RootLayout
