import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import UserNavbar from './UserNavbar'
import Services from './Services'
import ViewMore from './ViewMore'

const UserPortal = () => {
  return (
    < >
        <UserNavbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>    
        <Route element={<Services/>} path='/services'/>    
        <Route element={<ViewMore/>} path='/viewmore/:id'/>    
      </Routes>
    </ >
  )
}

export default UserPortal
