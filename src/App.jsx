import "./index.css";
import React from 'react'
import Categories from './components/Categories';
import Category from './components/Category';
import NotFound from './components/NotFound';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/category/:categoryId" element={<Category />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}
