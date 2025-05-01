import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // <-- Import routing
import './index.css';
import Productsbuy from './Productbuy';
import Landingpage from './Landingpage';
import Homepage from './Homepage';
import Loginpage from './Loginpage';
import Admin from './Admin';
import Adminsales from './Adminsales';
import Adminretailer from './Adminretailer';
import Adminuserlist from './Adminuserlist';
import Adminstock from './Adminstock';
import Customerpage from './Customerpage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Customerpage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminsales" element={<Adminsales />} />
        <Route path="/adminretailer" element={<Adminretailer />} />
        <Route path="/adminstock" element={<Adminstock />} />
        <Route path="/adminuserlist" element={<Adminuserlist />} />
        <Route path="/products1" element={<Productsbuy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
