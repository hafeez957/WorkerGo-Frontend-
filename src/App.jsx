import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import './App.css'
import LandingPage from './Components/LandingPage'
import UserLogin from './Components/Users/UserLogin'
import UserPortal from './Components/Users/UserPortal'

const App = () => {
  return (
    <>
      {/* <Navbar/> */}
       <Routes>
        <Route element={<LandingPage/>}  path='/' />
        <Route element={<UserLogin/>}  path='/userlogin' />
        <Route element={<UserPortal/>} path='/userportal/*'/>
       </Routes>
    </>
  )
}

export default App
