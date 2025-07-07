import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar'

const Rootlayout = () => {
  return (
   <>
   <Sidebar/>
    <Outlet/>
   </>
  )
}

export default Rootlayout