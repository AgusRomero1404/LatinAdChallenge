import React from 'react';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './pages/hero';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Edit from './pages/edit';

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/edit" element={<Edit/>} />
      </Routes>
    </>
  )
}

export default App
