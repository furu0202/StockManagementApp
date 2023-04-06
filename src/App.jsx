import { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import DetailScreen from 'src/components/DetailScreen';
import ManagementScreen from 'src/components/ManagementScreen';
import TopScreen from 'src/components/TopScreen';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TopScreen />} />
        <Route path='/stock-management' element={<ManagementScreen />} />
        {/* <Route path={`/${}`} element={<DetailScreen />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
