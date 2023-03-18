import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'src/components/Home';
import Top from 'src/components/Top';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Top />} />
        <Route path='/Home/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
