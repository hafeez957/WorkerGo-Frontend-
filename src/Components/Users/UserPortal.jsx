import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import UserNavbar from './UserNavbar'
import Services from './Services'

const UserPortal = () => {
  return (
    < >
        <UserNavbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>    
        <Route element={<Services/>} path='/services'/>    
      </Routes>
    </ >
  )
}

export default UserPortal
