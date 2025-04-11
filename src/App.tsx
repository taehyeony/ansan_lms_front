import React from 'react';
import './App.css';
import Temp from 'views/temp';
import { Route, Routes } from 'react-router-dom';
import { MAIN_PATH } from 'constant';
import { Header } from 'layouts';

function App() {
  return (
    <Routes>
      <Route path={MAIN_PATH()} element={<Temp />} />
    </Routes>
  );
}

export default App;
