import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../Pages/DashBoard'
import SideBar from './SideBar'

const RouterNav = () => {
    return (
        <div className='flex'>
            <SideBar/>
            <Routes>
                <Route path='/dashboard' element={<DashBoard/>} />
            </Routes>
        </div>
    )
}

export default RouterNav