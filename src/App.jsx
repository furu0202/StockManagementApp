import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ManagementScreen from 'src/components/ManagementScreen';
import TopScreen from 'src/components/TopScreen';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TopScreen />} />
        <Route path='/stock-management' element={<ManagementScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
