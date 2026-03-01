import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import './App.css'

const App = () => {
  return (
    <>
       <Routes>
        <Route element={<Navbar/>}  path='/' />
       </Routes>
    </>
  )
}

export default App
