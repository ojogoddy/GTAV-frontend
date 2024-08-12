import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from '../page/Homepage'
import WebLayouts from '../layouts/WebLayouts'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<WebLayouts/>}>
                <Route index element={<Homepage/>}/>
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes
