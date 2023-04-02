import './App.css';
import HomePage from './page/HomePage';
import OrderPage from './page/OrderPage';
import NotFoundPage from './page/NotFoundPage';
import CartPage from './page/CartPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/order" element={<OrderPage />} />
  <Route path="/cart" element={<CartPage />} />
  <Route path="/404" element={<NotFoundPage />} />
  </Routes>
  </BrowserRouter>
   );
 }