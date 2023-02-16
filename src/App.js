import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Countries from './components/Countries';
import Country from './components/Country';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Countries />}></Route>
        <Route path='/:name' element={<Country />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
