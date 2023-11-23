import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from '../Pages';

export const MainRoute = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='*' element={<>Not Found</>} />
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};
