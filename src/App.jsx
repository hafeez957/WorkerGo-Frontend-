import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import './App.css'
import LandingPage from './Components/LandingPage'

const App = () => {
  return (
    <>
       <Routes>
        <Route element={<LandingPage/>}  path='/' />
       </Routes>
    </>
  )
}

export default App
