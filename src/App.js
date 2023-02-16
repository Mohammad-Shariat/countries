import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Countries from './components/Countries';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Countries />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
