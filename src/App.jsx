import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Hero from './pages/hero';
import Login from './pages/userLogin';
import Dashboard from './pages/dashboard';


function App() {
  return (
    <>
   
      <Routes>
      
          <Route path="/" element={<Hero/>} />
          <Route path="/userLogin" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        

      </Routes>
      
    </>
  )
}

export default App
