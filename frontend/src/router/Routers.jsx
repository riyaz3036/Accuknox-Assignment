import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Pages/Home'
import Search from '../Pages/Search'


const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search/:id' element={<Search />} /> 
    </Routes>
  );
};

export default Routers;