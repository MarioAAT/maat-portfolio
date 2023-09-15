import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { Home } from './home/home'

export const MainApp = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
    
    </>
  )
}
