import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Homepage from './pages/homepage';
import LandinPage from './pages/LandinPage';
import Logout from './pages/Logout';
import Messaging from './pages/Messaging';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandinPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/message/:userid" element={<Messaging />} />
    </Routes>
  </BrowserRouter>,
)
