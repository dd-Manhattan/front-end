import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from "../src/Pages/Home"
import { Login } from './Pages/Login';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}
