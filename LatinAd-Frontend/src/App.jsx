import React from 'react';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './pages/hero';
import Login from './pages/userLogin';
import Dashboard from './pages/dashboard';
import Edit from './pages/edit';
import Create from './pages/Create';

function App() {
//cuando tengamos la logica del navbar terminada, debemos agregar una redenrizacion condicional, en la que sí existe el valor key del token en la sessionStore, va a renderizarse el appBar
  return (
    <>
      <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/userLogin" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/edit" element={<Edit/>} />
          <Route path="/create" element={<Create/>} />
      </Routes>
    </>
  )
}

export default App
