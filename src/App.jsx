import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'src/components/Home';
import Main from 'src/components/Main';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Home/' element={<Home />} />
        <Route path='/Main/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
