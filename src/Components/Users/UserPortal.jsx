import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

const UserPortal = () => {
  return (
    < >
      <Routes>
        <Route element={<Home/>} path='/'/>    
      </Routes>
    </ >
  )
}

export default UserPortal
