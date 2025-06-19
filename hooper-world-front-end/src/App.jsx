import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {Home} from "../src/Pages/Home"



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />

      </Routes>
    </BrowserRouter>
  );
}
