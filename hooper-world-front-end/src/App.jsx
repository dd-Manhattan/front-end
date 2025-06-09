import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
// import Home from './pages/Home';

export default function App() {
  return (
    <div style={{ backgroundColor: '#000', color: 'white', minHeight: '100vh' }}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
