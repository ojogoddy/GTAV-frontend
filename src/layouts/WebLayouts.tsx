import React from 'react'
import Header from '../block/Header'
import Footer from '../block/Footer'
import { Outlet } from 'react-router-dom'

const WebLayouts:React.FC = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default WebLayouts
